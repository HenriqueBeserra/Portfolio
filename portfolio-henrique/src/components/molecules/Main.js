import style from '../../css/Components.module.css'
import SobreMim from '../atoms/SobreMim';
import TechDescrição from '../atoms/TechDescrição';

export default function Main () {
    return ( 
        <section className={style.mainContent}>
            <div id='main_content01' className={style.main_ctn01}>
                <SobreMim />
            </div>
            <div id='main_content02' className={style.main_ctn02}> 
                <TechDescrição />
            </div>
            <div id='main_content03' className={style.main_ctn03}>

            </div>
            <div id='main_content04' className={style.main_ctn04}>

            </div>
        </section>
    );
};