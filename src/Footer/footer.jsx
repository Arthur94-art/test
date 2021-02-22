import React from 'react';
import logo from './footerLogo.svg';
import s from './footer.module.css';


const Footer = () => {
	return (
		<div className={s.footer}>
			<hr className={s.footerLine} />
			<div className={s.footerInfo}>
				<img className={s.footerLogo} src={logo} />
				<p className={s.footerText}>
					Bottlebooks is collaborating with Notable to create the best end to end
					digital solutions for winemakers, wine professionals, and wine lovers.
				 <a href={'https://noteable.co/'}>More about noteable</a>
				</p>
			</div>
		</div>
	)
}

export default Footer;