import { ChatTeardropDots } from "phosphor-react";

export function Widget() {
  return (
    <div className="absolute bottom-5 right-5">
      <button className="h-12 px-3 text-white rounded-full bg-brand-500">
        <ChatTeardropDots className="w-6 h-6" />
      </button>
    </div>
  );
}
