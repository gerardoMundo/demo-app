import Avatar from '@mui/material/Avatar';
import { NavbarContainer, TagUser } from '../styles/styles';

const Navbar = () => {
  return (
    <div>
      <NavbarContainer>
      <Avatar src="/broken-image.jpg" />
        <TagUser>
          <p>Usuario_Administrador</p>
        </TagUser> 
      </NavbarContainer>
    </div>
  )
}

export default Navbar