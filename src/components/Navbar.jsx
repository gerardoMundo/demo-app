import Avatar from '@mui/material/Avatar';
import { NavbarContainer, TagUser } from '../styles/styles';

const Navbar = () => {
  return (
    <div>
      <NavbarContainer>
      <Avatar src="/broken-image.jpg" />
        <TagUser>
          <p>Administrador</p>
        </TagUser> 
      </NavbarContainer>
    </div>
  )
}

export default Navbar