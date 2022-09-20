import { ListItem, Logo, SideBar, Ul, Span } from '../styles/styles';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
import EditNotificationsOutlinedIcon from '@mui/icons-material/EditNotificationsOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import InputOutlinedIcon from '@mui/icons-material/InputOutlined';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <SideBar>
        
            <Link to={'/'}>
                <Logo>
                    DOG PARK
                </Logo>
            </Link>
      
        <Ul>
            <Link to={'/configuracion-usuario'}>
                <ListItem>
                    <SettingsOutlinedIcon />
                    <Span>Configuración de ususario</Span>
                </ListItem>
            </Link>
            <Link to={'/control-ventas'}>
                <ListItem>
                    <PointOfSaleOutlinedIcon />
                    <Span>Control de ventas</Span>
                </ListItem>
            </Link>
            <Link to={'/control-notificaciones'}>
                <ListItem>
                    <EditNotificationsOutlinedIcon />
                    <Span>Control de notificaciones</Span>
                </ListItem>
            </Link>
            <ListItem>
                <ManageAccountsOutlinedIcon />
                <Span>Gestión de auxiliares</Span>
            </ListItem>
            <ListItem>
                <CreditScoreOutlinedIcon />
                <Span>Gestión de suscripciones</Span>
            </ListItem>
            <ListItem>
                <DashboardOutlinedIcon />
                <Span>Productos y servicios</Span>
            </ListItem>
            <ListItem>
                <InputOutlinedIcon />
                <Span>Cerrar sesión</Span>
            </ListItem>
        </Ul>
    </SideBar>
  )
}

export default Sidebar;