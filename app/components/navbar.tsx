import Image from "next/image";
import Link from "next/link";
import Toggle from "./toggle";

export default function NavBar(){
    return(

<nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <Link  href="/" className="navbar-brand logo-word">الشيخ</Link>
    <Toggle nameTogleInLocal={"Thems"}/>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse nvaigation-bar" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-ul">
        <li className="nav-item">
          <Link href="/" className="nav-link active" aria-current="page" >الرئيسية</Link>
        </li>
        <li className="nav-item dropdown">
          <Link href="#services" className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            الخدمات
          </Link>
          <ul className="dropdown-menu">
            <li><Link href="/electricity" className="dropdown-item" >الكهرباء</Link></li>
            {/* <li><Link href="#" className="dropdown-item" >Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" href="#about">Something else here</Link></li> */}
          </ul>
        </li>
        <li className="nav-item">
          <Link href="#about" className="nav-link" >سياستنا</Link>
        </li>
      </ul>
      <Image
        src={"/images/Logo.png"} 
        alt={"Logo"} 
        width={60} 
        height={60}
        />
    </div>
  </div>
</nav>
    )
}