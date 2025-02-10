import Logo from "@/pages/comp/Logo";

export default function Head() {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="menu-header">
                        <div className="logo-menu">
                            <Logo />
                        </div>
                        <nav className="menu-nav">
                            <ul className="menu-nav">
                                <li className="menu-nav-item"><a href="#services">Услуги</a></li>
                                <li className="menu-nav-item"><a href="#projects">Проекты</a></li>
                                {/*<li className="menu-nav-item"><a href="#section3">Стоимость</a></li>*/}
                                <li className="menu-nav-item"><a href="#about">О компании</a></li>
                                <li className="menu-nav-item"><a href="#contacts">Контакты</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}