import {cn} from "@/lib/utils";
import LogoWithoutTurtle from "@components/LogoWithoutTurtle";
import {Button} from "@components/ui/button";
import styles from "./Home.module.scss";
import {FaArrowRight, FaQuestion, FaStar} from "react-icons/fa6";
import {GrCatalog} from "react-icons/gr";
import {IoMdImages, IoMdTrophy} from "react-icons/io";
import ProductsComponent from "@components/home/ProductsComponent";
import {IoHammer} from "react-icons/io5";
import {HiCursorClick} from "react-icons/hi";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@components/ui/carousel";
import Image from "next/image";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@components/ui/accordion";
import Link from "next/link";

export default function Home() {
  return (
    <main className={cn("max-w-custom gap-20 flex-col flex")}>

      {/*Title section*/}
      <div className={"mt-64 flex flex-col w-3/5 gap-8"}>
        <LogoWithoutTurtle className={""}/>
        <h5>Компания, которая изменит ваше представление об окнах. Век технологий настал – пустите его в свой дом.</h5>
        <div className={"flex items-center gap-4"}>
          <Link href={"/constructor"}><Button className={styles.main_btn}><h5>Собрать окно</h5><FaArrowRight /></Button></Link>
          <Button className={styles.main_btn} variant={"outline"}><h5>Перейти в каталог</h5><GrCatalog /></Button>
        </div>
      </div>

      {/*Advantages*/}
      <div className={"mt-64 w-full flex flex-col gap-6"}>
        <h2 className={styles.section_heading}><IoMdTrophy />Наши преимущества</h2>
        <div className={styles.advantages}>
          <div className={styles.advantage}>
            <div className={styles.advantage_image}>
              <Image src={"/advantages/pcb.jpg"} alt={"tech"} fill objectFit={"cover"} />
            </div>
            <div className={styles.advantage_text}>
              <h1>Технологии</h1>
              <p>Мы предоставляем услуги по установке окон с гарантией высокого качества. Используем надежные материалы и современные технологии для долговечности и энергоэффективности. Наша команда профессионалов выполняет установку с учётом всех особенностей помещения, обеспечивая долгий срок службы окон и удовлетворение ваших ожиданий.</p>
            </div>
          </div>
          <div className={styles.advantage}>
            <div className={styles.advantage_text}>
              <h1>Качество</h1>
              <p>Мы предоставляем услуги по установке окон с гарантией высокого качества. Используем только надежные материалы и современные технологии для долговечности и энергоэффективности. Наша команда профессионалов учитывает все особенности помещения, обеспечивая идеальный результат и долгий срок службы окон.</p>
            </div>
            <div className={styles.advantage_image}>
              <Image src={"/advantages/quality.jpg"} alt={"quality"} objectFit={"cover"} fill/>
            </div>
          </div>
          <div className={styles.advantage}>
            <div className={styles.advantage_image}>
              <Image src={"/advantages/eco.jpg"} alt={"ecology"} objectFit={"cover"} fill/>
            </div>
            <div className={styles.advantage_text}>
              <h1>Экология</h1>
              <p>Мы уделяем внимание энергоэффективности и экологичности наших окон. Они снижают теплопотери, что помогает сократить расходы на отопление и кондиционирование, создавая комфортный микроклимат. Используем только безопасные для здоровья и окружающей среды материалы. Выбирая наши окна, вы улучшаете качество жизни и вносите вклад в сохранение природы.</p>
            </div>
          </div>
        </div>
      </div>

      {/*Products*/}
      <div className={"w-full flex flex-col gap-6"}>
        <h2 className={styles.section_heading}><FaStar />Наши флагманы</h2>
        <ProductsComponent/>
      </div>

      {/*Action*/}
      <div className={styles.actions}>
        <Link href="/constructor">
          <div className={styles.action}>
            <h1><IoHammer /></h1>
            <h3>Сборка в конструкторе</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </Link>
        <div className={styles.action}>
          <h1><HiCursorClick /></h1>
          <h3>Выбор в каталоге</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>

      {/*Gallery*/}
      <div className={"w-full flex flex-col gap-6"}>
        <h2 className={styles.section_heading}><IoMdImages />Галерея</h2>
        <div className={"w-full flex justify-center"}>
          <Carousel className={"max-w-5xl w-full "}>
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-video w-full">
                    <Image src={"/LogoWithoutTurtle.svg"} alt={"window"} fill/>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

      </div>

      <div className={"w-full flex flex-col gap-6"}>
        <h2 className={styles.section_heading}><FaQuestion />FAQ</h2>
        <Accordion type={"single"} collapsible className={"w-full flex flex-col gap-2"}>
          <AccordionItem value={"item-1"} className={styles.faq_item}>
            <AccordionTrigger><h3>Сколько стоят наши услуги?</h3></AccordionTrigger>
            <AccordionContent>
              Наши услуги стоят того!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value={"item-2"} className={styles.faq_item}>
            <AccordionTrigger><h3>Сколько стоят наши услуги?</h3></AccordionTrigger>
            <AccordionContent>
              Наши услуги стоят того!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value={"item-3"} className={styles.faq_item}>
            <AccordionTrigger><h3>Сколько стоят наши услуги?</h3></AccordionTrigger>
            <AccordionContent>
              Наши услуги стоят того!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

    </main>
  );
}
