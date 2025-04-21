"use client"
import styles from "./Filter.module.scss";
import {HTMLProps, JSX, useEffect, useState} from "react";
import {cn} from "@/lib/utils";
import {Button} from "@components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@components/ui/dialog";
import {PiCurrencyRubBold} from "react-icons/pi";
import {IFilterProduct, IWindowOption} from "@/logic/Entities";
import {RxCross1} from "react-icons/rx";

export interface IFilterProps extends HTMLProps<HTMLDivElement> {
  Icon: JSX.Element,
  name: string,
  description: string,
  onFilterChange?: (value: IWindowOption|null) => void,
  nullable?: boolean,
  products: IFilterProduct[],
}


export default function Filter({Icon, name, description, className, onFilterChange, nullable, products}: IFilterProps) {
  const [selectedProduct, setSelectedProduct] = useState<IFilterProduct|null>(null);


  useEffect(() => {
    if (onFilterChange) {
      onFilterChange(selectedProduct == null ? null : {
        id: selectedProduct.id,
        price: selectedProduct.price
      });
    }
  },[selectedProduct]);
  
  return (
    <div className={cn(styles.container, className)} >
      <h1>{Icon}{name}</h1>
      <p>{description}</p>
      {selectedProduct != null ?
      <div className={"flex items-center justify-between"}>
        <h4 className={"font-semibold"}>{selectedProduct.name}</h4>
        <small className={"flex items-center gap-1 text-muted-foreground"}><PiCurrencyRubBold/>{selectedProduct.price}</small>
      </div> : null}
      <Dialog>
        <DialogTrigger asChild>
          <Button>Выбрать</Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl max-h-120 flex gap-8 flex-col">
          <DialogHeader>
            <DialogTitle>{name}</DialogTitle>
          </DialogHeader>
          <div className="flex gap-2 flex-col overflow-y-auto">
            {products.map((product) =>
              <div key={product.id} className={cn(styles.option, selectedProduct?.id == product.id?styles.selected:"")} onClick={() => setSelectedProduct(product)}>
                <div className={"flex items-center justify-between"}>
                  <h4 className={"font-semibold"}>{product.name}</h4>
                  <small className={"flex items-center gap-1 text-muted-foreground"}><PiCurrencyRubBold/>{product.price}</small>
                </div>
                <p className={"small"}>{product.description}</p>
              </div>
            )}
            {nullable === true?
              <div
                className={cn(styles.option, selectedProduct == null?styles.selected:"")}
                onClick={() => setSelectedProduct(null)}>
                <div className={"flex items-center gap-4"}>
                  <RxCross1 />
                  <h4>Не устанавливать</h4>
                </div>
              </div>:
              null
            }
            <hr/>
          </div>

        </DialogContent>
      </Dialog>
    </div>
  )
}
