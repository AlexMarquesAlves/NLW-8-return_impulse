import {
  default as bugImageUrl,
  default as ideaImageUrl,
} from "../../assets/bug.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { CloseButton } from "../CloseButton";

const feedbackTypes = {
  BUG: {
    title: `Problema`,
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: `Ideia`,
    image: {
      source: ideaImageUrl,
      alt: "Imagem de uma lampada",
    },
  },
  OTHER: {
    title: `Outro`,
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de uma nuvem",
    },
  },
};

export function WidgetForm() {
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      <div className={"flex py-8 gap-2 w-full"}></div>

      <footer className="text-xs text-neutral-400">
        Feito com 💜 por
        <a href="#" className="underline underline-offset-2">
          Alex Marquês Alves
        </a>
      </footer>
    </div>
  );
}
