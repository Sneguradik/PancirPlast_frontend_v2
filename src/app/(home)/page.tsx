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
              <h1>Инновации</h1>
              <p>Инновации в каждом элементе — от автоматических оконных приводов до умных рулонных штор. Управляйте светом и свежим воздухом одним нажатием на смартфон. Наши решения интегрируются с системами «умного дома» и работают по расписанию или по команде. Это не просто удобно — это новый уровень комфорта и энергоэффективности. Самый полезный гаджет для вашего умного дома, лучше только умный чайник!</p>
            </div>
          </div>
          <div className={styles.advantage}>
            <div className={styles.advantage_text}>
              <h1>Комфорт</h1>
              <p>Автоматизация вошла в каждый уголок нашей жизни — от стиральных машин до умных колонок. Окно PANCIR — это ещё один шаг к настоящему комфорту. Оно само проветривает помещение, регулирует свет с помощью автоматических штор и интегрируется в систему «умного дома». Всё работает тихо, точно и без вашего участия. Настоящий комфорт — когда даже окно понимает вас с полуслова.</p>
            </div>
            <div className={styles.advantage_image}>
              <Image src={"/advantages/comfort.jpg"} alt={"quality"} objectFit={"cover"} fill/>
            </div>
          </div>
          <div className={styles.advantage}>
            <div className={styles.advantage_image}>
              <Image src={"/advantages/safety.jpg"} alt={"ecology"} objectFit={"cover"} fill/>
            </div>
            <div className={styles.advantage_text}>
              <h1>Безопасность</h1>
              <p>Вы уже выбрали калёное стекло для автомобиля, чтобы чувствовать себя в безопасности на дороге — сделайте то же самое дома. Современные технологии стеклопакетов делают ваше жильё не только уютным, но и безопасным. Продумайте безопасность на всех уровнях — даже через окна. С окнами PANCIR вы всегда под надёжной защитой.</p>
            </div>
          </div>
          <div className={styles.advantage}>
            <div className={styles.advantage_image}>
              <Image src={"/advantages/aesthetic.jpg"} alt={"tech"} fill objectFit={"cover"} />
            </div>
            <div className={styles.advantage_text}>
              <h1>Эстетика</h1>
              <p>Хотите окно в уникальном цвете или с оригинальным рисунком на крышке привода? Мы готовы воплотить ваши идеи в жизнь! С помощью наших окон можно легко добавить индивидуальности интерьеру, подчеркивая стиль вашего дома. Сделайте своё пространство не только функциональным, но и эстетически привлекательным!</p>
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
              <Image src={"/advantages/reliable.jpg"} alt={"ecology"} objectFit={"cover"} fill/>
            </div>
            <div className={styles.advantage_text}>
              <h1>Надёжность</h1>
              <p>Стабильность, стойкость, сила — вот что гарантируют наши окна. Прижим привода до 60 кг и прочные стеклопакеты обеспечат надёжность даже в самых сложных условиях. Ветер, дождь или мороз — ваши окна останутся непоколебимыми. С нашими окнами вам не страшны никакие испытания!</p>
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
            <p>Создайте окно своей мечты! Соберите идеальное решение для вашего дома в нашем конструкторе.</p>
          </div>
        </Link>
        <div className={styles.action}>
          <h1><HiCursorClick /></h1>
          <h3>Выбор в каталоге</h3>
          <p>Выберите идеальные окна для вашего дома! Откройте наш каталог и найдите лучшее решение для вашего интерьера.</p>
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
            <AccordionTrigger><h3>Можно ли сделать окно не прямоугольным?</h3></AccordionTrigger>
            <AccordionContent>
              Да, Обратитесь к менеджеру и сделайте себе круглой окно на чердак или даже треугольное
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value={"item-2"} className={styles.faq_item}>
            <AccordionTrigger><h3>Где будет выходить провод привода?</h3></AccordionTrigger>
            <AccordionContent>
              При монтаже вам протянут его внутри оконной створки, и кабель выйдет у нижней петли, герметичность самого окна при этом не нарушается
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value={"item-3"} className={styles.faq_item}>
            <AccordionTrigger><h3>Работает ли привод не с Алисой?</h3></AccordionTrigger>
            <AccordionContent>
              Да, Siri, Алиса, Маруся. Также есть подключение к SprutHub, к системе Swiitch, Apple HomeKit
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

    </main>
  );
}
