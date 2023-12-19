import style from '../../css/Components.module.css'
import NavHeader from '../atoms/NavHeader';

export default function Header () {
    return (
        <div className={style.containerHead}>
            <NavHeader />            
        </div>
    );
};