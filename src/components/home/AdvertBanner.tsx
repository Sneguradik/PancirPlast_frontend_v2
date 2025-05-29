import Image from "next/image";
import styles from "./AdvertBanner.module.scss";
import {cn} from "@/lib/utils";
import {ToastContentProps} from "react-toastify";


export default function AdvertBanner(props: ToastContentProps) {
  return (
    <div className={cn(styles.container)}  >
      <div className={styles.img}>
        <Image src={"/advert.png"} alt={"Advert"} fill objectFit={"cover"} />
      </div>
    </div>
  )
}