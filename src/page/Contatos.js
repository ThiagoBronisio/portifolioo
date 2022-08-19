import { SiLinkedin, SiGithub, SiWhatsapp } from "react-icons/si"
import { MdOutlineMail, MdEmail } from "react-icons/md"

export default function Contatos() {
    return (
        <div className="container">
            <div className="text-light jamjure text-center mt-5">
                <h1> Contatos</h1>
            </div>

            <div className="row text-center ">
                <div className="col-12 mt-5 ">
                    <a href="https://www.linkedin.com/in/thiago-bronisio-87b51a21b/"  target="_blank"><SiLinkedin className="text-light fs-1 mx-3"/></a>
                    <a href="https://github.com/ThiagoBronisio" className="text-decoration-none" target="_blank"> <SiGithub className="text-light fs-1 mx-3"/></a>
                    <a href="mailto:thiagobronisioo@gmail.com" target="_blank"><MdOutlineMail className="text-light fs-1 mx-3"/></a>
                    <a href="https://contate.me/thiago.bronisio" target="_blank" className="text-decoration-none"> <SiWhatsapp className=" text-light fs-1 mx-3"/></a>
                </div>
            </div>

        </div>
    )
}