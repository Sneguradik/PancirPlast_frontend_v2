export interface IWindowOption {
  id: string;
  price: number,
}

export interface IFilterProduct extends IWindowOption {
  name: string;
  description: string;
}

export interface IContactForm {
  name: string
  surname: string
  email: string
  telegram: string
  phone: string
  content: string
  preferredContact: ContactFormType
}

export enum ContactFormType {
  Email,
  Telegram,
  Phone,
}