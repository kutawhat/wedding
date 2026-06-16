import svgPaths from "./svg-d0c5i6nbts";
import imgUnsplash2D0OOuQKuvw from "./18255e0b9aaaddcef9c6e3049053ac06b34647b0.png";

function IconParkTelegram() {
  return (
    <div className="aspect-[24/24] h-full overflow-clip relative shrink-0" data-name="icon-park:telegram">
      <div className="absolute inset-[13.12%_6.25%_13.96%_6.25%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.375 21.1458">
          <path d={svgPaths.p7f61300} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center pb-[22px] pt-[20px] relative rounded-[1000px] shrink-0 w-full">
      <div aria-hidden className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[1000px]" />
      <div className="flex flex-row items-center self-stretch">
        <IconParkTelegram />
      </div>
      <p className="[word-break:break-word] font-['Craftwork_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[24px] text-center text-white whitespace-nowrap">Перейти в чат</p>
    </div>
  );
}

function Spacer() {
  return <div className="h-[8px] relative shrink-0 w-full" data-name="spacer" />;
}

export default function Component2nd() {
  return (
    <div className="bg-[#333b60] content-stretch flex flex-col gap-[24px] items-center px-[16px] py-[54px] relative size-full" data-name="2nd">
      <div className="-translate-x-1/2 absolute bottom-0 h-[383px] left-[calc(50%-10px)] mix-blend-hard-light w-[346px]" data-name="unsplash:2D0OOuQKuvw">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUnsplash2D0OOuQKuvw} />
      </div>
      <p className="[word-break:break-word] font-['Craftwork_Sans:Medium',sans-serif] font-medium leading-[1.2] min-w-full relative shrink-0 text-[16px] text-center text-white uppercase w-[min-content]">В телеграм чате будет вся дополнительная информация, а также все фотографии, сделанные гостями во время праздника, будут присылаться туда!</p>
      <Frame />
      <Spacer />
      <p className="[word-break:break-word] font-['Le_Murmure:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[54px] text-center text-white uppercase w-[min-content]">Спасибо и до встречи! Ждём вас!</p>
    </div>
  );
}