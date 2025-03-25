"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { useRef } from 'react';
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

import 'swiper/css';
import styles from "./style.module.css";

const Slider = () => {
    const images = [
        "/slider/img1.jpeg",
        "/slider/img2.jpeg",
        "/slider/img3.jpeg"
    ];

    const swiperRef = useRef(null);

    return (
        <div className={styles.container}>
            <div className={styles.text}>Büyüyoruz</div>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                modules={[Navigation]}
            >
                {images.map((i, index) => (
                    <SwiperSlide key={index}>
                        <Image className={styles.img} src={i} width={400} height={200} alt='img' quality={100} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className={styles.buttons}>
                <button onClick={() => swiperRef.current?.slidePrev()} className={styles.button}><GrFormPrevious /></button>
                <button onClick={() => swiperRef.current?.slideNext()} className={styles.button}><GrFormNext /></button>
            </div>
        </div>
    );
};

export default Slider;
