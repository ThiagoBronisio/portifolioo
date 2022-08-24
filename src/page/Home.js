import React from 'react';
import Lottie from 'react-lottie';
import emailjs from "emailjs-com"
import animationData from '../imagens/dev.json'
import { FiDownload } from "react-icons/fi"
import { IoIosSend } from "react-icons/io"
import { AiOutlineClose } from "react-icons/ai"
import { Controller, useForm } from 'react-hook-form';
import { useState } from "react";
import Modal from "react-modal"
import Swal from "sweetalert2";
import download from "../imagens/curriculo.pdf"



/*======CUSTOMIZAÇÃO DO MODAL====== */
const customStyles = {
    content: {
        width: "380px",
        height: "500px",
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

/*======ANIMAÇÃO HOME PAGE====== */
const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};


export default function Home() {

    /*======ANIMAÇÃO HOME PAGE====== */
    const [animationState, setAnimation] = useState({
        isStopped: false, isPaused: false
    });

    /*======ESTADO DO MODAL====== */
    const [modalIsOpen, setIsOpen] = useState(false)

    function handleOpenModal() {
        setIsOpen(true)
        reset({
            name: "",
            email: "",
            message: ""
        })
    }

    function handleCloseModal() {
        setIsOpen(false)

    }

    /*====== REACT HOOK FORM ====== */
    const {
        control,
        formState: {
            errors
        }, reset
    } = useForm();

    /*====== FUNCTION EMAIL-JS ====== */

    function enviarEmail(e) {
        e.preventDefault()
        emailjs.sendForm('gmailMessage', 'template_ppq876k', e.target, 's5SaSHNAG3Rka4DYJ')
            .then((result) => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    text: 'Mensagem enviada com sucesso.',
                    showConfirmButton: true,
                    confirmButtonColor: "#157347",
                    timer: 3700,
                    customClass: { popup: 'my-swal' }
                })
                console.log(result.text);
                reset({
                    name: "",
                    email: "",
                    message: ""
                });
                handleCloseModal()
            }, (error) => {
                alert(error.message)
                console.log(error.text);
            });
        e.target.reset()
    };

    return (

        <main className='container'>
            <div className="row mt-5 mx-5">
                <div className="col-lg-6 col-sm-12 col-md-12 pageHomeP">
                    <div className="mx-5-md">
                        <p className="text-light mb-0 jamjure text-center text-lg-start" style={{ fontSize: "25px" }}>Olá, meu nome é</p>
                        <p className="text-light mb-0 jamjure text-center text-lg-start" style={{ fontSize: "50px" }}>Thiago Bronisio</p>
                        <p className="text-light jamjure text-center text-lg-start" style={{ fontSize: "25px" }}>Desenvolvedor Web</p>

                        <div className="row">
                            <div className='col-6'>
                                <button className='btn btn-lg shadow-none jamjure w-100 buttonHome'
                                    onClick={handleOpenModal}>
                                    Entrar em contato

                                </button>
                            </div>
                            <div className='col-6'>

                                <a className='btn btn-lg shadow-none jamjure w-100 buttonHome'
                                    href={download} download="Curriculo.pdf">

                                    Baixar currículo
                                    <FiDownload className='text-end mx-2 fs-4' />

                                </a>
                            </div>
                            {/* 
                                
                                <button 
                                        className="btn btn-outline-primary buttonHome position-relative noShadowBorder text-start jamjure buttonH btn-lg my-2  "
                                        style={{ marginRight: "10px" }}
                                        onClick={handleOpenModal}>
                                        Entre em contato    
                                        <MdOutlineMail className='fs-3 position-absolute end-0 top-50 translate-middle' />
                                    </button>
                                

                             
                                    <button className="btn btn-outline-primary buttonHome position-relative text-start noShadowBorder jamjure buttonH btn-lg my-2">
                                        Cv dowload
                                        <FiUpload className='fs-3 position-absolute end-0 top-50 translate-middle' />
                                    </button>
                                */}




                            <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={handleCloseModal}
                                style={customStyles}
                                closeTimeoutMS={600}


                            >

                                <div className='row px-0 mx-0 position-relative'>
                                    <div className='col-11'>
                                        <h5 className='text-start text-light mt-2 baloo' style={{ marginLeft: "15px" }}>
                                            Envie uma mensagem
                                        </h5>
                                    </div>

                                    <div className='col-1 position-absolute top-50 end-0 translate-middle'>
                                        <span>
                                            <AiOutlineClose
                                                onClick={handleCloseModal}
                                                type='button'
                                                className='fs-2 mt-1 text-danger'
                                            />
                                        </span>
                                    </div>
                                </div>

                                <hr className="linha m-0" style={{ widith: "100%" }}></hr>

                                <form onSubmit={enviarEmail}>

                                    <div className='row justify-content-center d-flex mx-4'>
                                        <div className='col-sm-12 col-lg-12'>

                                            <Controller
                                                control={control}
                                                name="name"
                                                defaultValue=""
                                                className="text-light"
                                                render={
                                                    ({ field: { onChange, onBlur, value } }) => (
                                                        <input
                                                            name='name'
                                                            placeholder='Nome'
                                                            type="text"
                                                            className='form-control jamjure text-light mt-5 py-2 inputModal inputModalF inputModalH'
                                                            onChange={onChange}
                                                            onBlur={onBlur}
                                                            value={value}
                                                        />
                                                    )
                                                }
                                            />
                                            {
                                                errors.name && <div className="text-danger">
                                                    {errors.name.message}
                                                </div>
                                            }

                                            <Controller
                                                control={control}
                                                name="email"
                                                defaultValue=""
                                                className="text-light"
                                                render={
                                                    ({ field: { onChange, onBlur, value } }) => (
                                                        <input
                                                            name='email'
                                                            placeholder='Seu.email@gmail.com'
                                                            type="email"
                                                            className='form-control jamjure text-light mt-3 py-2 inputModal inputModalF inputModalH'
                                                            onChange={onChange}
                                                            onBlur={onBlur}
                                                            value={value}
                                                        />
                                                    )
                                                }
                                            />
                                            {
                                                errors.email && <div className="text-danger mb-0">

                                                </div>
                                            }

                                            <Controller
                                                control={control}
                                                name="message"
                                                defaultValue=""
                                                className="text-light"
                                                render={
                                                    ({ field: { onChange, onBlur, value } }) => (
                                                        <textarea
                                                            name='message'
                                                            rows="6"
                                                            placeholder='Deixe sua mensagem'
                                                            type="text"
                                                            className='form-control jamjure text-light mt-3 py-2 inputModal inputModalF inputModalH'
                                                            onChange={onChange}
                                                            onBlur={onBlur}
                                                            value={value}
                                                        />
                                                    )
                                                }
                                            />
                                            {
                                                errors.message && <div className="text-danger mb-0">
                                                    {errors.message.message}
                                                </div>
                                            }


                                            <div className='row' style={{}}>
                                                <div className='col-12'>
                                                    <button type='submit' className="btn btn-success jamjure btn-sm w-100 mt-5">
                                                        Enviar
                                                        <IoIosSend className='text-light mx-1 fs-5' />
                                                    </button>
                                                </div>


                                            </div>



                                        </div>
                                    </div>
                                </form>
                            </Modal>



                        </div>

                    </div>
                </div >

                <div className="col-lg-6 col-md-6 d-none d-sm-block d-none d-md-block">
                    <Lottie options={defaultOptions}
                        height={500}
                        width={500}
                        isStopped={animationState.isStopped}
                        isPaused={animationState.isPaused} />
                </div>
            </div>
        </main>

    )
}
