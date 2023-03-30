import React, {useState} from "react";
import left from "../images/left.png";
import right from "../images/right.png";
import styles from "./Slider.module.sass"
interface Slide {
    text1: string;
    text2: string;
    textButton: string;
    image: string;
    color: string
}
interface SliderProps {
    slides: Slide[];
}

export const Slider: React.FC<SliderProps> = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const handlePrevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(slides.length-1)
        }
        else {
            setCurrentSlide(currentSlide-1)
        }
    }

    const handleNextSlide = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1)
        }
        else {
            setCurrentSlide(0)
        }
    }

    const activeSlide = slides[currentSlide]

    return (
        <div className={styles.slider} >
            <div className={styles.arrowLeft}>
                <button  onClick={handlePrevSlide}>
                    <img src={left} alt="Previous Slide" />
                </button>
            </div>

            <div className={styles.slider__content} style={{ backgroundColor: activeSlide.color }}>
                <div className={styles.slider__content__bl}>
                    <div className={styles.slider__content__bl__text1}>{activeSlide.text1}</div>
                    <div className={styles.slider__content__bl__text2}>{activeSlide.text2}</div>
                    <div>
                        <button className={styles.slider__content__bl__button}>{activeSlide.textButton}</button>
                    </div>

                </div>

                <div >
                    <img className={styles.slider__img} src={activeSlide.image} alt="Slide Image"/>
                </div>

            </div>


            <div className={styles.arrowRight}>
                <button  onClick={handleNextSlide}>
                    <img src={right} alt="Next Slide"  />
                </button>
            </div>
        </div>
    )
}