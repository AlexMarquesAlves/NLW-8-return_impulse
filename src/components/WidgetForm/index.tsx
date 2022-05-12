import { useState } from "react";
import { feedbackTypes } from "./feedbackTypes";
import {
  FeedbackContentStep,
  FeedbackSuccessStep,
  FeedbackTypeStep,
} from "./Steps";

export type FeedbackTypesProps = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackTypesProps | null>(
    null
  );
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div
      className="bg-zinc-900 p-4
    relative rounded-2xl mb-4 flex flex-col justify-between
    items-center shadow-lg w-[calc(100vw-2rem)] h-[280px] md:w-auto"
    >
      {feedbackSent ? (
        <FeedbackSuccessStep
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              onFeedbackRestartRequested={handleRestartFeedback}
              feedbackType={feedbackType}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com 💜 por {""}
        <a
          className="underline transition underline-offset-2 hover:text-purple-500"
          href="https://github.com/AlexMarquesAlves"
        >
          Alex Marquês Alves
        </a>
      </footer>
    </div>
  );
}
