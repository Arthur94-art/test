import React from 'react';
import s from './Header.module.css';

const Header = () => {
	return (
		<header className={s.header}>
			<p className={s.headerTitle}>
				digital tastings (13)
				</p>
			<hr />
			<p className={s.headerText}>
				In collaboration with Noteable.co we offer the event participants to taste the wine online.
				Here you can see the statistics for all those tastings
			</p>
		</header>
	)
}
export default Header;