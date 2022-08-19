import { FaReact, FaGithub } from "react-icons/fa"
import { SiTypescript, SiJavascript, SiHtml5, SiCss3, SiBootstrap, SiMaterialui, SiTailwindcss } from "react-icons/si"
import { BsFillPatchCheckFill } from "react-icons/bs"

export default function Conhecimentos() {
    return (

        <div className=" mt-5 container ">
            <div className="row text-light text-center jamjure mb-5">
                <h1>Conhecimentos</h1>
            </div>

            <div className="row px-5 mb-2 justify-content-center">
                <div className="col-4 rounded-3 position-relative" style={{ backgroundColor: "#1d2730", width: "300px" }}>
                    <SiHtml5 className=" iconsConhecimentos text-warning" />
                    <span className="text-light jamjure px-3">HTML 5</span>
                    <BsFillPatchCheckFill className="text-success position-absolute top-50 end-0 translate-middle  fs-5" />
                </div>

                <div className="col-4 rounded-3 position-relative mx-3" style={{ backgroundColor: "#1d2730", width: "300px" }}>
                    <SiCss3 className=" iconsConhecimentos text-primary " />
                    <span className="text-light jamjure px-3">CSS 3</span>
                    <BsFillPatchCheckFill className="text-success position-absolute top-50 end-0 translate-middle fs-5" />
                </div>

                <div className="col-4 rounded-3 position-relative" style={{ backgroundColor: "#1d2730", width: "300px" }}>
                    <SiJavascript className=" iconsConhecimentos text-warning" />
                    <span className="text-light jamjure px-3">Javascript</span>
                    <BsFillPatchCheckFill className="text-success position-absolute top-50 end-0 translate-middle fs-5" />
                </div>

            </div>

            <div className="row px-5 mb-2 justify-content-center ">

                <div className="col-4 rounded-3 position-relative" style={{ backgroundColor: "#1d2730", width: "300px" }}>
                    <FaReact className="iconsConhecimentos text-primary" />
                    <span className="text-light jamjure px-3">React Js</span>
                    <BsFillPatchCheckFill className="text-success position-absolute top-50 end-0 translate-middle fs-5" />
                </div>

                <div className="col-4 rounded-3 position-relative mx-3" style={{ backgroundColor: "#1d2730", width: "300px" }}>
                    <FaGithub className="iconsConhecimentos  text-light" />
                    <span className="text-light jamjure px-3">Github</span>
                    <BsFillPatchCheckFill className="text-success position-absolute top-50 end-0 translate-middle fs-5" />
                </div>

                <div className="col-4 rounded-3 position-relative" style={{ backgroundColor: "#1d2730", width: "300px" }}>
                    <SiTypescript className=" iconsConhecimentos text-primary" />
                    <span className="text-light jamjure px-3">Typescript</span>
                    <BsFillPatchCheckFill className="text-success position-absolute top-50 end-0 translate-middle fs-5" />
                </div>


            </div>

            <div className="row px-5 justify-content-center">

                <div className="col-4 rounded-3 position-relative" style={{ backgroundColor: "#1d2730", width: "300px" }}>
                    <SiBootstrap className=" iconsConhecimentos" style={{color:"#7952b3"}} />
                    <span className="text-light jamjure px-3">Bootstrap 5</span>
                    <BsFillPatchCheckFill className="text-success position-absolute top-50 end-0 translate-middle fs-5" />
                </div>

                <div className="col-4 rounded-3 position-relative mx-3" style={{ backgroundColor: "#1d2730", width: "300px" }}>
                    <SiMaterialui className=" iconsConhecimentos text-primary" />
                    <span className="text-light jamjure px-3">Material UI</span>
                    <BsFillPatchCheckFill className="text-success position-absolute top-50 end-0 translate-middle fs-5" />
                </div>

                <div className="col-4 rounded-3 position-relative" style={{ backgroundColor: "#1d2730", width: "300px" }}>
                    <SiTailwindcss className=" iconsConhecimentos text-primary" />
                    <span className="text-light jamjure px-3">Tailwind CSS</span>
                    <BsFillPatchCheckFill className="text-success position-absolute top-50 end-0 translate-middle fs-5" />
                </div>
                

            </div>


        </div>
    )
}