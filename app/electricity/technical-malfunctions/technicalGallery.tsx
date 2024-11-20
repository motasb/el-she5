import Galleryimg from "@/app/components/galleryimg";
import MainHeading from "@/app/components/mainHeading";

export default function TechnicalGallery(){
    return(
        <div className="our-work text-center pt-5 pb-5 mygallery">
            <MainHeading h2={"معرض العطال الفنية"}/>
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