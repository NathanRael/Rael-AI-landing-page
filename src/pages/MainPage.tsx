import FeatureSection from "@/sections/FeatureSection";
import HeroSection from "@/sections/HeroSection.tsx";
import InstallationSection from "@/sections/InstallationSection.tsx";
import Footer from "@/sections/FooterSection.tsx";

const MainPage = () => {
    return (
        <section className={"flex pb-10 flex-col items-center justify-center"}>
            <HeroSection/>
            <FeatureSection/>
            <InstallationSection/>
            <Footer/>
        </section>
    )
}
export default MainPage
