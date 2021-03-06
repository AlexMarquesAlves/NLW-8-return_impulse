import { FeedbackTypesProps } from "..";
import { CloseButton } from "../../CloseButton";
import { feedbackTypes } from "../feedbackTypes";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackTypesProps) => void;
}

export function FeedbackTypeStep({
  onFeedbackTypeChanged,
}: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>
      <div className="flex w-full gap-2 py-8">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              type="button"
              className="flex flex-col items-center flex-1 w-24 gap-2 py-5 border-2 border-transparent rounded-lg outline-none bg-zinc-800 hover:border-brand-500 focus:border-brand-500"
              onClick={() => onFeedbackTypeChanged(key as FeedbackTypesProps)}
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
