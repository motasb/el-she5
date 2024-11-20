import { Suspense } from "react";
import FinishingGallery from "./finishingGallery";

export default function Finishing(){
    return(
        <div>
            <Suspense fallback={<>Loading ...</>}>
                <FinishingGallery/>
            </Suspense>
        </div>
    )
}