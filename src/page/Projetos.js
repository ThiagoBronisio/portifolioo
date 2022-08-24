import { useState } from "react";
import cardProjetos from "../imagens/cardProjetos.svg"
import { SiGithub } from "react-icons/si"
import { FaEye } from "react-icons/fa"
import Modal from "react-modal";
import Login from "./ImagensProjetos/crud-contatos/login.png"
import Password from "./ImagensProjetos/crud-contatos/password.png"
import Registro from "./ImagensProjetos/crud-contatos/registro.png"
import Home from ".//ImagensProjetos/crud-contatos/home.png"
import Cadastro from "./ImagensProjetos/crud-contatos/cadastro-contatos.png"
import Consulta from "./ImagensProjetos/crud-contatos/consulta-contatos.png"
import Carousel from "react-bootstrap/Carousel"

/*======CUSTOMIZAÇÃO DO MODAL====== */
const customStyles = {
    content: {
        minWidth: "300px",
        maxWidth: "800px",

        minHeight: "220px",
        backgroundColor: "#1d2730",
        borderRadius: "5px",
        padding: "0px",
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',

    }
};


export default function Projetos() {



    const [modalProjectOne, setModalProjectOne] = useState(false)
    const [modalProjecttwo, setModalProjecttwo] = useState(false)
    const [modalProjectthree, setModalProjectthree] = useState(false)


    function openModalOne() {
        setModalProjectOne(true)
    }

    function closeModalOne() {
        setModalProjectOne(false)
    }


    function openModalTwo() {
        setModalProjecttwo(true)
    }


    function closeModalTwo() {
        setModalProjecttwo(false)
    }

    function openModalThree() {
        setModalProjectthree(true)
    }

    function closeModalThree() {
        setModalProjectthree(false)
    }

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="row justify-content-center mt-5 mx-0" style={{ width: "100%" }}>

            <div className="row">
                <h1 className="text-center text-light jamjure mb-5">Projetos</h1>
            </div>

            <div className="card col-md-4 col-lg-4 text-light shadow mt-3" style={{ width: "400px", backgroundColor: "#1d2730" }}>
                <img src={Login} className="card-img-top" style={{marginTop:"12px"}}></img>
                <div className="card-body">
                    <h5 className="card-title mt-4 text-center jamjure">Agenda Web</h5>
                    <p>O projeto Agenda Web se trata de um CRUD de contatos, onde conseguimos fazer cadastros, consultas, edições e exclusões de contatos.</p>
                    <a href="https://github.com/ThiagoBronisio/agenda-web" target="_blank" className="btn btn-primary w-100 buttonP buttonProjeto noShadowBorder mb-2">
                        Repositório
                        <SiGithub className=" mx-2 fs-3" />
                    </a>
                    <button className="btn btn-primary w-100 buttonP buttonProjeto noShadowBorder "
                        onClick={openModalOne}>
                        View
                        <FaEye className="mx-2 fs-4" />
                    </button>
                </div>
            </div>

            <div className="card col-md-4 col-lg-4 mx-5 text-light shadow mt-3" style={{ width: "400px", backgroundColor: "#1d2730" }}>
                <img src={cardProjetos} className="card-img-top"></img>
                <div className="card-body">
                    <h5 className="card-title mt-4 text-center jamjure">PROJETO 2</h5>
                    <p className="mb-5">Este projeto está em andamento...</p>
                    <a className="btn btn-primary w-100 buttonP buttonProjeto noShadowBorder mb-2">
                        Repositório
                        <SiGithub className=" mx-2 fs-3" />
                    </a>

                    <button className="btn btn-primary w-100 buttonP buttonProjeto noShadowBorder"
                        onClick={openModalTwo} aria-disabled="true">
                        View
                        <FaEye className="mx-2 fs-4" />
                    </button>

                </div>
            </div>

            <div className="card col-md-4 col-lg-4 text-light shadow mt-3" style={{ width: "400px", backgroundColor: "#1d2730" }}>
                <img src={cardProjetos} className="card-img-top"></img>
                <div className="card-body">

                    <h5 className="card-title mt-4 text-center jamjure">PROJETO 3</h5>
                    <p className="mb-5">Este projeto está em andamento...</p>


                    <a className="btn btn-primary w-100 buttonP buttonProjeto noShadowBorder mb-2">
                        Repositório
                        <SiGithub className=" mx-2 fs-4" />
                    </a>

                    <button className="btn btn-primary w-100 buttonP buttonProjeto noShadowBorder"
                        onClick={openModalThree}>
                        View
                        <FaEye className="mx-2 fs-4" />
                    </button>
                </div>
            </div>


            {/*====== MODAL PROJETO 1 ====== */}
            <Modal
                isOpen={modalProjectOne}
                onRequestClose={closeModalOne}
                style={customStyles}
                closeTimeoutMS={600}>


                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Login}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Registro}
                            alt="Second slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Password}
                            alt="Third slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Home}
                            alt="Third slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Cadastro}
                            alt="Third slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Consulta}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                


            </Modal>

            {/*====== MODAL PROJETO 2 ====== */}
            <Modal
                isOpen={modalProjecttwo}
                onRequestClose={closeModalTwo}
                style={customStyles}
                closeTimeoutMS={600}>

                <div className="col-12">
                    <div className="text-light text-center">Projeto em andamento </div>
                </div>
            </Modal>

            {/*====== MODAL PROJETO 3 ====== */}
            <Modal
                isOpen={modalProjectthree}
                onRequestClose={closeModalThree}
                style={customStyles}
                closeTimeoutMS={600}>

                <div className="col-12">
                    <div className="text-light text-center">Projeto em andamento</div>
                </div>
            </Modal>

        </div>

    )
}