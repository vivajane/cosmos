
import logo from "../../../assets/growlogo.svg"
import { NavLink } from 'react-router-dom'

const SideBarHeader = () => {
  return (
    <div>
      <NavLink>
        <img className='font-normal text-3xl py-4 px-6 ' src={logo} alt="logo" />
      </NavLink>
      
      <div className='px-8'><hr/></div>
    </div>
  )
}

export default SideBarHeader
