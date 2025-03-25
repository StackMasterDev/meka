import styles from "./style.module.css"
import Image from "next/image"
const OrnekUrunler = () => {

    const urunler = [
        {
            text: "ürün 1",
            img: "/ornekUrunler/img1.JPG"
        },
        {
            text: "ürün 2",
            img: "/ornekUrunler/img2.JPG"
        },
        {
            text: "ürün 3",
            img: "/ornekUrunler/img3.JPG"
        }, {
            text: "ürün 1",
            img: "/ornekUrunler/img1.JPG"
        },
        {
            text: "ürün 2",
            img: "/ornekUrunler/img2.JPG"
        },
        {
            text: "ürün 3",
            img: "/ornekUrunler/img3.JPG"
        }
    ]

    return (
        <div className={styles.container}>

            {urunler.map((u) => {
                return (
                    <div className={styles.card}>
                        <Image className={styles.img} src={u.img} width={200} height={280} alt="img" />
                        <div className={styles.text}> {u.text}</div>
                    </div>
                )
            })}

        </div>
    )
}

export default OrnekUrunler;