import styles from "./style.module.css"
import Image from "next/image";
const page = () => {
    return (
        <div className={styles.container} >
            <span>Hakkımızda</span>

            <Image className={styles.img} src="/images/img.png" alt="resim" width={100} height={100} quality={100} />
        </div>
    )
}

export default page;