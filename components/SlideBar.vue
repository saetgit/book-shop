<script setup>
import { ref } from 'vue';

const slides = [
    { id: 1, image: 'images/slider/slide1.jpg', title: 'life of the wind ', description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.' },
    { id: 2, image: 'images/slider/slide2.jpg',  title: 'Birds gonna be Happy',description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.' },
];
</script>

<template>
    <Swiper :slides-per-view="1" :loop="true" :effect="'creative'" :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
    }" :creative-effect="{
    prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
    },
    next: {
        translate: ['100%', 0, 0],
    },
}">
        <SwiperSlide v-for="slide in slides" :key="slide.id">
            <div class="p-10 flex justify-center">
                <img :src="slide.image" class="w-auto h-[500px] mx-10" />
                <div class="block items-center">

                    <div class="text-[40px] mb-4 text-[#222]">{{ slide.title }}</div>
                    <div class="w-[400px] text-justify text-[#7f7974]" >{{ slide.description }}</div>
                    <div class="w-[100px] text-[#c2a67f] border-2 border-[#c2a67f] text-center rounded-lg py-2 font-semibold mt-4 hover:bg-[#daa556] hover:text-white hover:cursor-pointer">
                        <a href="#" class="">خرید </a>
                    </div>
                </div>
            </div>
        </SwiperSlide>
    </Swiper>
</template>
