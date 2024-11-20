import Image from "next/image";
type imgProps = {
    src :string;
    txtOnPhoto?:string;
}

export default function Galleryimg({src , txtOnPhoto}:imgProps){
    return(
    <div className="col-sm-6 col-md-4 col-lg-3">
        <div className="box mb-3 bg-white" data-work={txtOnPhoto}>
            <Image className="img-fluid" src={src}
            alt="img"
            width={350}
            height={200}
            />  
        </div>
    </div>
    )
}