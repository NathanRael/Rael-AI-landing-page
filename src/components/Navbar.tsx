import {cn} from "@/utils/cn.ts";

const Navbar = () => {
    return (
       <nav className={'flex px-10 py-6 justify-between  w-full items-center'}>
           <h1 className={'text-subtitle font-bold text-white-100'}>
               RAEL AI
           </h1>
           <ul className={'flex text-white-100 flex-row gap-10 items-center  content-center'}>
               <NavItem name={'Features'} active={false}/>
               <NavItem name={'Installation'} active={false}/>
               <NavItem name={'Download'} active={false}/>
           </ul>
       </nav>
    )
}
export default Navbar


const NavItem = ({name, active} : {name : string, active : boolean}) => {
    return (
        <li className={cn('text-lead text-white-100/60 hover:text-white-100 cursor-pointer', active && 'text-white-100')}>{name}</li>
    )
}