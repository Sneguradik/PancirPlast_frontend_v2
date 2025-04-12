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

export interface IFilterProps extends HTMLProps<HTMLDivElement> {
  Icon: JSX.Element,
  name: string,
  description: string,
  onFilterChange?: (value: IWindowOption) => void,
}


export default function Filter({Icon, name, description, className, onFilterChange}: IFilterProps) {
  const [selectedProduct, setSelectedProduct] = useState<IFilterProduct|null>(null);
  const [products, setProducts] = useState<IFilterProduct[]>([
    {
      id: "ef46f087-9670-4d53-acd8-e07481e01f7b",
      name: "Rehau profile",
      price: 23394,
      description: "Современный оконный профиль из высококачественного ПВХ обеспечивает отличную тепло- и шумоизоляцию. Прочная конструкция с многокамерной системой и герметичными уплотнителями гарантирует долговечность и комфорт в любое время года."
    },
    {
      id: "feefee8e-0148-4f5d-bc3b-9f918458a3c8",
      name: "Other profile",
      price: 14553,
      description: "Инновационный оконный профиль с усиленной конструкцией и повышенной энергоэффективностью для идеального микроклимата в помещении. Устойчив к деформациям, обладает высокой звукоизоляцией и стильным дизайном, подходящим для любых интерьеров."
    },
    {
      id: "e9e4d607-df45-43d3-b642-ca7ca15814ad",
      name: "STC profile",
      price: 26204,
      description: "Элегантный и надежный оконный профиль с превосходной теплоизоляцией и защитой от шума. Усиленная конструкция и герметичность обеспечивают долговечность, а современный дизайн гармонично вписывается в любое окно."
    },
  ])

  useEffect(() => {
    if (onFilterChange && selectedProduct) onFilterChange({
      id: selectedProduct.id,
      price: selectedProduct.price,
    });
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
          <Button>Select</Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl max-h-120 flex gap-8 flex-col">
          <DialogHeader>
            <DialogTitle>Выберете {name}</DialogTitle>
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
            <hr/>
          </div>

        </DialogContent>
      </Dialog>
    </div>
  )
}
