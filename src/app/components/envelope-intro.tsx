import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import imgUp from '@/imports/Стартовая/534ac4501d80e943d46fe2d9e194be9001c4ef0a.png';
import imgDown from '@/imports/Стартовая/c9f93ac668db0585d33eea47faf742dbb32b816f.png';

/** Предзагружает одно изображение, всегда резолвится (даже при ошибке). */
function preloadImage(src: string) {
  return new Promise<void>((resolve) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = src;
  });
}

/**
 * Полноэкранный стартовый экран-конверт, который также выполняет роль прелоадера.
 *
 * Сначала, пока реально не загрузятся изображения первых двух экранов сайта
 * (`siteImages`), собственная графика конверта и шрифты, показывается спокойный
 * лоадер. Только после этого конверт проявляется и становится кликабельным.
 * При нажатии верхняя и нижняя половины «разъезжаются» вверх и вниз,
 * открывая доступ к остальному сайту.
 */
export function EnvelopeIntro({ siteImages = [] }: { siteImages?: string[] }) {
  const reduced = useReducedMotion();
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);

  // Блокируем прокрутку, только пока конверт не начали открывать.
  // Как только пользователь нажал — сразу возвращаем скролл, не дожидаясь
  // завершения анимации разъезжающихся половин. Блокируем и <html>, и <body>,
  // т.к. в зависимости от окружения скроллится разный элемент.
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    if (open) {
      html.style.overflow = '';
      body.style.overflow = '';
      return;
    }
    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';
    return () => {
      html.style.overflow = '';
      body.style.overflow = '';
    };
  }, [open]);

  // Дожидаемся реальной загрузки картинок первых экранов и шрифтов.
  useEffect(() => {
    let cancelled = false;
    const assets = [imgUp, imgDown, ...siteImages];
    const fontsReady = (document as Document & { fonts?: FontFaceSet }).fonts?.ready ?? Promise.resolve();

    Promise.all([...assets.map(preloadImage), fontsReady]).then(() => {
      if (!cancelled) setReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, [siteImages]);

  const handleOpen = () => {
    if (!ready || open) return;
    setOpen(true);
    if (reduced) setDone(true);
  };

  const halfTransition = { duration: 1.15, ease: [0.76, 0, 0.24, 1] as const };

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-50 flex justify-center overflow-hidden"
          initial={false}
          exit={{ opacity: 0 }}
          // После начала открытия перестаём перехватывать события и убираем
          // заливку, чтобы под разъезжающимися половинами сразу был виден сайт
          // и его можно было листать.
          style={{
            pointerEvents: open ? 'none' : 'auto',
            backgroundColor: open ? 'transparent' : '#333b60',
          }}
          onClick={handleOpen}
          role="button"
          aria-busy={!ready}
          aria-label={ready ? 'Нажмите, чтобы открыть приглашение' : 'Загрузка приглашения'}
        >
          {/* Лоадер, пока изображения первых экранов не загружены */}
          <AnimatePresence>
            {!ready && (
              <motion.div
                className="absolute inset-0 z-[3] flex items-center justify-center bg-[#333b60]"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="size-12 rounded-full border-2 border-[#e8e5e3]/25 border-t-[#e8e5e3]"
                  animate={reduced ? undefined : { rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Конверт проявляется только когда всё готово */}
          <motion.div
            className="relative flex h-full w-full max-w-[440px] flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: ready ? 1 : 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Верхняя половина конверта (содержит сургучную печать у шва) */}
            <motion.div
              className="relative z-[2] mb-[-195px] h-[530px] w-full shrink-0"
              animate={open ? { y: '-115vh' } : { y: 0 }}
              transition={halfTransition}
              onAnimationComplete={() => open && setDone(true)}
            >
              <img
                alt=""
                src={imgUp}
                className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
              />
            </motion.div>

            {/* Нижняя половина конверта с надписью */}
            <motion.div
              className="relative z-[1] h-[509px] w-full shrink-0"
              animate={open ? { y: '115vh' } : { y: 0 }}
              transition={halfTransition}
            >
              <img
                alt=""
                src={imgDown}
                className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
              />
              <motion.p
                className="absolute left-1/2 top-[calc(50%-31.5px)] w-[228px] -translate-x-1/2 text-center text-[#e8e5e3] [word-break:break-word]"
                style={{
                  fontFamily: "'Le Murmure', sans-serif",
                  fontSize: 57,
                  lineHeight: 1.2,
                  mixBlendMode: 'plus-lighter',
                }}
                animate={
                  open
                    ? { opacity: 0, transition: { duration: 0.3 } }
                    : reduced || !ready
                      ? { opacity: 1 }
                      : { opacity: [0.6, 1, 0.6] }
                }
                transition={
                  open || !ready
                    ? undefined
                    : { duration: 2.6, repeat: Infinity, ease: 'easeInOut' }
                }
              >
                Нажмите, чтобы открыть приглашение
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
