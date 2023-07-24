import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = ( {
    onToggle
} : any) => {
    return (
        <div className="flex p-5 bg-cyan-300 items-center">
            <button onClick={onToggle}><FontAwesomeIcon icon={faBars}/></button>
            <div className='spacer'/>
            <button><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
        </div>
    )
}

export default Navbar;