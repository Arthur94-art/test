import React from 'react';
import s from './section2.module.css'

const Section2 = () => {

	return (
		<div className={s.appContainer}>
			<div className={`${s.summaryContainer} ${s.quality}`}>
				<div className={s.qualityStats}>
					<div className={s.slider}>
						<h3 className={s.sliderTitle}>Quality</h3>
						<div className={s.sliderContainer}>
							<span className={`${s.sliderText} ${s.start}`}>Faulty</span>
							<span className={`${s.sliderText} ${s.finish}`}>Outstanding</span>
							<div className={s.sliderRangeValue}></div>
							<div className={s.target}></div>
							<div className={s.sliderInput} ></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Section2;