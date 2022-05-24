import React from 'react';
import HeaderCartButton from './HeaderCartButton';

import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = props => {
    return (
        <>
            <header className={classes.header}>
                <h1>Meals</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']} >
                <img src={mealsImage} alt='Delicious Food' />
            </div>
        </>
    )
}

export default Header;