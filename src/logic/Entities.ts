export interface IWindowOption {
  id: string;
  price: number,
  meta: Record<string, string|number>
}

export interface IFilterProduct {
  id: string
  name: string;
  description: string;
  price: number;
}