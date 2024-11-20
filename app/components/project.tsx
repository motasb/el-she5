import Image from "next/image";
import Link from "next/link";
type projectProps = {
    src :string;
    txt :string;
    href: string;
}
export default function Project({src , txt , href}:projectProps){
    return(
        <div className="box">
            <Link href={href}>
                <Image src={src} alt="مشروع" width={200} height={200}/>
                <div className="text-img">
                    <p>{txt}</p>
                </div>
            </Link>
        </div>    
    )
}