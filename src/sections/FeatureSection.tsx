import {ChatPageImage, ExploreModelImage, ImageDescriptionImage, PredefinedChatbotImage} from "@/assets";

const FeatureSection = () => {
    return (
        <section className={'section  gap-10'}>
            <h1 className={'text-title  text-white-100 text-wrap max-w-[50%] text-center '}>
                Get most of <span className={"p-1 bg-neutral-dark-60 rounded-xl"}>ollama features</span> with a
                graphical user interface</h1>
            <div className={'flex flex-row items-center justify-between w-full'}>
                <div className={""}>
                    <h1 className={'text-title text-white-100 '}>Chat with your favorite model</h1>
                    <p className={'text-subtitle text-white-100/80'}>In the app, you can directly download all model
                        available in ollama website</p>
                </div>
                <img src={ChatPageImage} alt={'PredefinedChatbot'}
                     className={"rounded-3xl object-cover border border-neutral-dark-60 w-[720px]"}/>
            </div>
            <div className={'flex flex-row-reverse items-center justify-between w-full'}>
                <div className={""}>
                    <h1 className={'text-title text-white-100 '}>Describe image</h1>
                    <p className={'text-subtitle text-white-100/80'}>In the app, you can directly download all model
                        available in ollama website</p>
                </div>
                <img src={ImageDescriptionImage} alt={'PredefinedChatbot'}
                     className={"rounded-3xl object-cover border border-neutral-dark-60 w-[720px]"}/>
            </div>
            <div className={'flex flex-row items-center justify-between w-full'}>
                <div className={""}>
                    <h1 className={'text-title text-white-100 '}>Download all available model</h1>
                    <p className={'text-subtitle text-white-100/80'}>In the app, you can download all available ollama
                        model in their website</p>
                </div>
                <img src={ExploreModelImage} alt={'PredefinedChatbot'}
                     className={"rounded-3xl object-cover border border-neutral-dark-60 w-[720px]"}/>
            </div>
            <div className={'flex flex-row-reverse items-center justify-between w-full'}>
                <div className={""}>
                    <h1 className={'text-title text-white-100 '}>Chat with some predefined chatbots</h1>
                    <p className={'text-subtitle text-white-100/80'}>Use some predefined chatbot type included in the
                        app</p>
                </div>
                <img src={PredefinedChatbotImage} alt={'PredefinedChatbot'}
                     className={"rounded-3xl object-cover border border-neutral-dark-60 w-[720px]"}/>
            </div>

        </section>
    )
}
export default FeatureSection
