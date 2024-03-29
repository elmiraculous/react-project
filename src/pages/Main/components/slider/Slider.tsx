import React, {useState} from "react"
import styles from "./Slider.module.sass"
import {Icon} from "../../../../components/Icon/Icon"


interface Slide {
    title: string;
    content: string;
    textButton: string;
    image: string;
    color: string
}

interface SliderProps {
    slides: Slide[];
}

export const Slider: React.FC<SliderProps> = ({slides}) => {
	const [currentSlide, setCurrentSlide] = useState<number>(0)

	const handlePrevSlide = () => {
		if (currentSlide === 0) {
			setCurrentSlide(slides.length - 1)
		} else {
			setCurrentSlide(currentSlide - 1)
		}
	}

	const handleNextSlide = () => {
		if (currentSlide < slides.length - 1) {
			setCurrentSlide(currentSlide + 1)
		} else {
			setCurrentSlide(0)
		}
	}

	const activeSlide = slides[currentSlide]

	return (
		<div className={styles.slider}>
			<div className={styles.arrowLeft}>
				<button type="button" className={styles.but} onClick={handlePrevSlide}>
					<Icon width={8} name={"left"}/>
				</button>
			</div>

			<div className={styles.slider__content} style={{backgroundColor: activeSlide.color}}>
				<div className={styles.slider__content__bl}>
					<div className={styles.slider__content__bl__text1}>{activeSlide.title}</div>
					<div className={styles.slider__content__bl__text2}>{activeSlide.content}</div>
					<div>
						<button type="button"
							className={styles.slider__content__bl__button}>{activeSlide.textButton}</button>
					</div>

				</div>

				<div>
					<img className={styles.slider__img} src={activeSlide.image} alt="Slide Image"/>
				</div>

			</div>


			<div className={styles.arrowRight}>
				<button type="button" className={styles.but} onClick={handleNextSlide}>
					<Icon width={8} name={"right"}/>

				</button>
			</div>
		</div>
	)
}