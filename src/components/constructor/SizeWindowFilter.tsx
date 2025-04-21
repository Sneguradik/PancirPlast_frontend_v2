import styles from "./Filter.module.scss";
import {ChangeEvent, HTMLProps, JSX, useEffect, useState} from "react";
import {cn} from "@/lib/utils";
import {Button} from "@components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@components/ui/dialog";

import {Input} from "@components/ui/input";

export interface IFilterProps extends HTMLProps<HTMLDivElement> {
  Icon: JSX.Element,
  name: string,
  description: string,
  onFilterChange?: (value: {width: number, height: number}) => void,
}

export default function SizeWindowFilter({Icon, name, description, className, onFilterChange}: IFilterProps) {
  const [selectedSize, setSelectedSize] = useState<{width: number, height: number}>({width: 0, height: 0});

  const handleSizeChange = (event: ChangeEvent<HTMLInputElement>, side: "width" | "height") => {

    let num = parseFloat(event.target.value??"0");
    if (isNaN(num)) num = 0;

    if (num< 0) num = 0;

    if(num>3000) num = 3000;

    switch (side) {
      case "width":
        setSelectedSize(prev => {return {...prev, width: num }});
        break;
      case "height":
        setSelectedSize(prev => {return {...prev, height: num }});
        break;
      default:
        return;
    }
  }

  useEffect(()=>{
    if(onFilterChange) onFilterChange(selectedSize);
  },[selectedSize]);


  return(
    <div className={cn(styles.container, className)} >
      <h1>{Icon}{name}</h1>
      <p>{description}</p>
      {checkWindowSize(selectedSize) ?
        <div className={"flex items-center justify-between"}>
          <div className={styles.size_item}>
            <small>Width</small>
            <h4>{selectedSize.width}</h4>
            <span className={"very-small"}>mm</span>
          </div>
          <h2>X</h2>
          <div className={styles.size_item}>
            <small>Height</small>
            <h4>{selectedSize.height}</h4>
            <span className={"very-small"}>mm</span>
          </div>
        </div> : null}
      <Dialog>
        <DialogTrigger asChild>
          <Button>Выбрать</Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl max-h-120 flex gap-8 flex-col">
          <DialogHeader>
            <DialogTitle>{name}</DialogTitle>
          </DialogHeader>
          <div className="flex gap-2 flex-col">
            <h6 className={"font-bold"}>Ширина</h6>
            <small className={"font-light text-secondary-foreground"}>Высота указывается в миллиметрах. Максимальная высота 3000mm</small>
            <Input type={"number"} value={selectedSize.width>0?selectedSize.width:""} onChange={event => handleSizeChange(event, "width")}/>
            <hr/>
            <h6 className={"font-bold"}>Высота</h6>
            <small className={"font-light text-secondary-foreground"}>Ширина указывается в миллиметрах. Максимальная ширина 3000mm</small>
            <Input type={"number"} value={selectedSize.height>0?selectedSize.height:""} onChange={event => handleSizeChange(event, "height")}/>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

function checkWindowSize(val: {width: number, height: number}):boolean {
  return val.width > 0 && val.height > 0 ;
}