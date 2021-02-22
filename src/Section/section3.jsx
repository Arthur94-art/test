import React from 'react';
import s from './section2.module.css'

const Section3 = () => {
	return (
		<div className={s.appContainer}>
			<div className={`${s.summaryContainer} ${s.quality}`}>
				<h3 className={s.h3}>Characteristics</h3>
				<div className={s.qualityStats}>
					<div className={s.slider}>
						<h3 className={s.sliderTitle}>balance</h3>
						<div className={s.sliderContainer}>
							<span className={`${s.sliderText} ${s.start}`}>Low</span>
							<span className={`${s.sliderText} ${s.finish}`}>Perfect</span>
							<div className={s.sliderRangeValueBalance} ></div>
							<div className={s.targetBalance}></div>
							<div className={s.sliderInput} ></div>
						</div>
					</div>
				</div>
				<div className={s.qualityStats}>
					<div className={s.slider}>
						<h3 className={s.sliderTitle}>finish</h3>
						<div className={s.sliderContainer}>
							<span className={`${s.sliderText} ${s.start}`}>Low</span>
							<span className={`${s.sliderText} ${s.finish}`}>High</span>
							<div className={s.sliderRangeValueFinish} ></div>
							<div className={s.targetFinish}></div>
							<div className={s.sliderInput} ></div>
						</div>
					</div>
				</div>
				<div className={s.qualityStats}>
					<div className={s.slider}>
						<h3 className={s.sliderTitle}>intensity</h3>
						<div className={s.sliderContainer}>
							<span className={`${s.sliderText} ${s.start}`}>Low</span>
							<span className={`${s.sliderText} ${s.finish}`}>High</span>
							<div className={s.sliderRangeValueIntensity} ></div>
							<div className={s.targetIntensity}></div>
							<div className={s.sliderInput} ></div>
						</div>
					</div>
				</div>
				<div className={s.qualityStats}>
					<div className={s.slider}>
						<h3 className={s.sliderTitle}>complexity</h3>
						<div className={s.sliderContainer}>
							<span className={`${s.sliderText} ${s.start}`}>Low</span>
							<span className={`${s.sliderText} ${s.finish}`}>High</span>
							<div className={s.sliderRangeValueComplexity} ></div>
							<div className={s.targetComplexity}></div>
							<div className={s.sliderInput} ></div>
						</div>
					</div>
				</div>
				<div className={s.qualityStats}>
					<div className={s.slider}>
						<h3 className={s.sliderTitle}>terroir</h3>
						<div className={s.sliderContainer}>
							<span className={`${s.sliderText} ${s.start}`}>Insignificant</span>
							<span className={`${s.sliderText} ${s.finish}`}>Pronounced</span>
							<div className={s.sliderRangeValueTerroir} ></div>
							<div className={s.targetTerroir}></div>
							<div className={s.sliderInput} ></div>
						</div>
					</div>
				</div>
				<div className={s.bottom}></div>
			</div>
			<div className={`${s.summaryContainer} ${s.quality}`}>
				<h3 className={s.h3}>Evaluation</h3>
				<div className={s.qualityStats}>
					<div className={s.slider}>
						<h3 className={s.sliderTitle}>sweetness</h3>
						<div className={s.sliderContainer}>
							<span className={`${s.sliderText} ${s.start}`}>Low</span>
							<span className={`${s.sliderText} ${s.finish}`}>Perfect</span>
							<div className={s.sliderRangeValueSweetness} ></div>
							<div className={s.targetSweetness}></div>
							<div className={s.sliderInput} ></div>
						</div>
					</div>
				</div>
				<div className={s.qualityStats}>
					<div className={s.slider}>
						<h3 className={s.sliderTitle}>acidity</h3>
						<div className={s.sliderContainer}>
							<span className={`${s.sliderText} ${s.start}`}>Low</span>
							<span className={`${s.sliderText} ${s.finish}`}>High</span>
							<div className={s.sliderRangeValueAcidity} ></div>
							<div className={s.targetAcidity}></div>
							<div className={s.sliderInput} ></div>
						</div>
					</div>
				</div>
				<div className={s.qualityStats}>
					<div className={s.slider}>
						<h3 className={s.sliderTitle}>tannins</h3>
						<div className={s.sliderContainer}>
							<span className={`${s.sliderText} ${s.start}`}>Low</span>
							<span className={`${s.sliderText} ${s.finish}`}>High</span>
							<div className={s.sliderRangeValueTannins} ></div>
							<div className={s.targetTannins}></div>
							<div className={s.sliderInput} ></div>
						</div>
					</div>
				</div>
				<div className={s.qualityStats}>
					<div className={s.slider}>
						<h3 className={s.sliderTitle}>alcohol</h3>
						<div className={s.sliderContainer}>
							<span className={`${s.sliderText} ${s.start}`}>Low</span>
							<span className={`${s.sliderText} ${s.finish}`}>High</span>
							<div className={s.sliderRangeValueAlcohol} ></div>
							<div className={s.targetAlcohol}></div>
							<div className={s.sliderInput} ></div>
						</div>
					</div>
				</div>
				<div className={s.qualityStats}>
					<div className={s.slider}>
						<h3 className={s.sliderTitle}>body</h3>
						<div className={s.sliderContainer}>
							<span className={`${s.sliderText} ${s.start}`}>Insignificant</span>
							<span className={`${s.sliderText} ${s.finish}`}>Pronounced</span>
							<div className={s.sliderRangeValueBody} ></div>
							<div className={s.targetBody}></div>
							<div className={s.sliderInput} ></div>
						</div>
					</div>
				</div>
				<div className={s.bottom}></div>
			</div>
		</div>
	)
}
export default Section3;