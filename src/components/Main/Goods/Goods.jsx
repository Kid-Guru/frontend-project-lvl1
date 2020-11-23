import React from 'react';
import s from './Goods.module.css';

const Goods = () => {
	return (
		<div>
			<h2 className={s.main_header}>Детские игрушки</h2>
			<div className={s.goods + ' ' + s.wrapper}>
				<ul className={s.goods_list}>
					<li className={s.goods_list__item}>
						<a className={s.goods_item__link} href="card.html#idd001">
							<article className={s.goods_item}>
								<div className={s.goods_item__img}>
									<img src="https://www.ikea.com/ru/ru/images/products/fabler-byorn-myagkaya-igrushka-bezhevyy__0710165_PE727396_S5.JPG"
										data-second-image="https://www.ikea.com/ru/ru/images/products/fabler-byorn-myagkaya-igrushka-bezhevyy__0876876_PE611263_S5.JPG" alt="ФАБЛЕР БЬЁРН" />
								</div>
								<p className={s.goods_item__new}>Новинка</p>
								<h3 className={s.goods_item__header}>ФАБЛЕР БЬЁРН</h3>
								<p className={s.goods_item__description}>Мягкая игрушка, бежевый, 21 см</p>
								<p className={s.goods_item__price}>
									<span className={s.goods_item__price_value}>99</span>
									<span className={s.goods_item__currency}> ₽</span>
								</p>
								<button className={s.btn + ' ' + s.btn_add_card} aria-label="Добравить в корзину" data-idd="idd001"></button>
							</article>
						</a>
					</li>
					<li className={s.goods_list__item}>
						<a className={s.goods_item__link} href="card.html#idd001">
							<article className={s.goods_item}>
								<div className={s.goods_item__img}>
									<img src="https://www.ikea.com/ru/ru/images/products/fabler-byorn-myagkaya-igrushka-bezhevyy__0710165_PE727396_S5.JPG"
										data-second-image="https://www.ikea.com/ru/ru/images/products/fabler-byorn-myagkaya-igrushka-bezhevyy__0876876_PE611263_S5.JPG" alt="ФАБЛЕР БЬЁРН" />
								</div>
								<h3 className={s.goods_item__header}>ФАБЛЕР БЬЁРН</h3>
								<p className={s.goods_item__description}>Мягкая игрушка, бежевый, 21 см</p>
								<p className={s.goods_item__price}>
									<span className={s.goods_item__price_value}>99</span>
									<span className={s.goods_item__currency}> ₽</span>
								</p>
								<button className={s.btn + ' ' + s.btn_add_card} aria-label="Добравить в корзину" data-idd="idd001"></button>
							</article>
						</a>
					</li>
					<li className={s.goods_list__item}>
						<a className={s.goods_item__link} href="card.html#idd001">
							<article className={s.goods_item}>
								<div className={s.goods_item__img}>
									<img src="https://www.ikea.com/ru/ru/images/products/fabler-byorn-myagkaya-igrushka-bezhevyy__0710165_PE727396_S5.JPG"
										data-second-image="https://www.ikea.com/ru/ru/images/products/fabler-byorn-myagkaya-igrushka-bezhevyy__0876876_PE611263_S5.JPG" alt="ФАБЛЕР БЬЁРН" />
								</div>
								<h3 className={s.goods_item__header}>ФАБЛЕР БЬЁРН</h3>
								<p className={s.goods_item__description}>Мягкая игрушка, бежевый, 21 см</p>
								<p className={s.goods_item__price}>
									<span className={s.goods_item__price_value}>99</span>
									<span className={s.goods_item__currency}> ₽</span>
								</p>
								<button className={s.btn + ' ' + s.btn_add_card} aria-label="Добравить в корзину" data-idd="idd001"></button>
							</article>
						</a>
					</li>
					<li className={s.goods_list__item}>
						<a className={s.goods_item__link} href="card.html#idd001">
							<article className={s.goods_item}>
								<div className={s.goods_item__img}>
									<img src="https://www.ikea.com/ru/ru/images/products/fabler-byorn-myagkaya-igrushka-bezhevyy__0710165_PE727396_S5.JPG"
										data-second-image="https://www.ikea.com/ru/ru/images/products/fabler-byorn-myagkaya-igrushka-bezhevyy__0876876_PE611263_S5.JPG" alt="ФАБЛЕР БЬЁРН" />
								</div>
								<h3 className={s.goods_item__header}>ФАБЛЕР БЬЁРН</h3>
								<p className={s.goods_item__description}>Мягкая игрушка, бежевый, 21 см</p>
								<p className={s.goods_item__price}>
									<span className={s.goods_item__price_value}>99</span>
									<span className={s.goods_item__currency}> ₽</span>
								</p>
								<button className={s.btn + ' ' + s.btn_add_card} aria-label="Добравить в корзину" data-idd="idd001"></button>
							</article>
						</a>
					</li>
					<li className={s.goods_list__item}>
						<a className={s.goods_item__link} href="card.html#idd001">
							<article className={s.goods_item}>
								<div className={s.goods_item__img}>
									<img src="https://www.ikea.com/ru/ru/images/products/fabler-byorn-myagkaya-igrushka-bezhevyy__0710165_PE727396_S5.JPG"
										data-second-image="https://www.ikea.com/ru/ru/images/products/fabler-byorn-myagkaya-igrushka-bezhevyy__0876876_PE611263_S5.JPG" alt="ФАБЛЕР БЬЁРН" />
								</div>
								<h3 className={s.goods_item__header}>ФАБЛЕР БЬЁРН</h3>
								<p className={s.goods_item__description}>Мягкая игрушка, бежевый, 21 см</p>
								<p className={s.goods_item__price}>
									<span className={s.goods_item__price_value}>99</span>
									<span className={s.goods_item__currency}> ₽</span>
								</p>
								<button className={s.btn + ' ' + s.btn_add_card} aria-label="Добравить в корзину" data-idd="idd001"></button>
							</article>
						</a>
					</li>
					<li className={s.goods_list__item}>
						<a className={s.goods_item__link} href="card.html#idd001">
							<article className={s.goods_item}>
								<div className={s.goods_item__img}>
									<img src="https://www.ikea.com/ru/ru/images/products/fabler-byorn-myagkaya-igrushka-bezhevyy__0710165_PE727396_S5.JPG"
										data-second-image="https://www.ikea.com/ru/ru/images/products/fabler-byorn-myagkaya-igrushka-bezhevyy__0876876_PE611263_S5.JPG" alt="ФАБЛЕР БЬЁРН" />
								</div>
								<h3 className={s.goods_item__header}>ФАБЛЕР БЬЁРН</h3>
								<p className={s.goods_item__description}>Мягкая игрушка, бежевый, 21 см</p>
								<p className={s.goods_item__price}>
									<span className={s.goods_item__price_value}>99</span>
									<span className={s.goods_item__currency}> ₽</span>
								</p>
								<button className={s.btn + ' ' + s.btn_add_card} aria-label="Добравить в корзину" data-idd="idd001"></button>
							</article>
						</a>
					</li>
					<li className={s.goods_list__item}>
						<a className={s.goods_item__link} href="card.html#idd001">
							<article className={s.goods_item}>
								<div className={s.goods_item__img}>
									<img src="https://www.ikea.com/ru/ru/images/products/fabler-byorn-myagkaya-igrushka-bezhevyy__0710165_PE727396_S5.JPG"
										data-second-image="https://www.ikea.com/ru/ru/images/products/fabler-byorn-myagkaya-igrushka-bezhevyy__0876876_PE611263_S5.JPG" alt="ФАБЛЕР БЬЁРН" />
								</div>
								<h3 className={s.goods_item__header}>ФАБЛЕР БЬЁРН</h3>
								<p className={s.goods_item__description}>Мягкая игрушка, бежевый, 21 см</p>
								<p className={s.goods_item__price}>
									<span className={s.goods_item__price_value}>99</span>
									<span className={s.goods_item__currency}> ₽</span>
								</p>
								<button className={s.btn + ' ' + s.btn_add_card} aria-label="Добравить в корзину" data-idd="idd001"></button>
							</article>
						</a>
					</li>
					<li className={s.goods_list__item}>
						<a className={s.goods_item__link} href="card.html#idd001">
							<article className={s.goods_item}>
								<div className={s.goods_item__img}>
									<img src="https://www.ikea.com/ru/ru/images/products/fabler-byorn-myagkaya-igrushka-bezhevyy__0710165_PE727396_S5.JPG"
										data-second-image="https://www.ikea.com/ru/ru/images/products/fabler-byorn-myagkaya-igrushka-bezhevyy__0876876_PE611263_S5.JPG" alt="ФАБЛЕР БЬЁРН" />
								</div>
								<h3 className={s.goods_item__header}>ФАБЛЕР БЬЁРН</h3>
								<p className={s.goods_item__description}>Мягкая игрушка, бежевый, 21 см</p>
								<p className={s.goods_item__price}>
									<span className={s.goods_item__price_value}>99</span>
									<span className={s.goods_item__currency}> ₽</span>
								</p>
								<button className={s.btn + ' ' + s.btn_add_card} aria-label="Добравить в корзину" data-idd="idd001"></button>
							</article>
						</a>
					</li>
					<li className={s.goods_list__item}>
						<a className={s.goods_item__link} href="card.html#idd001">
							<article className={s.goods_item}>
								<div className={s.goods_item__img}>
									<img src="https://www.ikea.com/ru/ru/images/products/fabler-byorn-myagkaya-igrushka-bezhevyy__0710165_PE727396_S5.JPG"
										data-second-image="https://www.ikea.com/ru/ru/images/products/fabler-byorn-myagkaya-igrushka-bezhevyy__0876876_PE611263_S5.JPG" alt="ФАБЛЕР БЬЁРН" />
								</div>
								<h3 className={s.goods_item__header}>ФАБЛЕР БЬЁРН</h3>
								<p className={s.goods_item__description}>Мягкая игрушка, бежевый, 21 см</p>
								<p className={s.goods_item__price}>
									<span className={s.goods_item__price_value}>99</span>
									<span className={s.goods_item__currency}> ₽</span>
								</p>
								<button className={s.btn + ' ' + s.btn_add_card} aria-label="Добравить в корзину" data-idd="idd001"></button>
							</article>
						</a>
					</li>
					<li className={s.goods_list__item}>
						<a className={s.goods_item__link} href="card.html#idd001">
							<article className={s.goods_item}>
								<div className={s.goods_item__img}>
									<img src="https://www.ikea.com/ru/ru/images/products/fabler-byorn-myagkaya-igrushka-bezhevyy__0710165_PE727396_S5.JPG"
										data-second-image="https://www.ikea.com/ru/ru/images/products/fabler-byorn-myagkaya-igrushka-bezhevyy__0876876_PE611263_S5.JPG" alt="ФАБЛЕР БЬЁРН" />
								</div>
								<h3 className={s.goods_item__header}>ФАБЛЕР БЬЁРН</h3>
								<p className={s.goods_item__description}>Мягкая игрушка, бежевый, 21 см</p>
								<p className={s.goods_item__price}>
									<span className={s.goods_item__price_value}>99</span>
									<span className={s.goods_item__currency}> ₽</span>
								</p>
								<button className={s.btn + ' ' + s.btn_add_card} aria-label="Добравить в корзину" data-idd="idd001"></button>
							</article>
						</a>
					</li>

				</ul>
			</div>
		</div>
	)
}

export default Goods