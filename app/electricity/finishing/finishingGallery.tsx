import Galleryimg from "@/app/components/galleryimg";
import MainHeading from "@/app/components/mainHeading";

export default function FinishingGallery() {
    const totalImages = 10; // عدد الصور الذي يمكن تغييره يدويًا
    const basePath = "/images/finshing-imgs/"; // المسار الأساسي للصور

    return (
        <div className="our-work text-center pt-5 pb-5 mygallery">
            <MainHeading h2={"معرض التشطيب"} />
            <div className="container">
                <div className="row">
                    {Array.from({ length: totalImages }, (_, index) => (
                        <Galleryimg
                            key={index}
                            src={`${basePath}${index + 1}.jpg`}
                            txtOnPhoto={`صورة ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
