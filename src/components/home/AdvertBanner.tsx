import Image from "next/image";
import styles from "./AdvertBanner.module.scss";
import {cn} from "@/lib/utils";
import {ToastContentProps} from "react-toastify";

export interface AdvertBannerProps extends ToastContentProps {

}

export default function AdvertBanner({closeToast, toastProps}: AdvertBannerProps) {
  return (
    <div className={cn(styles.container)}  >
      <div className={styles.img}>
        <Image src={"/advert.png"} alt={"Advert"} fill objectFit={"cover"} />
      </div>
    </div>
  )
}