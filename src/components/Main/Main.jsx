import React from 'react';
import {Route} from 'react-router-dom';
import s from './Main.module.css';
import MainPage from './MainPage/MainPage';
import Goods from './Goods/Goods';

const Main = () => {
	return (
		<div className={s.container}>
			<Route path='/MainPage' component={MainPage}/>
			<Route path='/Goods' component={Goods}/>
						
			{/* <Navlink /> */}
			{/* <Goods /> */}
			{/* <Carg /> */}
		</div>
	)
}

export default Main