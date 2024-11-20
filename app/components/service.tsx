import Link from "next/link";

type typeProps = {
    title:string;
    txt: string;
    classFont?: string;
    href:string;
}
export default function Service ({href , title , classFont , txt }:typeProps){
    return(
        <Link href={`${href}`}>
            <div className="box">
                {classFont && <i className={classFont}></i>}
                <h3>{title}</h3>
                <div className="info">
                <p>{txt}</p>
                </div>
            </div>
        </Link>
    )
}