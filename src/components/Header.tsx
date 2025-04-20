"use client"
import Link from "next/link";
import styles from "./Header.module.scss";
import Image from "next/image";
import {RiHome2Line} from "react-icons/ri";
import {FaQuestion} from "react-icons/fa6";
import {GrCatalog} from "react-icons/gr";
import {IoHammer} from "react-icons/io5";
import {Button} from "@components/ui/button";
import {Popover, PopoverContent, PopoverTrigger} from "@components/ui/popover";
import {LuLanguages, LuMenu} from "react-icons/lu";
import {Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@components/ui/sheet";
import {cn} from "@/lib/utils";

export default function Header() {
  const isAuth = false;
  return(
    <header className={styles.header}>
      <div className={"relative aspect-square w-10"}>
        <Image src={"/Logo_x128.png"} alt={"Logo"} fill/>
      </div>

      <nav className={cn(styles.full_nav, styles.desktop_nav)}>
        <Link className={styles.nav_item} href="/"><RiHome2Line /><h6>Главная</h6></Link>
        <Popover>
          <PopoverTrigger asChild>
            <h6 className={styles.nav_item} ><GrCatalog />Каталог</h6>
          </PopoverTrigger>
          <PopoverContent className={"flex flex-col gap-2"}>
            <Link href="/" className={styles.catalog_product}>Все товары</Link>
            <hr/>
            <Link href={"/"} className={styles.catalog_product}><span>Окна</span></Link>
            <Link href={"/"} className={styles.catalog_product}><span>Двери</span></Link>
            <Link href={"/"} className={styles.catalog_product}><span>Балконы</span></Link>
            <Link href={"/"} className={styles.catalog_product}><span>Сетки плиссе</span></Link>
            <Link href={"/"} className={styles.catalog_product}><span>Перегородки</span></Link>
            <Link href={"/"} className={styles.catalog_product}><span>Входная группа</span></Link>
            <Link href={"/"} className={styles.catalog_product}><span>Фасады</span></Link>
            <Link href={"/"} className={styles.catalog_product}><span>Порталы</span></Link>
            <Link href={"/"} className={styles.catalog_product}><span>Беседки</span></Link>
          </PopoverContent>
        </Popover>
        <Link className={styles.nav_item} href="/constructor"><IoHammer /><h6>Конструктор</h6></Link>
        <Link className={styles.nav_item} href="/about"><FaQuestion /><h6>О нас</h6></Link>
      </nav>
      <div className={cn("flex gap-4 w-full justify-end items-center", styles.desktop_nav)}>
        <Popover>
          <PopoverTrigger asChild>
            <h6 ><LuLanguages /></h6>
          </PopoverTrigger>
          <PopoverContent className={"flex flex-col gap-2"}>
            <div className={styles.lang_item}><span>English</span><small>en</small></div>
            <div className={styles.lang_item}><span>Русский</span><small>ru</small></div>
            <div className={styles.lang_item}><span>Deutsch</span><small>de</small></div>

          </PopoverContent>
        </Popover>
        {isAuth ?
          <>
            <div>

            </div>
          </>:
          <>
            <Button variant={"secondary"}>Log in</Button>
            <Button>Sign up</Button>
          </>
        }
      </div>
      <div className={styles.short_nav}>
        <Sheet>
          <SheetTrigger asChild >
            <div className={"w-full flex justify-end"}>
              <LuMenu />
            </div>

          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Меню</SheetTitle>
            </SheetHeader>
            <div className={"flex flex-col gap-6 pl-4 pr-4"}>
              <Popover >
                <PopoverTrigger >
                  <h6 className={"flex gap-4 items-center"}><LuLanguages /> Язык</h6>
                </PopoverTrigger>
                <PopoverContent className={"flex flex-col gap-2"}>
                  <div className={styles.lang_item}><span>English</span><small>en</small></div>
                  <div className={styles.lang_item}><span>Русский</span><small>ru</small></div>
                  <div className={styles.lang_item}><span>Deutsch</span><small>de</small></div>
                </PopoverContent>
              </Popover>
              <nav className={cn(styles.full_nav)}>
                <Link className={styles.nav_item} href="/"><RiHome2Line /><h6>Главная</h6></Link>
                <Popover>
                  <PopoverTrigger asChild>
                    <h6 className={styles.nav_item} ><GrCatalog />Каталог</h6>
                  </PopoverTrigger>
                  <PopoverContent className={"flex flex-col gap-2"}>
                    <Link href="/" className={styles.catalog_product}>Все товары</Link>
                    <hr/>
                    <Link href={"/"} className={styles.catalog_product}><span>Окна</span></Link>
                    <Link href={"/"} className={styles.catalog_product}><span>Двери</span></Link>
                    <Link href={"/"} className={styles.catalog_product}><span>Балконы</span></Link>
                    <Link href={"/"} className={styles.catalog_product}><span>Сетки плиссе</span></Link>
                    <Link href={"/"} className={styles.catalog_product}><span>Перегородки</span></Link>
                    <Link href={"/"} className={styles.catalog_product}><span>Входная группа</span></Link>
                    <Link href={"/"} className={styles.catalog_product}><span>Фасады</span></Link>
                    <Link href={"/"} className={styles.catalog_product}><span>Порталы</span></Link>
                    <Link href={"/"} className={styles.catalog_product}><span>Беседки</span></Link>
                  </PopoverContent>
                </Popover>
                <Link className={styles.nav_item} href="/constructor"><IoHammer /><h6>Конструктор</h6></Link>
                <Link className={styles.nav_item} href="/about"><FaQuestion /><h6>О нас</h6></Link>
              </nav>
            </div>
            <SheetFooter className={"grid grid-cols-2 gap-2"}>
              {isAuth ?
                <>
                  <div>

                  </div>
                </>:
                <>
                  <Button variant={"secondary"}>Log in</Button>
                  <Button>Sign up</Button>
                </>
              }
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

    </header>
  )
}