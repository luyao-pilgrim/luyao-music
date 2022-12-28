import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/scss"
import { Autoplay, Pagination } from "swiper";
import styles from "./styles.module.scss"

const Slider = (props) => {
    const { bannerList } = props
    return (
        // <div className={styles.sliderContainer}>
        //     <div className={styles.before}></div>
        //     <div>
        //         <div className={styles.swiperWrapper}>
        //             <Swiper
        //                 modules={[Autoplay, Pagination]}
        //                 spaceBetween={10}
        //                 slidesPerView={1}
        //                 loop
        //                 autoplay={{
        //                     delay: 3000,
        //                     disableOnInteraction: false,
        //                 }}
        //                 pagination={{el:".swiperPagination", clickable:true}}
        //             >
        //                 {
        //                     bannerList.map((item, index) => (
        //                         <SwiperSlide key={index}>
        //                             <img src={item.imageUrl} width="100%" height="100%" alt="suggest" />
        //                         </SwiperSlide>
        //                     ))
        //                 }
        //             </Swiper>
        //         </div>
        //         <div className={styles.swiperPagination}></div>
        //     </div>
        // </div>
        <div className={styles.outer}>
            <div className={styles.before}></div>
            <div className={styles.swiperWrapper}>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={10}
                    slidesPerView={1}
                    loop
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                >
                    {
                        bannerList.map((item, index) => (
                            <SwiperSlide key={index}>
                                <img src={item.imageUrl} width="100%" height="100%" alt="suggest" />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>


    )
}

export default React.memo(Slider)