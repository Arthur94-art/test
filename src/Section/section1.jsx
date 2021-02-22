import React from 'react';
import s from './section1.module.css';

const Section1 = () => {
	return (
		<div className={s.appContainer}>
			<div className={s.summaryContainer}>
				<h3 className={s.summaryContainerTitle} >
					Average
				<br />
					Rating
				</h3>
				<div className={s.avgRattingContainer}>
					<div className={s.avgRattingBox}>
						<div className={s.avgRattingValue}>
							82
						</div>
						<p>Low</p>
					</div>
					<div className={s.avgRattingBox}>
						<div className={s.avgRattingValueBig}>
							91
						</div>
						<p>Average</p>
					</div>
					<div className={s.avgRattingBox}>
						<div className={s.avgRattingValue}>
							100
						</div>
						<p>High</p>
					</div>
				</div>
			</div>
			<div className={s.summaryContainer}>
				<h3 className={s.summaryContainerTitle} >
					Prominent
				<br />
				Descriptors
				</h3>
				<ul className={s.descriptionList}>
					<li className={s.descriptionItem}>Oak</li>
					<li className={s.descriptionItem}>Herbal</li>
					<li className={s.descriptionItem}>Tertiary notes</li>
				</ul>
			</div>
			<div className={s.summaryContainer}>
				<h3 className={s.summaryContainerTitle} >
					Total
				<br />
				Tastings
				</h3>
				<div className={s.testingContainer}><h3>13</h3></div>
			</div>
		</div>
	)
}

export default Section1;