import NavbarOption from '@atoms/NavbarOption/NavbarOption'
import './Navbar.css'

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <NavbarOption>Following</NavbarOption>
        <NavbarOption>For You</NavbarOption>
      </ul>
    </nav>
  )
}

export default Navbar
