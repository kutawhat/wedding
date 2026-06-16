import Var from "../imports/Var10";
import { EnvelopeIntro } from "./components/envelope-intro";

// Изображения первых двух экранов сайта (Hero + блок «2nd»),
// которые прелоадер дожидается перед тем, как показать конверт.
import imgHero from "@/imports/Frame_40.png";
import imgSecondVector from "@/imports/Var10/a86875c5eee6cad9b8281bffc9210829adae4244.png";
import imgSecondLove from "@/imports/love.png";

const firstScreensImages = [imgHero, imgSecondVector, imgSecondLove];

export default function App() {
  return (
    <div className="min-h-screen w-full flex justify-center bg-[#333b60] overflow-x-hidden">
      <div className="w-full max-w-[440px] overflow-x-hidden">
        <Var />
      </div>
      <EnvelopeIntro siteImages={firstScreensImages} />
    </div>
  );
}
