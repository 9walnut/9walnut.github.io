declare module "emailjs-com" {
  export interface EmailJSResponseStatus {
    status: number;
    text: string;
  }
  export function sendForm(
    serviceID: string,
    templateID: string,
    form: string | HTMLFormElement,
    userID?: string
  ): Promise<{ status: number; text: string }>;

  export function init(userID: string): void;
}
