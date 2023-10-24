"use client";
import React, { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";

const EmbroideryPunching = () => {
    useEffect(() => {
        Fancybox.bind('[data-fancybox="gallery"]', {
            //
        });
    }, []);

    return (
        <>
            <section className="vertical__padding" style={{ paddingBottom: "0" }}>
                <div className="grid grid--col80">
                    <div className="block__inner">
                        <div className="innerMainHeading">
                            <h3 className="">Embroidery Punching</h3>
                        </div>
                    </div>
                </div>
                <div className="grid grid--col100">
                    <div className="block__inner" style={{ minWidth: "0" }}>
                        <Swiper
                            slidesPerView={5}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            navigation={true}
                            className="mySwiper logo__Slider"
                        >
                            <SwiperSlide>
                                <Link
                                    className="logo__Slider--img"
                                    href="https://fastbuddys.com/webImages/Embroidery/1.jpeg"
                                    data-fancybox="gallery"
                                >
                                    <Image
                                        src="https://fastbuddys.com/webImages/Embroidery/1.jpeg"
                                        loading="lazy"
                                        alt="portfolio-img"
                                        width={500}
                                        height={500}
                                    />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link
                                    className="logo__Slider--img"
                                    href="https://fastbuddys.com/webImages/Embroidery/2.jpeg"
                                    data-fancybox="gallery"
                                >
                                    <Image
                                        src="https://fastbuddys.com/webImages/Embroidery/2.jpeg"
                                        loading="lazy"
                                        alt="portfolio-img"
                                        width={500}
                                        height={500}
                                    />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link
                                    className="logo__Slider--img"
                                    href="https://fastbuddys.com/webImages/Embroidery/3.jpeg"
                                    data-fancybox="gallery"
                                >
                                    <Image
                                        src="https://fastbuddys.com/webImages/Embroidery/3.jpeg"
                                        loading="lazy"
                                        alt="portfolio-img"
                                        width={500}
                                        height={500}
                                    />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link
                                    className="logo__Slider--img"
                                    href="https://fastbuddys.com/webImages/Embroidery/4.jpeg"
                                    data-fancybox="gallery"
                                >
                                    <Image
                                        src="https://fastbuddys.com/webImages/Embroidery/4.jpeg"
                                        loading="lazy"
                                        alt="portfolio-img"
                                        width={500}
                                        height={500}
                                    />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link
                                    className="logo__Slider--img"
                                    href="https://fastbuddys.com/webImages/Embroidery/5.jpeg"
                                    data-fancybox="gallery"
                                >
                                    <Image
                                        src="https://fastbuddys.com/webImages/Embroidery/5.jpeg"
                                        loading="lazy"
                                        alt="portfolio-img"
                                        width={500}
                                        height={500}
                                    />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link
                                    className="logo__Slider--img"
                                    href="https://fastbuddys.com/webImages/Embroidery/6.jpeg"
                                    data-fancybox="gallery"
                                >
                                    <Image
                                        src="https://fastbuddys.com/webImages/Embroidery/6.jpeg"
                                        loading="lazy"
                                        alt="portfolio-img"
                                        width={500}
                                        height={500}
                                    />
                                </Link>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="block__inner" dir="rtl" style={{ minWidth: "0" }}>
                        <Swiper
                            slidesPerView={5}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            navigation={true}
                            className="mySwiper logo__Slider"
                        >
                            <SwiperSlide>
                                <Link
                                    className="logo__Slider--img"
                                    href="https://fastbuddys.com/webImages/Embroidery/7.jpeg"
                                    data-fancybox="gallery"
                                >
                                    <Image
                                        src="https://fastbuddys.com/webImages/Embroidery/7.jpeg"
                                        loading="lazy"
                                        alt="portfolio-img"
                                        width={500}
                                        height={500}
                                    />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link
                                    className="logo__Slider--img"
                                    href="https://fastbuddys.com/webImages/Embroidery/8.jpeg"
                                    data-fancybox="gallery"
                                >
                                    <Image
                                        src="https://fastbuddys.com/webImages/Embroidery/8.jpeg"
                                        loading="lazy"
                                        alt="portfolio-img"
                                        width={500}
                                        height={500}
                                    />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link
                                    className="logo__Slider--img"
                                    href="https://fastbuddys.com/webImages/Embroidery/9.jpeg"
                                    data-fancybox="gallery"
                                >
                                    <Image
                                        src="https://fastbuddys.com/webImages/Embroidery/9.jpeg"
                                        loading="lazy"
                                        alt="portfolio-img"
                                        width={500}
                                        height={500}
                                    />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link
                                    className="logo__Slider--img"
                                    href="https://fastbuddys.com/webImages/Embroidery/10.jpeg"
                                    data-fancybox="gallery"
                                >
                                    <Image
                                        src="https://fastbuddys.com/webImages/Embroidery/10.jpeg"
                                        loading="lazy"
                                        alt="portfolio-img"
                                        width={500}
                                        height={500}
                                    />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link
                                    className="logo__Slider--img"
                                    href="https://fastbuddys.com/webImages/Embroidery/8.jpeg"
                                    data-fancybox="gallery"
                                >
                                    <Image
                                        src="https://fastbuddys.com/webImages/Embroidery/8.jpeg"
                                        loading="lazy"
                                        alt="portfolio-img"
                                        width={500}
                                        height={500}
                                    />
                                </Link>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EmbroideryPunching;
