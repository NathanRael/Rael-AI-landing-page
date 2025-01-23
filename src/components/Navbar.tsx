import {cn} from "@/utils/cn.ts";
import {useNavigate} from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    return (
       <nav className={'flex px-10 max-md:px-2 py-6 justify-between  w-full items-center'}>
           <h1 onClick={() => navigate('/')} className={'text-subtitle cursor-pointer font-bold text-white-100'}>
               RAEL AI
           </h1>
           <ul className={'flex text-white-100 flex-row gap-10 max-md:gap-4 items-center  content-center'}>
               <NavItem  name={'Features'} active={false}/>
               <NavItem  name={'Installation'} active={false}/>
               <NavItem name={'Download'} active={false}/>
           </ul>
       </nav>
    )
}
export default Navbar


const NavItem = ({name, active} : {name : string, active : boolean}) => {
    return (
        <a href={`#${name.toLowerCase()}`}>
            <li className={cn('text-lead text-white-100/60 hover:text-white-100 cursor-pointer', active && 'text-white-100')}>{name}</li>
        </a>
    )
}