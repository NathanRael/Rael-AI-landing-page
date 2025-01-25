import {Button} from "rael-ui";
import {DownloadCloud} from "lucide-react";
import {downloadLink} from "../../env.ts";

const DownloadPage = () => {
    return (
        <section className={"section gap-20 !pt-20 !justify-start"}>
            <div className={'flex flex-col items-center justify-center'}>
                <h1 className={'text-white-100 text-center text-title font-bold'}>Be The First To Test It</h1>
                <p className={'text-white-100 text-center text-lead'}>Download the beta version of the app to test it and give feedbacks</p>
            </div>
           <div className={'flex flex-col text-center items-center justify-center gap-3'}>
               <Button disabled  onClick={() => window.open(downloadLink, '_blank')} size={'lg'} className={'rounded-xl'}>
                   <DownloadCloud/>
                   Download (0.1.0-beta)
               </Button>
               <p className={'text-base text-yellow-300'}>The app is currently unavailable for temporary maintenance. We are addressing concerns raised by our users in
                   recent feedback and working to enhance the app's performance.</p>
               {/*<p className={'text-base text-white-100/60'}>* This beta version is only available for windows user, the web version is coming soon</p>*/}
           </div>
        </section>
    )
}
export default DownloadPage
