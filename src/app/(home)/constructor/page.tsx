"use client"
import styles from "./Constructor.module.scss";
import localFont from "next/font/local";
import {cn} from "@/lib/utils";

import {LuFrame} from "react-icons/lu";

import Filter from "@components/constructor/Filter";
import {Button} from "@components/ui/button";
import {PiCurrencyRubBold} from "react-icons/pi";
import {useState} from "react";
import {calculateWindowPrice, IWindow} from "@/logic/Window";
const oceanWideFont = localFont({
  src : [{
    path : "../../../font/Oceanwide-Semibold.otf"
  }]
});

export default function Constructor() {

  const [window, setWindow] = useState<IWindow>({
    size: null,
    furniture: null,
    handle: null,
    glass : null,
    motor: null,
    frame: null,
  })

  return(
    <main className={"max-w-custom gap-16 flex-col flex"}>
      <div className={"flex flex-col gap-2"}>
        <h1 className={cn(oceanWideFont.className, styles.title)}>Constructor</h1>
        <p className={"text-muted-foreground ml-2"}>Соберите окно вашей мечты</p>
      </div>
      <div className={styles.constructor_wrapper}>
        <div>

        </div>
        <div className={styles.filter_block}>
          <Filter
            Icon={<LuFrame/>}
            name={"Размер окна"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} />
          <Filter
            Icon={<LuFrame/>}
            name={"Профиль"}
            onFilterChange={val =>
              setWindow(prevState =>
              {return {...prevState, frame: {id:val.id, price:val.price}}})}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
          <Filter
            Icon={<LuFrame/>}
            name={"Стеклопакет"}
            onFilterChange={val =>
              setWindow(prevState =>
              {return {...prevState, glass: {id:val.id, price:val.price}}})}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
          <Filter
            Icon={<LuFrame/>}
            name={"Ручка"}
            onFilterChange={val =>
              setWindow(prevState =>
              {return {...prevState, handle: {id:val.id, price:val.price}}})}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
          <Filter
            Icon={<LuFrame/>}
            name={"Фурнитуры"}
            onFilterChange={val =>
              setWindow(prevState =>
              {return {...prevState, furniture: {value:val.id, price:val.price}}})}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>

        </div>
      </div>

      <div className={"flex flex-col gap-4 w-full"}>
        <hr/>
        <div className={"flex items-center justify-between"}>
          <h2 className={cn(oceanWideFont.className,"flex items-baseline gap-4")}>
            <PiCurrencyRubBold/>{calculateWindowPrice(window)}
          </h2>
          <Button>Купить</Button>
        </div>

      </div>
    </main>
  )
}