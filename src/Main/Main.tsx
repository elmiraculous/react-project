import React from "react";
import styles from "./Main.module.sass"
import img1 from "../images/recycling-concept-flat-lay 2 2.png"
import img2 from "../images/слайд2 1.png"
import img3 from "../images/Frame 2058.png"
import map from "../images/Frame 1997.png"
import map2 from "../images/OrgUVC-L_Bus-39_Single-06 [преобразованный] 1.png"
import {Slider} from "./Slider"
import {Component} from "./Component";
const slides = [
    {
        text1: 'Сделаем мир чище',
        text2:'Сдай макулатуру или старую одежду и получи скидку на покупку товаров из переработанных материалов',
        textButton:'Условия сервиса',
        image: img1,
        color: '#B3EDC8'
    },
    {
        text1: 'А вы знали...',
        text2:'что среднее время разложения пластмассовых изделий колеблется от 400 до 700 лет,  а полиэтиленовых пакетов — от 100 до 200 лет? ',
        textButton:'Узнать больше',
        image: img2,
        color:  '#FFE48F'
    },
    {
        text1: 'Что с масками?',
        text2:'Медицинские маски не обязательно должны становиться отходами.Их тоже можно сдать на переработку.',
        textButton:'Пункты сбора масок',
        image: img3,
        color: '#BFF0DE'
    }
]
const component1=[
    {
        text1:'Пункты сбора',
        text2: 'Посмотри, где в твоем городе можно сдать вторсырье на переработку',
        img: map2
    }]
const component2=[
    {
    text1:'ЭкоМаркет',
    text2: 'Используй заработанные экокоины для покупки товаровиз переработанных материалов ',
    img: map
    }
]
export const Main=()=>{
    return(
        <div className={styles.main}>
            <Slider slides={slides}/>
            <div className={styles.block}>

                <Component text1={'Пункты сбора'} text2={'Используй заработанные экокоины для покупки товаровиз переработанных материалов '} img={map}/>
                <Component text1={'ЭкоМаркет'} text2={'Используй заработанные экокоины для покупки товаровиз переработанных материалов '} img={map2}/>
            </div>
        </div>
    )
}