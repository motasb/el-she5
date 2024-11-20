import MainHeading from "@/app/components/mainHeading";
import Galleryimg from "../../components/galleryimg";

export default function EstablishmentGallery(){
    return(
        <div className="our-work text-center pt-5 pb-5 mygallery">
            <MainHeading h2={"معرض التأسيس"}/>
            <div className="container">
                <div className="row">
                    <Galleryimg src={"/images/Logo.png"} txtOnPhoto={"اهلا بيك "}/>
                    <Galleryimg src={"/images/Logo.png"}/>
                    <Galleryimg src={"/images/Logo.png"}/>
                    <Galleryimg src={"/images/Logo.png"}/>
                    <Galleryimg src={"/images/Logo.png"}/>
                    <Galleryimg src={"/images/Logo.png"}/>
                    <Galleryimg src={"/images/Logo.png"}/>  
                </div>
            </div>
        </div>
    )
}