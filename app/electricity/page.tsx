import Service from "../components/service"
import MainHeading from "../components/mainHeading"

export default function electricity(){
    return(
    <div className="electricity services ">
            <MainHeading h2={"الكهرباء"} p={""}/>
        <div className="container">
            <Service
                href="/electricity/establishment"
                title={"التأسيس"}
                txt={"هنا معرض صور لاعمال التاسيس"}
            />
            <Service
                href="/electricity/finishing"
                title={"التشطيب"}
                txt={"هنا معرض صور لاعمال التشطيب"}
            />
            <Service
                href="/electricity/technical-malfunctions"
                title={"الاعطال الفنية "}
                txt={"هنا معرض صور للاعطال الفنية "}
            />
        </div>
    </div>
    )
}