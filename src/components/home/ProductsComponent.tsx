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
      chartData.datasets[0].data = [9,3,5,7];

      return (
        <div className={styles.product}>
          <div className={styles.product_img}>

          </div>
          <div className={styles.product_content}>
            <h1 className={cn(oceanWideFont.className, styles.product_title)}>Профиль 1</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Radar data={chartData} options={chartConfig}/>
            <Button className={"flex items-center gap-2 h4 pt-6 pb-6 w-full"}><FaCartShopping />В корзину</Button>
          </div>
        </div>
      );
    case 2:
      chartData.datasets[0].data = [9,3,5,7];

      return (
        <div className={styles.product}>
          <div className={styles.product_img}>

          </div>
          <div className={styles.product_content}>
            <h1 className={cn(oceanWideFont.className, styles.product_title)}>Профиль 2</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Radar data={chartData} options={chartConfig}/>
            <Button className={"flex items-center gap-2 h4 pt-6 pb-6 w-full"}><FaCartShopping />В корзину</Button>
          </div>
        </div>
      );
    case 3:
      chartData.datasets[0].data = [9,3,5,7];

      return (
        <div className={styles.product}>
          <div className={styles.product_img}>

          </div>
          <div className={styles.product_content}>
            <h1 className={cn(oceanWideFont.className, styles.product_title)}>Профиль 3</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Radar data={chartData} options={chartConfig}/>
            <Button className={"flex items-center gap-2 h4 pt-6 pb-6 w-full"}><FaCartShopping />В корзину</Button>
          </div>
        </div>
      );
    case 4:
      chartData.datasets[0].data = [9,3,5,7];

      return (
        <div className={styles.product}>
          <div className={styles.product_img}>

          </div>
          <div className={styles.product_content}>
            <h1 className={cn(oceanWideFont.className, styles.product_title)}>Профиль 4</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Radar data={chartData} options={chartConfig}/>
            <Button className={"flex items-center gap-2 h4 pt-6 pb-6 w-full"}><FaCartShopping />В корзину</Button>
          </div>
        </div>
      );
    default:
      return (
        <div className={styles.product}>
          <div className={styles.product_img}>

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