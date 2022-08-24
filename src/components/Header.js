import AnchorLink from "react-anchor-link-smooth-scroll"

var headerTH = {
    logo2: "/>",
    logo1: "<",
    nome: "Thiago Bronisio",

};



export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg w-auto p-2 mx-5 ">
                <div className="container-fluid ">
                    
                    <span className="mx-auto">
                        <a className="colorText text-decoration-none fs-1">{headerTH.logo1}</a>
                        <a className=" text-decoration-none text-light fs-2 jamjure">{headerTH.nome}</a>
                        <a className="colorText text-decoration-none fs-2">{headerTH.logo2}</a>
                    </span>
                    

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">

                        <ul className="navbar-nav ">
                            <li className="nav-item ">
                                <AnchorLink className="nav-link fs-5 jamjure mx-2 nav-linkk fade-in" href="#sobremim" offset="100">Sobre mim</AnchorLink>
                            </li>
                            <li className="nav-item">
                                <AnchorLink className="nav-link fs-5 jamjure mx-2 nav-linkk fade-in" href="#project" offset="50">Projetos</AnchorLink>
                            </li>
                            <li className="nav-item">
                                <AnchorLink className="nav-link fs-5 jamjure mx-2 nav-linkk fade-in" href="#skills" offset="100">Conhecimentos</AnchorLink>
                            </li>
                            <li className="nav-item">
                                <AnchorLink className="nav-link fs-5 jamjure mx-2 nav-linkk fade-in" href="#contact" offset="100">Contatos</AnchorLink>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
            <hr className="linha m-0"></hr>
        </>
    )
}