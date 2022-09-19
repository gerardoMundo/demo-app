import { ListItem, Logo, SideBar, Ul, Span } from '../styles/styles';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
import EditNotificationsOutlinedIcon from '@mui/icons-material/EditNotificationsOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import InputOutlinedIcon from '@mui/icons-material/InputOutlined';

const Sidebar = () => {
  return (
    <SideBar>
        <Logo>DOG PARK</Logo>
      
        <Ul>
            <ListItem>
                <SettingsOutlinedIcon />
                <Span>Configuración de ususario</Span>
            </ListItem>
            <ListItem>
                <PointOfSaleOutlinedIcon />
                <Span>Control de ventas</Span>
            </ListItem>
            <ListItem>
                <EditNotificationsOutlinedIcon />
                <Span>Control de notificaciones</Span>
            </ListItem>
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