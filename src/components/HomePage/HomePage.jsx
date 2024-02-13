import { Link } from 'react-router-dom';
import style from './HomePage.module.css'

const Home = () => {
  return (
    <>
      <p className={style.title}>Welcome to the rental car service</p>
      <div className={style.container}></div>
      <Link className={style.link} to="/catalog">To catalog</Link>
    </>
  );
};

export default Home;
