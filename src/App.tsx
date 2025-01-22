import Navbar from "@/components/Navbar"
import HeroSection from "@/sections/HeroSection.tsx";
import FeatureSection from "@/sections/FeatureSection.tsx";
import InstallationSection from "@/sections/InstallationSection.tsx";
import Footer from "@/sections/FooterSection.tsx";

function App() {

    return (
        <section className="flex pb-10 flex-col itmes-center justify-center">
            <Navbar/>
            <HeroSection/>
            <FeatureSection/>
            <InstallationSection/>
            <Footer/>
        </section>
    )
}

export default App
