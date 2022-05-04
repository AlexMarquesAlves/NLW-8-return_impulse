import { ChatTeardropDots } from "phosphor-react";
import { useState } from "react";

export function Widget() {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  return (
    <div className="absolute bottom-5 right-5">
      <p>Hello World!</p>

      <button className="flex items-center h-12 px-3 text-white rounded-full bg-brand-500 group ">
        <ChatTeardropDots className="w-6 h-6" />
      </button>

      <span className="overflow-hidden transition-all duration-500 ease-linear max-w-0 group-hover:max-w-xs">
        <span className="pl-2"></span>
        Feedback
      </span>
    </div>
  );
}
