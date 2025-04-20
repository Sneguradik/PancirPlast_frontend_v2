export interface IWindowOption {
  id: string;
  price: number,
}

export interface IFilterProduct extends IWindowOption {
  name: string;
  description: string;
}