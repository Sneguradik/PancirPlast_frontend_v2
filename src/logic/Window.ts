import {IWindowOption} from "@/logic/Entities";

export interface IWindow {
  size: IWindowOption | null
  frame: IWindowOption | null
  furniture: IWindowOption | null
  handle: IWindowOption | null
  glass: IWindowOption | null
  motor: IWindowOption | null
}


export interface IWindow extends IWindowOption {
  width: number
  height: number
}

export function calculateWindowPrice(window:IWindow): number {
  let price = 0
  let key: keyof IWindow
  for (key in window) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    price += window[key]!=null ? window[key].price : 0
  }
  return price;
}