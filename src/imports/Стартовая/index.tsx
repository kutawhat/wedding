import imgUp from "./534ac4501d80e943d46fe2d9e194be9001c4ef0a.png";
import imgDown from "./c9f93ac668db0585d33eea47faf742dbb32b816f.png";

function Down() {
  return (
    <div className="h-[509px] relative shrink-0 w-[390px] z-[1]" data-name="Down">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDown} />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Le_Murmure:Regular',sans-serif] leading-[1.2] left-1/2 mix-blend-plus-lighter not-italic text-[#e8e5e3] text-[57px] text-center top-[calc(50%-31.5px)] w-[228px]">Нажмите, чтобы открыть приглашение</p>
    </div>
  );
}

export default function Component() {
  return (
    <div className="content-stretch flex flex-col isolate items-center justify-center relative size-full" data-name="Стартовая">
      <div className="h-[530px] mb-[-195px] relative shrink-0 w-[390px] z-[2]" data-name="Up">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUp} />
      </div>
      <Down />
    </div>
  );
}