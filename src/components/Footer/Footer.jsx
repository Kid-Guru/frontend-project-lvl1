import React from 'react';
import s from './Footer.module.css';

const Footer = () => {
	return (
		<footer>
			<div className={s.container}>
				<div className={s.footer}>
					<div className={s.footer_catalog}>
						<h2 className={s.footer_header}>Каталог</h2>
						<ul>
							<li className={s.footer_list}><a href="goods.html?cat=Мебель">Мебель</a></li>
							<li className={s.footer_list}><a href="goods.html?cat=Кухня">Кухня</a></li>
							<li className={s.footer_list}><a href="goods.html?cat=Текстиль">Текстиль</a></li>
							<li className={s.footer_list}><a href="goods.html?cat=Освещение">Освещение</a></li>
							<li className={s.footer_list}><a href="goods.html?cat=Декор">Декор</a></li>
						</ul>
					</div>
					<div className={s.footer_about}>
						<h2 className={s.footer_header}>Все о нас</h2>
						<ul>
							<li className={s.footer_list}><a href="#">О компании</a></li>
							<li className={s.footer_list}><a href="#">Демократичный дизайн</a></li>
							<li className={s.footer_list}><a href="#">Работа у нас</a></li>
							<li className={s.footer_list}><a href="#">Люди и планета</a></li>
						</ul>
					</div>
					<div className={s.footer_connection}>
						<h2 className={s.footer_header}>Свяжитесь с нами</h2>
						<ul>
							<li className={s.footer_list}><a href="#">Обратная связь</a></li>
							<li className={s.footer_list}><a href="#">Контакты</a></li>
							<li className={s.footer_list}><a href="#">Магазины и студии</a></li>
							<li className={s.footer_list}><a href="#">Землевладельцам</a></li>
							<li className={s.footer_list}><a href="#">Поставщикам</a></li>
							<li className={s.footer_list}><a href="#">Пресс-служба</a></li>
							<li className={s.footer_list}><a href="#">Вопросы и ответы</a></li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer