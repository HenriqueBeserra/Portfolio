import style from '../../css/Components.module.css'

export default function NavHeader () {
    return (
        <div className={style.container_nav}>
            <h1>Henrique Beserra - Portfolio</h1>
            <nav className={style.nav}> 
                <a href={'#main_content01'}> Teste 1 </a>       
                <a href={'#main_content02'}> Teste 2 </a>
                <a href={'#main_content03'}> Teste 3 </a>
                <a href={'#main_content04'}> Teste 4 </a>
            </nav>
        </div>
    );
}