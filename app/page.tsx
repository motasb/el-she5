import Contact from "./components/Contact";
import Face from "./components/face";
import Footer from "./components/Footer";
import ImportProjects from "./components/importProjects";
import Services from "./components/Services";
import About from "./components/ِAbout";

export default function Home() {

    return(
        <>
            <Face/>
            <Services/>
            <ImportProjects/>
            <About/>
            <Contact/>
            <Footer/>
        </>
    )
}
