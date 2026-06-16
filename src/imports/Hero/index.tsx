import imgFrame401 from "./4509bdb3c9e081fcd7c4f17bea271ae06bfcd9c8.png";

function Frame() {
  return (
    <div className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col font-['Craftwork_Sans:Medium',sans-serif] font-medium items-start leading-[1.2] left-1/2 text-[#333b60] text-[20px] top-[291px] uppercase w-[358px]">
      <p className="relative shrink-0 w-full">в этот день мы скажем</p>
      <p className="relative shrink-0 text-right w-full">друг другу «да»</p>
      <p className="relative shrink-0 w-full">и очень хотим,</p>
      <p className="relative shrink-0 text-right w-full">чтобы вы были рядом</p>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="bg-[#bbb2aa] relative size-full" data-name="Hero">
      <div
        className="-translate-x-1/2 absolute bottom-0 h-[435px] left-1/2 w-[390px]"
        data-name="Frame 40 1"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgFrame401}
        />
      </div>
      <p className="[word-break:break-word] absolute font-['Le_Murmure:Regular',sans-serif] leading-[120px] left-[calc(50%-138px)] not-italic text-[110px] text-white top-[734px] uppercase whitespace-nowrap">
        8 августа
      </p>
      <Frame />
      <p
        className="[word-break:break-word] absolute font-['Le_Murmure:Regular',sans-serif] leading-none left-[calc(50%-179px)] not-italic text-[#333b60] text-[120px] top-[48px] uppercase whitespace-nowrap"
        style={{ fontFeatureSettings: '"dlig"' }}
      >
        Артём
      </p>
      <p className="[word-break:break-word] absolute font-['Le_Murmure:Regular',sans-serif] leading-none left-[calc(50%+58px)] not-italic text-[#333b60] text-[64px] top-[67px] whitespace-nowrap">{`&`}</p>
      <p className="[word-break:break-word] absolute font-['Le_Murmure:Regular',sans-serif] leading-none left-[calc(50%-37px)] not-italic text-[#333b60] text-[120px] top-[160px] uppercase whitespace-nowrap">
        Кcюша
      </p>
    </div>
  );
}
