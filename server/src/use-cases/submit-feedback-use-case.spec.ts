import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: async () => {} },
  { sendMail: async () => {} }
);

describe("Submit feedback", () => {
  // submit a feedback it's working well
  it("Should be able to submit a feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: `Bug`,
        comment: `comment example`,
        screenshot: `data:image/png;base64,12431j414l1h4`,
      })
    ).resolves.not.toThrow();
  });

  // without type
  it("Should not be able to submit a feedback without type", async () => {
    await expect(
      submitFeedback.execute({
        type: ``,
        comment: `comment example`,
        screenshot: `data:image/png;base64,12431j414l1h4`,
      })
    ).rejects.toThrow();
  });
  // without comment
  it("Should not be able to submit a feedback without comment", async () => {
    await expect(
      submitFeedback.execute({
        type: `BUG`,
        comment: ``,
        screenshot: `data:image/png;base64,12431j414l1h4`,
      })
    ).rejects.toThrow();
  });
  // invalid screenshot
  it("Should not be able to submit a feedback with invalid screenshot format", async () => {
    await expect(
      submitFeedback.execute({
        type: `BUG`,
        comment: ``,
        screenshot: `invalidFormat.jpg`,
      })
    ).rejects.toThrow();
  });
  //
});
