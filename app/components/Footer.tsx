import Image from "next/image";

export default function Footer(){
    return(
    <footer>
        <div className="container">
            <Image src="/images/Logo.png" alt="logo" width={120} height={120}/>
            <h4>WE ARE SOCIAL</h4>
            <a target="_blank" href="https://www.facebook.com/share/bP1uhzDKvsnCdPam/?mibextid=qi2Omg"><i className="fa-brands fa-facebook-f"></i></a>
            <a target="_blank" href=""><i className="fa-brands fa-google-plus-g"></i></a>
            <p dir="ltr"> &copy; 2024 - <span>Elhlwany</span> all right reserved</p>
        </div>
    </footer>
    )
}