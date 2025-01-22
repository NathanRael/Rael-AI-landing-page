import {Button} from "rael-ui";
import {ArrowDown, DownloadCloud} from "lucide-react";
import {ChatPageImage} from "@/assets";

const HeroSection = () => {
    return (
        <section className={'flex flex-col items-center justify-center gap-20 w-full px-10 pt-40 '}>
            <div className="flex flex-col justify-center items-center gap-10">
                <div className={'flex flex-col items-center justify-center'}>
                    <p className={'text-lead text-white-100'}>Developed by <span className={'underline cursor-pointer'}>Natanael R</span>
                    </p>
                    <h1 className={"text-big-title text-white-100"}>Your Go-to Solution For Using <span
                        className={' p-1 bg-neutral-dark-60 rounded-xl'}>Ollama</span></h1>
                    <p className={'text-lead text-white-100/80'}>Use the power of ollama locally featuring stunning
                        UI</p>
                </div>
                <div className={'flex flex-row items-center justify-center gap-10'}>
                    <Button onClick={() => window.open(process.env.RAEL_AI_DOWNLOAD_LINK, '_blank')} size={'lg'} className={'rounded-xl'}>
                        <DownloadCloud/>
                        Download (desktop)
                    </Button>
                    <Button onClick={() => window.location.href = "#installation"} size={'lg'} className={'rounded-xl bg-neutral-dark-80'}>
                        <ArrowDown/>
                        Installation steps
                    </Button>
                </div>
            </div>
            <div>
                <img src={ChatPageImage} alt='Hero section image'
                     className={'rounded-3xl object-cover border border-neutral-dark-60 w-[1024px]'}/>
            </div>
        </section>
    )
}
export default HeroSection


