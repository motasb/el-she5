import MainHeading from "./mainHeading";
import Service from "./service";

export default function Services(){
    return(
        <section id="services" className="services">
        <MainHeading h2={"الخدمات"}/>
            <div className="container">
        
            <Service
                href="/electricity"
                title={"الكهرباء"}
                txt={"خدمات كهرباء عالية الجودة لضمان الأمان والكفاءة."}
                classFont={"fa-solid fa-plug-circle-bolt"}
            />
            <Service
                href="/electricity"
                title={"الكهرباء"}
                txt={"خدمات كهرباء عالية الجودة لضمان الأمان والكفاءة."}
                classFont={"fa-solid fa-plug-circle-bolt"}
            />
        </div>
        </section>
    )
}