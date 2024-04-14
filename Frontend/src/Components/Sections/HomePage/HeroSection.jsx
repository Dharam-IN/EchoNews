import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '/Images/slider1.webp'
import slider2 from '/Images/slider2.jpg'
import slider3 from '/Images/slider3.jpg'

// Swiper Css
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const HeroSection = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper h-[550px] px-10"
            >
                <SwiperSlide className="swiper-slide">
                    <div className='h-full'>
                        <img src={slider1} alt="slider1" className="w-full h-full object-cover" />
                    </div>
                    <div className="px-[50px] md:px-0 absolute inset-0 flex items-center flex-col w-full text-center justify-center bg-[#000000af]">
                        <div className='md:w-[60%] mx-auto'>
                            <h1 className="text-white text-3xl font-bold">
                                ‘Disastrous’: Israel-Iran tensions test limits of US policy amid Gaza war.
                            </h1>
                            <p className="text-white text-xl pt-4">
                                Washington, DC – United States President Joe Biden had a brief but stern warning for Iran as it promised to retaliate against Israel for a deadly air raid on its consulate in Damascus: “Don’t.” But analysts say that Iran likely will launch its own attack, raising fears of a regional war and showing the limits of US deterrence efforts in the Middle East.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className='h-full'>
                        <img src={slider2} alt="slider1" className="w-full h-full object-cover" />
                    </div>
                    <div className="px-[50px] md:px-0 absolute inset-0 flex items-center flex-col w-full text-center justify-center bg-[#000000af]">
                        <div className='md:w-[60%] mx-auto'>
                            <h1 className="text-white text-3xl font-bold">
                                Efforts on to develop cross-border insolvency framework, say experts.
                            </h1>
                            <p className="text-white text-xl pt-4">
                                Efforts are going on to develop a cross-border insolvency framework with a cautious approach and such a framework should respect the laws of other countries without superseding Indian law, according to experts. Former NCLAT (National Company Law Appellate Tribunal) Chairperson S J Mukhopadhaya emphasised the importance of having a robust cross-border insolvency framework in the country.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className='h-full'>
                        <img src={slider3} alt="slider1" className="w-full h-full object-cover" />
                    </div>
                    <div className="px-[50px] md:px-0 absolute inset-0 flex items-center flex-col w-full text-center justify-center bg-[#000000af]">
                        <div className='md:w-[60%] mx-auto'>
                            <h1 className="text-white text-3xl font-bold">
                                PM Modi taunts Rahul Gandhi over ‘poverty’ remarks: ‘Shahi jaadugar…’
                            </h1>
                            <p className="text-white text-xl pt-4">
                                Prime Minister Narendra Modi on Sunday took a dig at Congress leader Rahul Gandhi over his promise to remove poverty with a single stroke as a part of the grand old party's Lok Sabha election manifesto, saying that even the Congress leaders are not able to understand their own manifesto.“Congress ke shehzade (prince of the Congress)”, Modi said the entire country was surprised when he announced that he would eradicate poverty with one stroke.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <div className="autoplay-progress absolute right-4 bottom-4 flex items-center justify-center w-12 h-12 z-10">
                    <svg viewBox="0 0 48 48" ref={progressCircle} className="w-full h-full">
                        <circle cx="24" cy="24" r="20" fill="none" strokeWidth="4" stroke="var(--swiper-theme-color)"></circle>
                    </svg>
                    <span ref={progressContent} className="font-bold text-lg text-white"></span>
                </div>
            </Swiper>
        </>
    );
};

export default HeroSection;
