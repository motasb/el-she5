import { Suspense } from "react";
import TechnicalGallery from "./technicalGallery";
import MainHeading from "@/app/components/mainHeading";

export default function TechnicalMalfunctions(){
    return(
        <div>
            <MainHeading h2={"الأعطال الفنية"}/>
            <Suspense fallback={<>Loading ...</>}>
                <TechnicalGallery/>
            </Suspense>
        </div>
    )
}