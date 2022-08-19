import minhaFoto from "../imagens/minhaFoto.png"

export default function QuemSouEu() {
    return (
        <div className="container" style={{marginTop: "50px"}}>
            <div className="row container">
                <h1 className="text-center text-light mb-5 jamjure">Sobre mim</h1>
            </div>
            <div className="row container mt-1 p-4 rounded-3 mx-0  " style={{backgroundColor: "#1d2730"}}>
                <div className="col-md-2 col-lg-2 d-flex justify-content-center">
                    <img src={minhaFoto} className="w-100" ></img>
                </div>
                <div className="col-md-10 col-lg-10 text-light text-center mt-2 p-3">
                    <p className="text-start fs-5 mt-4 poppins "> Me chamo Thiago Bronisio, tenho 21 anos, sou Desenvolvedor Web em busca da primeira oportunidade na área. Desde
                        que comecei a estudar desenvolvimento meu foco é no Front-end, onde venho aprimorando meus conhecimentos em HTML 5,
                        Css3, Javascript, React JS e demais tecnologias.
                    </p>
                </div>

            </div>
        </div>
    );
}