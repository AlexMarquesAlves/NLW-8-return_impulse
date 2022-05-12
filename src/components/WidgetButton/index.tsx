import { Popover } from "@headlessui/react";
import { ChatTeardropDots } from "phosphor-react";
import { WidgetForm } from "..";

export function WidgetButton() {
  return (
    <div className="w-screen h-screen flex  justify-center bg-gradient-to-r from-brand-500 to-fuchsia-500 bg-[url('/nlw.png')] bg-no-repeat bg-cover bg-center">
      <Popover className="absolute flex flex-col items-end bottom-4 right-4 md:bottom-8 md:right-8 ">
        <Popover.Panel className="text-white">
          <WidgetForm />
        </Popover.Panel>
        <Popover.Button
          className="flex items-center h-12 px-3 text-white rounded-full bg-brand-500 group "
          // onClick={() => setIsWidgetOpen(!isWidgetOpen)}
        >
          <ChatTeardropDots className="w-6 h-6" />
          <span className="overflow-hidden transition-all duration-500 ease-linear max-w-0 group-hover:max-w-xs">
            Feedback
          </span>
        </Popover.Button>
      </Popover>
    </div>
  );
}
