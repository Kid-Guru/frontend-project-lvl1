import React from 'react';
import s from './MainPage.module.css';
import img_webp from './img/01.webp';
import img_jpg from './img/01.jpg';
import { NavLink } from 'react-router-dom';

const MainPage = () => {
	return (
		<div>
			<h1 className={s.main_header}>ИКЕА. Сила дома.</h1>
			<aside className={s.offer}>
				<NavLink to="/Goods">
					<picture>
						<source srcset={img_webp} type="image/webp" />
						<img src={img_jpg} alt="СЛАТТУМ" />
					</picture>
				</NavLink>
				<NavLink to="/Goods" className={s.offer_extra}>
					<p>Посмотрите, как можно улучшить свой сон</p>
					<svg focusable="false" viewBox="0 0 24 24" className={s.offer_arrow} aria-hidden="true">
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M19.2937 12.7074L20.0008 12.0003L19.2938 11.2932L12.0008 3.99927L10.5865 5.41339L16.1727 11.0003H4V13.0003H16.1723L10.5855 18.5868L11.9996 20.0011L19.2937 12.7074Z"></path>
					</svg>
				</NavLink>
			</aside>
		</div>

	)
}

export default MainPage