import './NavbarOption.css'

interface NavbarOptionProps {
  children: string
}

const NavbarOption: React.FC<NavbarOptionProps> = ({ children }) => {
  return <li>{children}</li>
}

export default NavbarOption
