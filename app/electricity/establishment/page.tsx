import { Suspense } from "react";
import "../bondiGallery.css";
import EstablishmentGallery from "@/app/electricity/establishment/EstablishmentGallery";

export default function Establishment(){
    return(
        <div>
            <Suspense fallback={<>Loading ...</>}>
                <EstablishmentGallery/>
            </Suspense>
        </div>
    )
}