import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

describe("Submit feedback", () => {
  it("Should be able to submit a feedback", async () => {
    const submitFeedback = new SubmitFeedbackUseCase(
      { create: async () => {} },
      { sendMail: async () => {} }
    );

    await expect(
      submitFeedback.execute({
        type: `Bug`,
        comment: `comment example`,
        screenshot: `data:image/png;base64,12431j414l1h4`,
      })
    ).resolves.not.toThrow();
  });
});
