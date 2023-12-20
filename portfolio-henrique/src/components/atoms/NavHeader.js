import style from '../../css/Components.module.css'

export default function NavHeader () {
    return (
        <div className={style.container_nav}>
            <section className={style.section_titulo_nav}>
            <h1>Henrique Beserra</h1>
            <p>Desenvolvedor Web</p>
            </section>
            <nav className={style.nav}> 
                <a href={'#main_content01'}> Sobre </a>       
                <a href={'#main_content02'}> Tecnologias </a>
                {/* <a href={'#main_content03'}> Teste 3 </a> */}
                <a href={'#main_content04'}> História do Astronauta </a>
            </nav>
        </div>
    );
}