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
import SizeWindowFilter from "@components/constructor/SizeWindowFilter";
import { RiCustomSize } from "react-icons/ri";
import {TbSquares} from "react-icons/tb";
import {GiDoorHandle} from "react-icons/gi";
import {FaGears} from "react-icons/fa6";
import {filters} from "@/logic/Filters";
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
          <SizeWindowFilter
            Icon={<RiCustomSize />}
            name={"Размер окна"}
            description={"Выберите оптимальный размер окна, который идеально впишется в ваше пространство. У нас представлены окна различных стандартных и нестандартных размеров, чтобы удовлетворить любые потребности. Просто укажите нужные параметры — высоту и ширину. Если вам нужно индивидуальное решение, мы также можем изготовить окна по вашему размеру."} />
            <Filter
            Icon={<LuFrame/>}
            name={"Профиль"}
            products={filters["Профиль"]}
            onFilterChange={val =>
              setWindow(prevState =>
              {return {...prevState, frame: val??null}})}
            description={"Выберите профиль, который соответствует вашим требованиям по теплоизоляции, звукоизоляции и долговечности. Мы предлагаем широкий ассортимент пластиковых, алюминиевых и деревянных профилей, каждый из которых имеет свои преимущества. Укажите желаемый тип профиля, и наш фильтр подберет окна, которые идеально сочетаются с вашими потребностями и стилем интерьера."}/>
          <Filter
            Icon={<TbSquares />}
            name={"Стеклопакет"}
            products={filters["Стеклопакет"]}
            onFilterChange={val =>
              setWindow(prevState =>
              {return {...prevState, glass: val??null}})}
            description={"Выберите идеальный стеклопакет для вашего окна, который обеспечит отличную тепло- и звукоизоляцию. В нашем ассортименте — однокамерные, двухкамерные и многокамерные стеклопакеты, а также варианты с энергоэффективным покрытием и защитой от солнца. Укажите нужные характеристики, и наш фильтр подберет оптимальный вариант для вашего дома или офиса. Мы предлагаем только высококачественные стеклопакеты, которые обеспечат комфорт и энергоэффективность на долгие годы."}/>
          <Filter
            Icon={<GiDoorHandle />}
            nullable={true}
            name={"Ручка"}
            products={filters["Ручка"]}
            onFilterChange={val =>
              setWindow(prevState =>
              {return {...prevState, handle: val??null}})}
            description={"Этот фильтр-ручка для окон — это удобное и современное решение для вашего дома. Она идеально сочетает стильный дизайн и высокую функциональность, обеспечивая легкость в эксплуатации. Простой механизм позволяет быстро открывать и закрывать окно, при этом гарантируя надежную защиту от случайных открытий. Изготовлена из прочных материалов, что обеспечивает долгий срок службы и устойчивость к внешним воздействиям. Подходит для большинства стандартных окон, легко устанавливается и становится надежным дополнением вашего интерьера."}/>
          <Filter
            Icon={<FaGears />}
            name={"Фурнитурa"}
            products={filters["Фурнитура"]}
            onFilterChange={val =>
              setWindow(prevState =>
              {return {...prevState, furniture: val??null}})}
            description={"Фурнитура для окон — это ключ к долговечности и надежности ваших конструкций. Высококачественные механизмы обеспечивают плавную работу и максимальную безопасность, предотвращая случайные повреждения. Каждое изделие тщательно проверено на прочность и устойчивость к нагрузкам, что гарантирует долгий срок службы. Современный и стильный дизайн фурнитуры легко впишется в любой интерьер, добавляя вашему окну завершенный и аккуратный вид."}/>

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