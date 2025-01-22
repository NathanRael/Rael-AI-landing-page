import {Feature, FEATURES} from "@/contsants/features.ts";
import {useEffect, useState} from "react";
import {cn, Icon} from "rael-ui";
import {Bot, CircleFadingPlus, HardDriveDownload, Image} from "lucide-react";


const FeatureSection = () => {
    const [activeId, setActiveId] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveId(prev => (prev + 1) % FEATURES.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);
    
    return (
        <section id={'features'} className={'section  gap-20'}>
            <h1 className={'text-title   text-white-100 text-wrap max-w-[50%] text-center '}>
                Get most of <span className={"p-1 bg-neutral-dark-60 rounded-xl"}>ollama features</span> with a
                graphical user interface</h1>
            <div className={'flex flex-row items-center justify-between gap-[128px]'}>
                <div className={'space-y-4'}>
                    {
                        FEATURES.map((feature: Feature) => (
                            <FeatureCard onClick={() => setActiveId(feature.id)} key={feature.id} active={feature.id === activeId} {...feature} />
                        ))
                    }
                </div>
                <img src={FEATURES[activeId].image} alt={'PredefinedChatbot'}
                     className={"rounded-3xl  object-cover border border-neutral-dark-60 w-[860px]"}/>
            </div>

        </section>
    )
}
export default FeatureSection


type FeatureCard = Feature & {
    active: boolean;
    onClick : () => void;
}

const FeatureCard = ({active, onClick, ...props}: FeatureCard) => {
    
    const getIcon = (name : Feature['icon'] ) => {
        switch (name) {
            case 'bot':
                return <Bot size={32}/>
            case 'image':
                return <Image size={32}/>
            
            case 'model':
                return <HardDriveDownload size={32} />
            
            case 'chat':
                return <CircleFadingPlus size={32}/>
        }
    }
    
    return (
        <div onClick={onClick} className={cn('flex  w-[560px] gap-6 flex-row cursor-pointer bg-gradient-to-r hover:from-neutral-dark-40 rounded-3xl p-4   items-center justify-between', active && 'from-neutral-dark-40')}>
            <Icon variant={'ghost'}>
                {getIcon(props.icon)}
            </Icon>
            <div className={"space-y-2"}>
                <h1 className={'text-lead font-bold text-white-100 '}>{props.title}</h1>
                <p className={'text-base text-white-100/80'}>{props.description}</p>
            </div>
        </div>
    )
}