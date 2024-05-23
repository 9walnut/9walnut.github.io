declare module "emailjs-com" {
  type EmailJSResponseStatus = {
    status: number;
    text: string;
  };

  function sendForm(
    serviceID: string,
    templateID: string,
    form: HTMLFormElement | string,
    userID?: string
  ): Promise<EmailJSResponseStatus>;

  function init(userID: string): void;

  export { sendForm, init, EmailJSResponseStatus };
}
