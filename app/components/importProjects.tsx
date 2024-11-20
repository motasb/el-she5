import MainHeading from "./mainHeading";
import Project from "./project";

export default function ImportProjects(){
    return(
    <section id="portfolio" className="portfolio container">
        <div className="container">
            <MainHeading h2={"اهم المشاريع"} />
        </div>
        <div className="img-container">
                <Project src={`/images/Logo.png`} txt={"المشروع الاول"} href="/importantProjects/firstProject"/>
                <Project src={`/images/Logo.png`} txt={"المشروع الثاني "} href="/importantProjects/secoundProject"/>
        </div>
    </section>
    )
}