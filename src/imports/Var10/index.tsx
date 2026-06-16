import { useState, useEffect, ReactNode, CSSProperties } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import image_ChatGPT_Image_14______2026_____23_30_01__1_ from '@/imports/ChatGPT_Image_14____._2026__.__23_30_01__1_.png'
import image_lilies__2_ from '@/imports/lilies__2_.png'
import svgPaths from "./svg-pdru4gjot5";
import Image24Vectorized from "./image24-vectorized";
import Frame9 from "./frame9";
import imgFrame621 from "./93642178c5d8c74d29c020ae815f1dbbae376b8a.png";
import imgFrame622 from "@/imports/Frame_40.png";
import imgVector from "./a86875c5eee6cad9b8281bffc9210829adae4244.png";
import img11MitrakisaHttpssMjRunwjyQxAv9YkwWhiteLaceDoilyInTheShap1 from "@/imports/love.png";
import imgRectangle80 from "./ca07739387156cd923628f57a92a567120c118f1.png";
import imgFrame26 from "./22f276327d768e9146b83c9760edafb3cb6b640e.png";
import imgUnsplash2D0OOuQKuvw from "./18255e0b9aaaddcef9c6e3049053ac06b34647b0.png";

function FadeInView({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduced = useReducedMotion();
  // content-visibility пропускает отрисовку секций за пределами экрана
  // (включая тяжёлые SVG-карты и mix-blend слои), убирая фризы при прокрутке.
  const perf: CSSProperties = { contentVisibility: 'auto', containIntrinsicSize: 'auto 760px' };
  if (reduced) return <div className={className} style={perf}>{children}</div>;
  return (
    <motion.div
      className={className}
      style={perf}
      // Анимируем только opacity (дёшево) — без transform целых поддеревьев,
      // чтобы не перекомпоновывать и не перерисовывать секции во время скролла.
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}

function MaskGroup() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[435px] left-1/2 w-full max-w-[440px]" data-name="Frame 40 1">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full mx-[0px] mt-[1px] mb-[0px]" src={imgFrame622} />
    </div>
  );
}
function Frame1() {
  const cls = "-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col font-['Craftwork_Sans',sans-serif] font-medium items-start leading-[1.2] left-1/2 text-[#333b60] text-[20px] top-[291px] uppercase w-[358px]";
  const inner = <><p className="relative shrink-0 w-full font-['Craftwork_Sans',sans-serif]">в это день мы скажем</p>
      <p className="relative shrink-0 text-right w-full">друг другу «да»</p>
      <p className="relative shrink-0 w-full">и очень хотим,</p>
      <p className="relative shrink-0 text-right w-full">чтобы вы были рядом</p>
    </>;
  return <div className={cls}>{inner}</div>;
}

function HeroNames() {
  return (
    <>
      <p className="[word-break:break-word] absolute font-['Le_Murmure',sans-serif] leading-[120px] left-[calc(50%-138px)] not-italic text-[110px] text-white top-[734px] uppercase whitespace-nowrap">8 августа</p>
      <p className="[word-break:break-word] absolute font-['Le_Murmure',sans-serif] leading-none left-[calc(50%-179px)] not-italic text-[#333b60] text-[120px] top-[48px] uppercase whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>Артём</p>
      <p className="[word-break:break-word] absolute font-['Le_Murmure',sans-serif] leading-none left-[calc(50%+58px)] not-italic text-[#333b60] text-[64px] top-[67px] whitespace-nowrap">&</p>
      <p className="[word-break:break-word] absolute font-['Le_Murmure',sans-serif] leading-none left-[calc(50%-37px)] not-italic text-[#333b60] text-[120px] top-[160px] uppercase whitespace-nowrap">Кcюша</p>
    </>
  );
}

function Hero() {
  return (
    <div className="bg-[#bbb2aa] h-[844px] overflow-hidden relative shrink-0 w-full" data-name="Hero">
      <MaskGroup />
      <Frame1 />
      <HeroNames />
    </div>
  );
}
function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 h-[329.121px] ml-[78.97px] mt-[82.8px] relative row-1 w-[356.117px]" data-name="Vector">
        <div className="absolute inset-[-0.21%_-0.2%_-0.25%_-0.2%]">
          <img alt="" className="block max-w-none size-full" height="330.662" src={imgVector} width="357.547" />
        </div>
      </div>
      <div className="col-1 ml-0 mt-0 relative row-1 size-[506px]" data-name="11mitrakisa_httpss_mj_runwjyQXAv9ykw_White_lace_doily_in_the_shap 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img11MitrakisaHttpssMjRunwjyQxAv9YkwWhiteLaceDoilyInTheShap1} />
      </div>
    </div>
  );
}

function Component2nd() {
  return (
    <div className="bg-[#333b60] relative shrink-0 w-full" data-name="2nd">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-center justify-center px-[16px] py-[54px] relative size-full">
          <Group />
          <p className="[word-break:break-word] font-['Craftwork_Sans',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[24px] text-center text-white uppercase w-[358px]">Семья начинается задолго до свадьбы. Она начинается с людей, которые любят, поддерживают и верят в нас. Спасибо, что вы есть</p>
          <p className="[word-break:break-word] font-['Craftwork_Sans',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[24px] text-center text-white uppercase w-[358px]">Ваше присутствие сделает этот день по‑настоящему особенным</p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[209px] items-center justify-center pt-[100px] relative shrink-0">
      <Image24Vectorized />
      <p className="[word-break:break-word] font-['Le_Murmure:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#333b60] text-[120px] text-center uppercase w-[358px]">МЕСТО</p>
    </div>
  );
}

function Component2026061501232Vectorized() {
  return (
    <div className="aspect-[1036/308] flex-[1_0_0] min-w-px opacity-60 overflow-clip relative" data-name="Снимок экрана 2026-06-15 в 01.23 2 [Vectorized]">
      <div className="absolute inset-[90.31%_19.49%_0.83%_77.88%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[90.22%_25.97%_0.92%_71.4%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[91.09%_25.89%_0.06%_71.48%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[11.47%_29.2%_79.67%_68.17%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[11.37%_19.51%_79.78%_77.86%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[45.26%_29.2%_45.89%_68.16%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[11.4%_45.41%_79.75%_51.96%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[11.46%_42.15%_79.68%_55.22%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[90.22%_84.31%_0.92%_13.06%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[45.22%_64.84%_45.92%_32.53%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[33.94%_19.49%_57.2%_77.87%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[33.89%_32.46%_57.26%_64.91%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[67.71%_81.05%_23.44%_16.31%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[67.72%_68.08%_23.43%_29.29%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[11.42%_55.13%_79.72%_42.24%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[45.23%_55.13%_45.91%_42.24%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[11.42%_71.34%_79.73%_26.02%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[67.71%_29.22%_23.43%_68.15%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[90.33%_16.23%_0.81%_81.14%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[56.45%_25.96%_34.7%_71.41%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[33.87%_45.42%_57.28%_51.95%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[67.76%_25.96%_23.38%_71.41%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[33.92%_51.87%_57.23%_45.5%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[67.74%_51.88%_23.4%_45.48%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[90.24%_38.92%_0.91%_58.45%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[56.42%_55.14%_34.73%_42.23%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[11.39%_51.87%_79.75%_45.5%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[90.28%_58.4%_0.87%_38.97%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[56.43%_97.28%_34.71%_0.09%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[33.97%_6.52%_57.18%_90.85%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[78.97%_29.22%_12.18%_68.15%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[33.9%_55.13%_57.25%_42.24%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[56.43%_29.21%_34.71%_68.16%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[11.42%_68.07%_79.73%_29.3%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[90.23%_22.71%_0.92%_74.65%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[33.9%_84.3%_57.25%_13.06%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[0.21%_38.91%_90.93%_58.46%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[56.4%_90.8%_34.75%_6.56%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[11.45%_16.24%_79.69%_81.13%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[79%_68.08%_12.15%_29.29%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[45.25%_9.76%_45.89%_87.61%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[67.74%_55.13%_23.4%_42.24%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[0.21%_58.37%_90.94%_38.99%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[78.97%_51.88%_12.17%_45.48%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[67.75%_77.81%_23.4%_19.56%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[22.63%_64.83%_68.52%_32.54%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[45.22%_68.09%_45.92%_29.28%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[67.72%_45.42%_23.43%_51.95%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[56.44%_45.42%_34.71%_51.95%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[22.65%_29.2%_68.5%_68.16%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[56.46%_71.34%_34.68%_26.03%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[33.91%_42.17%_57.24%_55.2%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[45.3%_16.24%_45.85%_81.13%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[56.44%_64.83%_34.7%_32.54%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[56.52%_9.76%_34.63%_87.61%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[33.92%_25.95%_57.22%_71.42%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[33.9%_68.08%_57.25%_29.28%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[56.48%_38.92%_34.66%_58.45%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[33.94%_3.28%_57.21%_94.09%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[78.98%_22.73%_12.17%_74.64%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[22.66%_51.87%_68.48%_45.5%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[0.18%_77.8%_90.96%_19.57%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[11.49%_13.01%_79.65%_84.36%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[78.97%_55.13%_12.17%_42.24%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[22.63%_45.41%_68.51%_51.96%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[78.98%_45.43%_12.17%_51.94%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[45.19%_61.59%_45.95%_35.78%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[45.26%_35.7%_45.88%_61.66%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[0.15%_71.34%_90.99%_26.03%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[45.26%_32.46%_45.88%_64.91%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[0.24%_13%_90.91%_84.37%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[67.71%_58.39%_23.44%_38.98%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[67.7%_42.17%_23.44%_55.2%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[56.41%_94.03%_34.73%_3.34%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[0.22%_74.57%_90.92%_22.8%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[45.31%_42.16%_45.84%_55.2%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[78.97%_81.05%_12.17%_16.32%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[22.62%_42.16%_68.52%_55.21%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[56.42%_77.8%_34.73%_19.57%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[78.99%_42.17%_12.16%_55.2%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[45.24%_84.31%_45.91%_13.06%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[56.45%_32.47%_34.69%_64.9%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[0.21%_81.04%_90.93%_16.33%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[33.91%_0.04%_57.23%_97.32%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[67.75%_6.54%_23.4%_90.83%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[33.92%_90.8%_57.23%_6.57%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[67.75%_22.73%_23.4%_74.64%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[67.78%_64.83%_23.37%_32.54%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[79.03%_25.96%_12.11%_71.41%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[33.95%_38.91%_57.2%_58.46%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[22.64%_32.46%_68.51%_64.91%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[34%_58.38%_57.15%_38.98%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[33.92%_22.72%_57.23%_74.65%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[56.46%_58.39%_34.69%_38.98%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[45.23%_81.05%_45.92%_16.32%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[56.47%_13.01%_34.67%_84.35%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[22.66%_22.72%_68.49%_74.65%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[33.93%_64.83%_57.22%_32.54%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[11.4%_74.57%_79.75%_22.8%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[78.97%_77.8%_12.18%_19.56%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[33.9%_71.34%_57.25%_26.03%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[67.71%_74.57%_23.44%_22.8%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[67.74%_32.46%_23.41%_64.91%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[45.22%_87.55%_45.93%_9.82%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[22.63%_90.77%_68.52%_6.59%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[33.86%_87.55%_57.28%_9.81%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[56.44%_74.58%_34.7%_22.79%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[22.62%_68.09%_68.53%_29.28%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[56.44%_51.88%_34.71%_45.49%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[22.64%_58.38%_68.51%_38.99%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[56.46%_6.56%_34.69%_90.8%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[78.97%_84.31%_12.18%_13.06%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[45.27%_48.63%_45.88%_48.73%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[22.64%_55.12%_68.51%_42.25%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[45.28%_13%_45.87%_84.37%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[22.65%_38.91%_68.49%_58.46%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[22.65%_74.57%_68.49%_22.8%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[22.66%_19.48%_68.48%_77.89%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[22.61%_71.34%_68.53%_26.03%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[67.75%_48.65%_23.4%_48.72%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[56.45%_42.17%_34.7%_55.2%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[67.77%_38.91%_23.37%_58.46%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[22.63%_16.24%_68.51%_81.12%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[22.64%_48.65%_68.51%_48.72%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
    </div>
  );
}

function Component2026061501232Vectorized1() {
  return (
    <div className="aspect-[1036/308] opacity-60 overflow-clip relative size-full" data-name="Снимок экрана 2026-06-15 в 01.23 2 [Vectorized]">
      <div className="absolute inset-[90.31%_19.49%_0.83%_77.88%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[90.22%_25.97%_0.92%_71.4%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[91.09%_25.89%_0.06%_71.48%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[11.47%_29.2%_79.67%_68.17%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[11.37%_19.51%_79.78%_77.86%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[45.26%_29.2%_45.89%_68.16%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[11.4%_45.41%_79.75%_51.96%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[11.46%_42.15%_79.68%_55.22%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[90.22%_84.31%_0.92%_13.06%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[45.22%_64.84%_45.92%_32.53%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[33.94%_19.49%_57.2%_77.87%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[33.89%_32.46%_57.26%_64.91%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[67.71%_81.05%_23.44%_16.31%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[67.72%_68.08%_23.43%_29.29%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[11.42%_55.13%_79.72%_42.24%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[45.23%_55.13%_45.91%_42.24%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[11.42%_71.34%_79.73%_26.02%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[67.71%_29.22%_23.43%_68.15%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[90.33%_16.23%_0.81%_81.14%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[56.45%_25.96%_34.7%_71.41%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[33.87%_45.42%_57.28%_51.95%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[67.76%_25.96%_23.38%_71.41%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[33.92%_51.87%_57.23%_45.5%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[67.74%_51.88%_23.4%_45.48%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[90.24%_38.92%_0.91%_58.45%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[56.42%_55.14%_34.73%_42.23%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[11.39%_51.87%_79.75%_45.5%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[90.28%_58.4%_0.87%_38.97%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[56.43%_97.28%_34.71%_0.09%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[33.97%_6.52%_57.18%_90.85%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[78.97%_29.22%_12.18%_68.15%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[33.9%_55.13%_57.25%_42.24%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[56.43%_29.21%_34.71%_68.16%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[11.42%_68.07%_79.73%_29.3%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[90.23%_22.71%_0.92%_74.65%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[33.9%_84.3%_57.25%_13.06%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[0.21%_38.91%_90.93%_58.46%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[56.4%_90.8%_34.75%_6.56%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[11.45%_16.24%_79.69%_81.13%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[79%_68.08%_12.15%_29.29%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[45.25%_9.76%_45.89%_87.61%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[67.74%_55.13%_23.4%_42.24%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[0.21%_58.37%_90.94%_38.99%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[78.97%_51.88%_12.17%_45.48%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[67.75%_77.81%_23.4%_19.56%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[22.63%_64.83%_68.52%_32.54%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[45.22%_68.09%_45.92%_29.28%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[67.72%_45.42%_23.43%_51.95%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[56.44%_45.42%_34.71%_51.95%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[22.65%_29.2%_68.5%_68.16%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[56.46%_71.34%_34.68%_26.03%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[33.91%_42.17%_57.24%_55.2%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[45.3%_16.24%_45.85%_81.13%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[56.44%_64.83%_34.7%_32.54%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[56.52%_9.76%_34.63%_87.61%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[33.92%_25.95%_57.22%_71.42%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[33.9%_68.08%_57.25%_29.28%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[56.48%_38.92%_34.66%_58.45%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[33.94%_3.28%_57.21%_94.09%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[78.98%_22.73%_12.17%_74.64%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[22.66%_51.87%_68.48%_45.5%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[0.18%_77.8%_90.96%_19.57%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[11.49%_13.01%_79.65%_84.36%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[78.97%_55.13%_12.17%_42.24%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[22.63%_45.41%_68.51%_51.96%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[78.98%_45.43%_12.17%_51.94%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[45.19%_61.59%_45.95%_35.78%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[45.26%_35.7%_45.88%_61.66%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[0.15%_71.34%_90.99%_26.03%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[45.26%_32.46%_45.88%_64.91%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[0.24%_13%_90.91%_84.37%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[67.71%_58.39%_23.44%_38.98%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[67.7%_42.17%_23.44%_55.2%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[56.41%_94.03%_34.73%_3.34%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[0.22%_74.57%_90.92%_22.8%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[45.31%_42.16%_45.84%_55.2%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[78.97%_81.05%_12.17%_16.32%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[22.62%_42.16%_68.52%_55.21%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[56.42%_77.8%_34.73%_19.57%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[78.99%_42.17%_12.16%_55.2%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[45.24%_84.31%_45.91%_13.06%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[56.45%_32.47%_34.69%_64.9%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[0.21%_81.04%_90.93%_16.33%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[33.91%_0.04%_57.23%_97.32%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[67.75%_6.54%_23.4%_90.83%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[33.92%_90.8%_57.23%_6.57%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[67.75%_22.73%_23.4%_74.64%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[67.78%_64.83%_23.37%_32.54%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[79.03%_25.96%_12.11%_71.41%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[33.95%_38.91%_57.2%_58.46%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[22.64%_32.46%_68.51%_64.91%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[34%_58.38%_57.15%_38.98%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[33.92%_22.72%_57.23%_74.65%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[56.46%_58.39%_34.69%_38.98%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[45.23%_81.05%_45.92%_16.32%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[56.47%_13.01%_34.67%_84.35%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[22.66%_22.72%_68.49%_74.65%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[33.93%_64.83%_57.22%_32.54%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[11.4%_74.57%_79.75%_22.8%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[78.97%_77.8%_12.18%_19.56%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[33.9%_71.34%_57.25%_26.03%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[67.71%_74.57%_23.44%_22.8%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[67.74%_32.46%_23.41%_64.91%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[45.22%_87.55%_45.93%_9.82%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[22.63%_90.77%_68.52%_6.59%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[33.86%_87.55%_57.28%_9.81%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[56.44%_74.58%_34.7%_22.79%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[22.62%_68.09%_68.53%_29.28%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[56.44%_51.88%_34.71%_45.49%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[22.64%_58.38%_68.51%_38.99%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[56.46%_6.56%_34.69%_90.8%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[78.97%_84.31%_12.18%_13.06%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[45.27%_48.63%_45.88%_48.73%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[22.64%_55.12%_68.51%_42.25%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[45.28%_13%_45.87%_84.37%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[22.65%_38.91%_68.49%_58.46%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[22.65%_74.57%_68.49%_22.8%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[22.66%_19.48%_68.48%_77.89%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[22.61%_71.34%_68.53%_26.03%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[67.75%_48.65%_23.4%_48.72%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[56.45%_42.17%_34.7%_55.2%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[67.77%_38.91%_23.37%_58.46%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[22.63%_16.24%_68.51%_81.12%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
      <div className="absolute inset-[22.64%_48.65%_68.51%_48.72%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.05501 3.05501">
          <ellipse cx="1.52751" cy="1.52751" fill="var(--fill-0, #333B60)" id="Ellipse 2128" rx="1.52751" ry="1.52751" />
        </svg>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[20px] items-center justify-center px-[10px] relative size-full">
          <Component2026061501232Vectorized />
          <div className="h-[43.291px] relative shrink-0 w-[65.877px]" data-name="Адрес">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65.8772 43.2911">
              <g id="ÐÐ´ÑÐµÑ">
                <path d={svgPaths.pcc79e80} fill="var(--fill-0, #333B60)" />
                <path d={svgPaths.pf9a2100} fill="var(--fill-0, #333B60)" />
                <path d={svgPaths.p2e940c00} fill="var(--fill-0, #333B60)" />
                <path d={svgPaths.p2b454e00} fill="var(--fill-0, #333B60)" />
                <path d={svgPaths.p26520480} fill="var(--fill-0, #333B60)" />
              </g>
            </svg>
          </div>
          <div className="flex flex-[1_0_0] items-center justify-center min-w-px relative">
            <div className="-scale-y-100 flex-none rotate-180 w-full">
              <Component2026061501232Vectorized1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start pb-[4px] pt-[24px] relative shrink-0">
      <Frame7 />
      <p className="[word-break:break-word] font-['Craftwork_Sans',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#333b60] text-[18px] text-center uppercase w-[358px]">
        Национальный Конный Парк Русь,
        <br aria-hidden />
        деревня Орлово, с29
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame">
          <path d={svgPaths.p1e03eac0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <motion.a href="https://yandex.ru/maps/org/avtomobilnaya_parkovka/194636624988?si=ku.taren" target="_blank" rel="noopener noreferrer" className="bg-[#5e4730] content-stretch drop-shadow-[0px_4px_12px_rgba(74,51,28,0.4)] flex gap-[10px] items-center justify-center pb-[22px] pt-[20px] relative rounded-[1000px] shrink-0 w-full no-underline" whileTap={{ scale: 0.97 }} transition={{ type: "spring", duration: 0.2, bounce: 0 }}>
      <Frame />
      <p className="[word-break:break-word] font-['Craftwork_Sans',sans-serif] font-thin leading-[1.2] relative shrink-0 text-[24px] text-center text-white whitespace-nowrap">Построить маршрут</p>
    </motion.a>
  );
}

function Component2nd1() {
  return (
    <div className="bg-[#cdc7c2] relative shrink-0 w-full" data-name="2nd">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-center px-[16px] py-[54px] relative size-full">
          <Frame2 />
          <div className="h-[260px] relative shrink-0 w-full">
            <img alt="" className="w-full h-auto block pointer-events-none" src={image_ChatGPT_Image_14______2026_____23_30_01__1_} />
          </div>
          <p className="[word-break:break-word] font-['Craftwork_Sans',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#333b60] text-[18px] uppercase w-[358px]">НКП «Русь» — живописное загородное пространство, где среди природы и близких людей мы отметим один из самых важных дней нашей жизни</p>
          <Frame3 />
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function CountdownTimer() {
  const getTimeLeft = () => {
    const target = new Date('2026-08-08T15:00:00+03:00');
    const now = new Date();
    const diff = target.getTime() - now.getTime();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0 };
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return { days, hours, minutes };
  };

  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <p className="[word-break:break-word] font-['Le_Murmure',sans-serif] leading-[normal] mix-blend-color-burn not-italic relative shrink-0 text-[#333b60] text-[54px] text-center whitespace-nowrap">
      {time.days}д {time.hours}ч {time.minutes}м
    </p>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[361px] items-center py-[130px] relative shrink-0">
      <Frame9 />
      <p className="[word-break:break-word] font-['Le_Murmure:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#333b60] text-[98px] text-center uppercase w-[358px]">Сб, 8 августа 15:00</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[358px] items-center justify-center relative shrink-0 w-full">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-[-15.4%] max-w-none size-[130.76%] top-[-15.31%]" src={imgFrame26} />
      </div>
      <p className="[word-break:break-word] font-['Craftwork_Sans',sans-serif] font-black leading-[normal] mix-blend-color-burn relative shrink-0 text-[#333b60] text-[16px] text-center uppercase whitespace-nowrap">До свадьбы</p>
      <CountdownTimer />
    </div>
  );
}

function Component2nd2() {
  return (
    <div className="bg-[#87a9c4] relative shrink-0 w-full" data-name="2nd">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-center px-[16px] py-[54px] relative size-full">
          <Frame4 />
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#593a1b] h-[100px] justify-self-stretch relative rounded-[16px] shrink-0">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Craftwork_Sans',sans-serif] font-medium leading-[1.2] min-w-px relative text-[18px] text-center text-white uppercase">Коричневый</p>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#333b60] h-[100px] justify-self-stretch relative rounded-[16px] shrink-0">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Craftwork_Sans',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[18px] text-center text-white uppercase w-[139px]">НЭЙВИ</p>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#766352] h-[100px] justify-self-stretch relative rounded-[16px] shrink-0">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Craftwork_Sans',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[18px] text-center text-white uppercase w-[139px]">КОРИЧНЕВЫЙ РУСТИК</p>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#87a9c4] h-[100px] justify-self-stretch relative rounded-[16px] shrink-0">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Craftwork_Sans',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[18px] text-center text-white uppercase w-[139px]">ДЫМНЫЙ ГОЛУБОЙ</p>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  const reduced = useReducedMotion();
  const swatches = [<Frame11 key="s1" />, <Frame12 key="s2" />, <Frame13 key="s3" />, <Frame14 key="s4" />];
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(2,fit-content(100%))] pt-[20px] relative shrink-0 w-full">
      {swatches.map((swatch, i) =>
        reduced ? swatch : (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ type: 'spring', duration: 0.5, bounce: 0, delay: i * 0.09 }}
          >{swatch}</motion.div>
        )
      )}
    </div>
  );
}

function Component2nd3() {
  return (
    <div className="bg-[#f9f5f1] relative shrink-0 w-full" data-name="2nd">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center px-[16px] py-[54px] relative size-full">
          <p className="[word-break:break-word] font-['Le_Murmure:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5e4730] text-[120px] text-center uppercase w-[358px]">Дресскод</p>
          <p className="[word-break:break-word] font-['Craftwork_Sans',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#5e4730] text-[18px] text-center uppercase w-[358px]">Просим поддержать палитру праздника — так кадры и атмосфера будут ещё красивее</p>
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

function Arc202606150229002Vectorized() {
  return (
    <div className="h-[267px] relative shrink-0 w-[140px]" data-name="Arc 2026-06-15 02.29.00 2 [Vectorized]">
      <svg id="arc-svg-main" className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140 267">
        <style>{`
          @keyframes arc-scroll-rotate {
            from { transform: rotate(-10deg); }
            to   { transform: rotate(10deg); }
          }
          @keyframes arc-enter {
            from {
              opacity: 0;
              transform: translateY(16px);
              filter: blur(4px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
              filter: blur(0);
            }
          }
          @media (prefers-reduced-motion: no-preference) {
            #arc-svg-main {
              animation: arc-enter 0.65s cubic-bezier(0.22, 0, 0, 1) 0.2s both;
            }
            #arc-scroll-g {
              transform-origin: 70px 133px;
              transform-box: fill-box;
              animation: arc-scroll-rotate linear both;
              animation-timeline: scroll(root block);
              animation-range: entry 0% exit 100%;
            }
          }
        `}</style>
        <g clipPath="url(#clip0_1_7334)" id="arc-scroll-g">
          <path d={svgPaths.p152e9480} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p37f9000} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p16f25630} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p30a10c80} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p2471a300} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p34734200} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p10e9d900} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p1de14800} fill="var(--fill-0, #87A9C4)" id="Vector_8" />
          <path d={svgPaths.p2c51bc00} fill="var(--fill-0, #87A9C4)" id="Vector_9" />
          <path d={svgPaths.pd416a80} fill="var(--fill-0, #87A9C4)" id="Vector_10" />
          <path d={svgPaths.p1e858700} fill="var(--fill-0, #87A9C4)" id="Vector_11" />
          <path d={svgPaths.p271fc300} fill="var(--fill-0, #87A9C4)" id="Vector_12" />
          <path d={svgPaths.p1b936b00} fill="var(--fill-0, #87A9C4)" id="Vector_13" />
          <path d={svgPaths.p664d40} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.p11e3c300} fill="var(--fill-0, #87A9C4)" id="Vector_15" />
          <path d={svgPaths.p10a54140} fill="var(--fill-0, #87A9C4)" id="Vector_16" />
          <path d={svgPaths.pa0a6680} fill="var(--fill-0, #87A9C4)" id="Vector_17" />
          <path d={svgPaths.p34960140} fill="var(--fill-0, white)" id="Vector_18" />
          <path d={svgPaths.p3d1d8800} fill="var(--fill-0, white)" id="Vector_19" />
          <path d={svgPaths.p168f1a80} fill="var(--fill-0, #87A9C4)" id="Vector_20" />
          <path d={svgPaths.p1c72c700} fill="var(--fill-0, white)" id="Vector_21" />
          <path d={svgPaths.p2aadca00} fill="var(--fill-0, #87A9C4)" id="Vector_22" />
          <path d={svgPaths.p7d3dfc0} fill="var(--fill-0, #87A9C4)" id="Vector_23" />
          <path d={svgPaths.pebee300} fill="var(--fill-0, white)" id="Vector_24" />
          <path d={svgPaths.p708ce80} fill="var(--fill-0, #87A9C4)" id="Vector_25" />
          <path d={svgPaths.pd45ea00} fill="var(--fill-0, white)" id="Vector_26" />
          <path d={svgPaths.p3ce16cf0} fill="var(--fill-0, #87A9C4)" id="Vector_27" />
          <path d={svgPaths.p13505900} fill="var(--fill-0, #87A9C4)" id="Vector_28" />
          <path d={svgPaths.p4ecb500} fill="var(--fill-0, white)" id="Vector_29" />
          <path d={svgPaths.p23a27000} fill="var(--fill-0, #87A9C4)" id="Vector_30" />
          <path d={svgPaths.p1701cf80} fill="var(--fill-0, #87A9C4)" id="Vector_31" />
          <path d={svgPaths.p2eb33100} fill="var(--fill-0, #87A9C4)" id="Vector_32" />
          <path d={svgPaths.p2269f480} fill="var(--fill-0, #87A9C4)" id="Vector_33" />
          <path d={svgPaths.p1cd0ba00} fill="var(--fill-0, white)" id="Vector_34" />
          <path d={svgPaths.p1b537200} fill="var(--fill-0, #87A9C4)" id="Vector_35" />
          <path d={svgPaths.p1340bb00} fill="var(--fill-0, #87A9C4)" id="Vector_36" />
          <path d={svgPaths.p26a55600} fill="var(--fill-0, #87A9C4)" id="Vector_37" />
          <path d={svgPaths.p3d35a00} fill="var(--fill-0, white)" id="Vector_38" />
          <path d={svgPaths.p3f777680} fill="var(--fill-0, #87A9C4)" id="Vector_39" />
          <path d={svgPaths.p1d844500} fill="var(--fill-0, #87A9C4)" id="Vector_40" />
          <path d={svgPaths.p3ec0b900} fill="var(--fill-0, #87A9C4)" id="Vector_41" />
          <path d={svgPaths.p2857ba00} fill="var(--fill-0, white)" id="Vector_42" />
          <path d={svgPaths.p1e3d4700} fill="var(--fill-0, #87A9C4)" id="Vector_43" />
          <path d={svgPaths.p2fd0b220} fill="var(--fill-0, #87A9C4)" id="Vector_44" />
          <path d={svgPaths.p10e79e00} fill="var(--fill-0, #87A9C4)" id="Vector_45" />
        </g>
        <defs>
          <clipPath id="clip0_1_7334">
            <rect fill="white" height="267" width="140" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function RectangleVectorized() {
  return (
    <div className="h-[313px] relative shrink-0 w-[204px]" data-name="Rectangle [Vectorized]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 204 313">
        <g clipPath="url(#clip0_1_3851)" id="Rectangle [Vectorized]">
          <path clipRule="evenodd" d={svgPaths.p14f17300} fill="var(--fill-0, #87A9C4)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p2635cdf0} fill="var(--fill-0, #FCFCFC)" id="Vector_2" />
          <path d={svgPaths.pf531c70} fill="var(--fill-0, #FCFCFC)" id="Vector_3" />
          <path d={svgPaths.p2ce69a00} fill="var(--fill-0, #FCFCFC)" id="Vector_4" />
          <path d={svgPaths.p36dd6280} fill="var(--fill-0, #FCFCFC)" id="Vector_5" />
          <path d={svgPaths.p1a127400} fill="var(--fill-0, #FCFCFC)" id="Vector_6" />
          <path d={svgPaths.p33eab500} fill="var(--fill-0, #FCFCFC)" id="Vector_7" />
          <path d={svgPaths.p3ebef680} fill="var(--fill-0, #FCFCFC)" id="Vector_8" />
          <path d={svgPaths.p1f49ea00} fill="var(--fill-0, #FCFCFC)" id="Vector_9" />
          <path d={svgPaths.p3448e00} fill="var(--fill-0, #FCFCFC)" id="Vector_10" />
          <path d={svgPaths.p1979f200} fill="var(--fill-0, #FCFCFC)" id="Vector_11" />
        </g>
        <defs>
          <clipPath id="clip0_1_3851">
            <rect fill="white" height="313" width="204" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component2nd4() {
  return (
    <div className="bg-[#5e4730] relative shrink-0 w-full" data-name="2nd">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center px-[16px] py-[54px] relative size-full">
          <p className="[word-break:break-word] font-['Le_Murmure:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[120px] text-center text-white uppercase w-[min-content]">Пожелания</p>
          <Arc202606150229002Vectorized />
          <p className="[word-break:break-word] font-['Craftwork_Sans',sans-serif] font-medium leading-[1.2] min-w-full relative shrink-0 text-[16px] text-center text-white uppercase w-[min-content]">Мы знаем, что на свадьбах принято дарить цветы, но, к сожалению, мы не успеем насладиться их красотой, ведь сразу после свадьбы мы улетаем на отдых.</p>
          <p className="[word-break:break-word] font-['Craftwork_Sans',sans-serif] font-medium leading-[1.2] min-w-full relative shrink-0 text-[16px] text-center text-white uppercase w-[min-content]">При желании подарить нам букет, лучше пополните наш мини-бар бутылкой хорошего алкоголя!</p>
          <RectangleVectorized />
          <p className="[word-break:break-word] font-['Craftwork_Sans',sans-serif] font-medium leading-[1.2] min-w-full relative shrink-0 text-[16px] text-center text-white uppercase w-[min-content]">Наш дом уже полон всего необходимого. Поэтому Если захотите поздравить нас особенно — конверт будет в самый раз. Но главное — просто приходите!</p>
        </div>
      </div>
    </div>
  );
}

function IconParkTelegram() {
  return (
    <div className="aspect-[24/24] w-full h-full overflow-clip relative shrink-0" data-name="icon-park:telegram">
      <div className="absolute inset-[13.12%_6.25%_13.96%_6.25%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.375 21.1458">
          <path d={svgPaths.p7f61300} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <motion.a href="https://t.me/+vkoFyE3ftuAxODdi" target="_blank" rel="noopener noreferrer" className="content-stretch flex gap-[12px] items-center justify-center pb-[22px] pt-[20px] relative rounded-[1000px] shrink-0 w-full cursor-pointer" whileTap={{ scale: 0.97 }} transition={{ type: "spring", duration: 0.2, bounce: 0 }}>
      <div aria-hidden className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[1000px]" />
      <div className="flex items-center justify-center shrink-0 w-6 h-6">
        <IconParkTelegram />
      </div>
      <p className="[word-break:break-word] font-['Craftwork_Sans',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[24px] text-center text-white whitespace-nowrap">Перейти в чат</p>
    </motion.a>
  );
}

function Spacer() {
  return <div className="h-[8px] relative shrink-0 w-full" data-name="spacer" />;
}

function Component2nd5() {
  return (
    <div className="bg-[#333b60] content-stretch flex flex-col gap-[24px] h-[759px] items-center px-[16px] py-[54px] relative shrink-0 w-full" data-name="2nd">
      <div className="-translate-x-1/2 absolute bottom-0 h-[383px] left-[calc(50%-10px)] mix-blend-hard-light w-[346px]" data-name="unsplash:2D0OOuQKuvw">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={image_lilies__2_} />
      </div>
      <div className="[word-break:break-word] font-['Craftwork_Sans',sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[16px] text-center text-white uppercase w-[min-content]">
        <p className="leading-[1.2]">В{'\u00A0'}телеграм чате будет вся{'\u00A0'}дополнительная информация,а{'\u00A0'}также все{'\u00A0'}фотографии, сделанные гостями во{'\u00A0'}время праздника, будут присылаться туда!</p>
      </div>
      <Frame5 />
      <Spacer />
      <p className="[word-break:break-word] font-['Le_Murmure:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[54px] text-center text-white uppercase w-[min-content]">Спасибо и до встречи! Ждём вас!</p>
    </div>
  );
}

export default function Var() {
  return (
    <div className="bg-[#333b60] content-stretch flex flex-col items-start relative size-full" data-name="Var 10">
      <Hero />
      <FadeInView className="w-full"><Component2nd /></FadeInView>
      <FadeInView className="w-full" delay={0.05}><Component2nd1 /></FadeInView>
      <FadeInView className="w-full" delay={0.05}><Component2nd2 /></FadeInView>
      <FadeInView className="w-full" delay={0.05}><Component2nd3 /></FadeInView>
      <FadeInView className="w-full" delay={0.05}><Component2nd4 /></FadeInView>
      <FadeInView className="w-full" delay={0.05}><Component2nd5 /></FadeInView>
    </div>
  );
}