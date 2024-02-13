import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
// import { useDispatch } from 'react-redux';
import icon from '../../images/svg/sprite.svg'

function Header() {
  // const [burger, setBurger] = useState(false);

  // function closeMenu() {
  //   setBurger(false);
  // }

  return (
    <header className={style.header}>
      <Link to={'/'} className={style.logo}>
      <svg width="20" height="20" className={style.svg}>
        <use href={icon + '#icon-car'}></use>
      </svg>
      <span className={style.logoName}>RENTAL CAR</span>
      </Link>
      <nav className={style.menu}>
        <Link className={style.menuBtn}
          to={'/'}
        >
          Home
        </Link>
        <Link className={style.menuBtn}
          to={'/catalog'}
        >
          Catalog
        </Link>
        <Link className={style.menuBtn}
          to={'/favorite'}
        >
          Favorite
        </Link>
      </nav>
      {/* <button onClick={() => setBurger(true)} className={style.burger}>
        <svg className={style.svg}>
          <use href={`${icon} + '#icon-menu'`}></use>
        </svg>
      </button> */}
      {/* {burger && <MobileMenu closeMenu={closeMenu} locstion={location} />} */}
    </header>
  );
}

export default Header;
