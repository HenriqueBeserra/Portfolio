import style from '../../css/Components.module.css'
import NavHeader from '../atoms/NavHeader';
import Descrição from '../atoms/Descrição';

export default function Header () {
    return (
        <div id='headerInit' className={style.containerHead}>
            <NavHeader />            
            <Descrição />
        </div>
    )
};