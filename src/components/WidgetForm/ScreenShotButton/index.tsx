import html2canvas from "html2canvas";
import { Camera, Eye, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../../";

interface ScreenshotButtonProps {
  screenshot: string | null;
  onScreenshotTook: (screenshot: string | null) => void;
}

export function ScreenshotButton({
  screenshot,
  onScreenshotTook,
}: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);

    const canvas = await html2canvas(document.querySelector("html")!);
    const base64image = canvas.toDataURL("image/png");

    onScreenshotTook(base64image);

    setIsTakingScreenshot(false);
  }

  if (screenshot) {
    return (
      <div
        className="flex items-end justify-between w-10 h-10 overflow-hidden transition bg-blue-400 border-transparent rounded-md text-zinc-400 hover:text-zinc-100"
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: "center",
          // backgroundSize: 180,
          backgroundClip: "content-box",
        }}
      >
        <button
          type="button"
          className="transition hover:text-red-400"
          onClick={() => onScreenshotTook(null)}
        >
          <Trash weight="fill" />
        </button>

        <button
          type="button"
          className="transition hover:text-blue-300"
          // onClick={() => onScreenshotTook('')}
        >
          <Eye weight="fill" />
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      className="p-2 transition border-transparent rounded-md bg-zinc-800 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
      onClick={handleTakeScreenshot}
    >
      {isTakingScreenshot ? (
        <Loading />
      ) : (
        <Camera className="w-6 h-6 text-zinc-100" />
      )}
    </button>
  );
}
