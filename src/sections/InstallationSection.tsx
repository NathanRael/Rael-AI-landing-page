import {ExternalLink} from "lucide-react";

const InstallationSection = () => {
    return (
        <section id={'installation'} className={'section gap-20'}>
            <h1 className={'text-title  text-white-100 text-wrap max-w-[50%] text-center '}><span
                className={"p-1 bg-neutral-dark-60 rounded-xl"}>Install Rael AI</span> with only two steps
            </h1>
            <InstallStep stepNumber={1} 
                         title={<p>Download and install <span className={'underline cursor-pointer space-x-2 relative'}>Ollama <ExternalLink className={'absolute top-0 -right-6'}/> </span></p>} 
                         desc={<p>Since this project relies on ollama.Head off to <span className={'underline cursor-pointer'}>ollama website</span> and download the app according to your OS</p>}

            /> 
            <InstallStep stepNumber={2} 
                         title={<p>Get <span
                             className={'underline cursor-pointer space-x-2 relative'}>rael-ai</span> and you're ready to go </p>}
                         desc={<p>Once ollama installed, download rael-ai and launch it.</p>}

            />
        </section>
    )
}
export default InstallationSection


const InstallStep = ({title, desc, stepNumber}: {
    title: React.ReactNode,
    desc: React.ReactNode,
    stepNumber: number
}) => {
    return (
        <div className={'flex p-6 w-[60%] rounded-2xl bg-gradient-to-r  from-neutral-dark-60/20  flex-col items-start justify-start gap-4'}>
            <div className={'flex  flex-row items-center justify-center gap-2'}>
                <p className={'p-2 bg-neutral-dark-60 text-white-100 text-lead font-bold rounded-full size-10 flex items-center justify-center'}>{stepNumber}</p>
                <h2 className={'text-lead text-white-100 font-bold'}>{title}</h2>
            </div>
            <p className={'text-white-100/60 text-base'}>{desc}</p>
        </div>
    )
}