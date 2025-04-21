"use client"
import styles from "./Products.module.scss"
import {useState} from "react";
import {cn} from "@/lib/utils";
import localFont from 'next/font/local'
import {FaCartShopping, FaGears, FaShield} from "react-icons/fa6";
import {Button} from "@components/ui/button";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import {Radar} from "react-chartjs-2";
import {ChartData, ChartOptions} from "chart.js";
import Image from "next/image";

const oceanWideFont = localFont({
  src : [{
    path : "../../font/Oceanwide-Semibold.otf"
  }]
});

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);



export default function ProductsComponent() {
  const [page, setPage] = useState<number>(0);

  return(
    <div className={"w-full flex flex-col gap-12"}>
      <div>
        {GetPage(page)}
      </div>
      <div className={"flex gap-6 w-full items-center justify-center"}>

        {Array.from(Array(5).keys())
          .map((_, i) =>
            <span className={cn(styles.page_btn, i==page?styles.active:"")} key={i} onClick={() => setPage(i)}/>)}
      </div>
    </div>
  )
}

function GetPage(pageNumber: number) {

  const chartConfig : ChartOptions<"radar"> = {
    scales:{
      r:{
        beginAtZero: true,
        max: 10
      }
    },
    plugins:{
      legend:{display:false},
      tooltip:{enabled:false},
    },
    elements: {
      line: {
        borderWidth: 3
      }
    },
  };
  const chartData : ChartData<"radar", (number | null)[], unknown> = {
    labels: [
      "Теплоизоляция",
      "Шумоизоляция",
      "Прочность",
      "Экологичность",
    ],
    datasets: [
      {
        label: "Stats",
        data: [0,0,0,0],
        backgroundColor: 'rgba(127,127,127,.2)',
        borderColor: 'rgb(127,127,127)',
        pointBackgroundColor: 'rgb(127,127,127)',
        pointBorderColor: 'rgb(127,127,127)',
        pointHoverBackgroundColor: 'rgb(127,127,127)',
        pointHoverBorderColor: 'rgb(127,127,127)'
      }
    ]
  }

  switch (pageNumber) {
    case 1:
      chartData.datasets[0].data = [5,5,5,9];

      return (
        <div className={styles.product}>
          <div className={"flex justify-center"}>
            <div className={styles.product_img}>
              <Image src={"/windows/rehau_brilliant.PNG"} alt={"Rehau Brilliant"} objectFit={"contain"} fill />
            </div>
          </div>
          <div className={styles.product_content}>
            <h1 className={cn(oceanWideFont.className, styles.product_title)}>REHAU Brillant-Design</h1>
            <ul className={styles.frame_desc_list}>
              <li>Системная глубина: 60 мм</li>
              <li>Камеры: 3–5</li>
              <li>Теплоизоляция (Uw): 0,75–1,0 Вт/(м²·К)</li>
              <li >
                Особенности:
                <ul className={styles.frame_desc_sublist}>
                  <li>Бюджетный вариант для умеренного климата</li>
                  <li>Подходит для квартир и дач</li>
                  <li>Ламинация в 20+ цветов RAL</li>
                </ul>
              </li>
            </ul>
            <Radar data={chartData} options={chartConfig}/>
            <Button className={"flex items-center gap-2 h4 pt-6 pb-6 w-full"}><FaCartShopping />В корзину</Button>
          </div>
        </div>
      );
    case 2:
      chartData.datasets[0].data = [7,7,5,9];

      return (
        <div className={styles.product}>
          <div className={"flex justify-center"}>
            <div className={styles.product_img}>
              <Image src={"/windows/rehau_grazio.PNG"} alt={"Rehau Brilliant"} objectFit={"contain"} fill />
            </div>
          </div>
          <div className={styles.product_content}>
            <h1 className={cn(oceanWideFont.className, styles.product_title)}>REHAU Grazio</h1>
            <ul className={styles.frame_desc_list}>
              <li>Системная глубина: 70 мм</li>
              <li>Камеры: 5</li>
              <li>Теплоизоляция (Uw): 0,64–0,85 Вт/(м²·К)</li>
              <li >
                Особенности:
                <ul className={styles.frame_desc_sublist}>
                  <li>Узкие рамы для максимального освещения</li>
                  <li>Усиленная защита от шума (до 45 дБ)</li>
                  <li>Рекомендуется для городских квартир</li>
                </ul>
              </li>
            </ul>
            <Radar data={chartData} options={chartConfig}/>
            <Button className={"flex items-center gap-2 h4 pt-6 pb-6 w-full"}><FaCartShopping />В корзину</Button>
          </div>
        </div>
      );
    case 3:
      chartData.datasets[0].data = [8,8,5,9];

      return (
        <div className={styles.product}>
          <div className={"flex justify-center"}>
            <div className={styles.product_img}>
              <Image src={"/windows/rehau_intelio.PNG"} alt={"Rehau Brilliant"} objectFit={"contain"} fill />
            </div>
          </div>
          <div className={styles.product_content}>
            <h1 className={cn(oceanWideFont.className, styles.product_title)}>REHAU Intelio</h1>
            <ul className={styles.frame_desc_list}>
              <li>Системная глубина: 80 мм</li>
              <li>Камеры: 6</li>
              <li>Теплоизоляция (Uw): 0,59–0,75 Вт/(м²·К)</li>
              <li >
                Особенности:
                <ul className={styles.frame_desc_sublist}>
                  <li>Для холодного климата (Сибирь, Урал)</li>
                  <li>Выдерживает перепады температур от -50°C до +60°C</li>
                  <li>Совместимость с противовзломной фурнитурой</li>
                </ul>
              </li>
            </ul>
            <Radar data={chartData} options={chartConfig}/>
            <Button className={"flex items-center gap-2 h4 pt-6 pb-6 w-full"}><FaCartShopping />В корзину</Button>
          </div>
        </div>
      );
    case 4:
      chartData.datasets[0].data = [9,9,5,9];

      return (
        <div className={styles.product}>
          <div className={"flex justify-center"}>
            <div className={styles.product_img}>
              <Image src={"/windows/rehau_geno.PNG"} alt={"Rehau Brilliant"} objectFit={"contain"} fill />
            </div>
          </div>
          <div className={styles.product_content}>
            <h1 className={cn(oceanWideFont.className, styles.product_title)}>REHAU Geneo</h1>
            <ul className={styles.frame_desc_list}>
              <li>Системная глубина: 86 мм</li>
              <li>Камеры: 6</li>
              <li>Теплоизоляция (Uw): 0,53/(м²·К)</li>
              <li >
                Особенности:
                <ul className={styles.frame_desc_sublist}>
                  <li>Rau-Fipron: Уникальный материал прочнее</li>
                </ul>
              </li>
            </ul>
            <Radar data={chartData} options={chartConfig}/>
            <Button className={"flex items-center gap-2 h4 pt-6 pb-6 w-full"}><FaCartShopping />В корзину</Button>
          </div>
        </div>
      );
    default:
      return (
        <div className={styles.product}>
          <div className={"flex justify-center"}>
            <div className={styles.product_img}>
              <Image src={"/windows/pancir.jpg"} alt={"Rehau Brilliant"} objectFit={"contain"} fill />
            </div>
          </div>
          <div className={styles.product_content}>
            <h1 className={cn(oceanWideFont.className, styles.product_title)}>PANCIR</h1>
            <div className={"flex w-full flex-col gap-6"}>
              <div className={styles.feature}>
                <h5 className={styles.feature_icon}><FaShield /></h5>
                <h3>Калёный стеклопакет</h3>
                <p>Стекло повышенной прочности и безопасности, которое осыпается в безопасную стеклянную стружку при разрушении</p>
              </div>
              <div className={styles.feature}>
                <h4 className={styles.feature_icon}><FaGears /></h4>
                <h3>Оконный привод</h3>
                <p>Устройство, позволяющие вам открыть окно дистанционно или автоматически с широчайшим спектром настройки</p>
              </div>
            </div>

            <Button className={"flex items-center gap-2 h4 pt-6 pb-6 w-full"}><FaCartShopping />В корзину</Button>
          </div>
        </div>
      );
  }
}