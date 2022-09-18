import { ListItem, Logo, SideBar, Ul } from '../styles/styles';
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
                <span>Configuración de ususario</span>
            </ListItem>
            <ListItem>
                <PointOfSaleOutlinedIcon />
                Control de ventas
            </ListItem>
            <li>
                <EditNotificationsOutlinedIcon />
                Control de notificaciones
            </li>
            <li>
                <ManageAccountsOutlinedIcon />
                Gestión de auxiliares
            </li>
            <li>
                <CreditScoreOutlinedIcon />
                Gestión de suscripciones
            </li>
            <li>
                <DashboardOutlinedIcon />
                Productos y servicios
            </li>
            <li>
                <InputOutlinedIcon />
                Cerrar sesión
            </li>
        </Ul>
    </SideBar>
  )
}

export default Sidebar;