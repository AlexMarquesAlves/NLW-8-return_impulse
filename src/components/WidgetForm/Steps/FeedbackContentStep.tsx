import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackTypesProps } from "..";
import { CloseButton } from "../../CloseButton";
import { feedbackTypes } from "../feedbackTypes";
import { ScreenshotButton } from "../ScreenShotButton";

interface FeedbackContentProps {
  feedbackType: FeedbackTypesProps;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSent,
}: FeedbackContentProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState("");

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();
    onFeedbackSent();
  }

  return (
    <>
      <header>
        <button
          type="button"
          className="absolute border-transparent rounded-md top-5 left-5 text-zinc-400 hover:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight="bold" className="w-4 h4" />
        </button>
        <span className="flex items-center gap-2 text-xl leading-6">
          <img
            src={feedbackTypeInfo?.image?.source}
            alt={feedbackTypeInfo?.image?.alt}
            className="w=6 h-6"
          />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>

      <form onSubmit={handleSubmitFeedback} className="w-full my-4">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-100 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none  scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin "
          placeholder="Conte-nos com detalhes o que está acontecendo..."
          onChange={(event) => setComment(event.target.value)}
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />

          <button
            type="submit"
            disabled={!comment.length}
            className="flex items-center justify-center flex-1 p-2 text-sm transition border-transparent rounded-md bg-brand-500 hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  );
}
