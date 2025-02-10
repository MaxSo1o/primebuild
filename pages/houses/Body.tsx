import Intro from "@/pages/comp/houses/Intro";
import Services from "@/pages/comp/houses/Services";
import Projects from "@/pages/comp/houses/Projects";
import About from "@/pages/comp/houses/About";
import Contacts from "@/pages/comp/houses/Contacts";

export default function Body() {
    return (
        <div className="main-container">
            <Intro/>
            <Services/>
            <Projects/>
            <About/>
            <Contacts/>
        </div>
    )
}