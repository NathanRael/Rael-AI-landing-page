import {MY_GITHUB_PROFILE} from "@/contsants";


export default function  Footer() {
    return (
        <section className={" w-full section"}>
            <p className={'text-small w-full text-center  text-white-100 underline'}>
                <a href={MY_GITHUB_PROFILE} >© Natanaël  RALAIVOAVY</a>
            </p>
        </section>
    )
}