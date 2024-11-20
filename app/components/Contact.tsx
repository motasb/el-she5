import MainHeading from "./mainHeading";
import PhoneNumper from "./Phone";

export default function Contact(){
    return(
        <div className="container contact">
        <MainHeading h2={"تواصل معنا"} p={" يتم الرد من فترة 9 ص الى 11 م ولا يتم الرد فى اوقات الصلاة "}/>
        <div className="contact-info container">
            <a href="">
                <i className="fa-brands fa-whatsapp"></i>
            </a>
            <PhoneNumper num={"01020575095"}/>
        </div>
        </div>
    )
}