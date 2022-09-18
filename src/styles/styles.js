import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
    margin: 0;
}
`

export const H1 = styled.h1`
color: #F9F5EB
`

export const Navbar = styled.div`
background-color: #1C3879;
flex: 6;
`

export const SideBar = styled.div`
background-color: #607EAA;
flex: 1;
`

export const Logo = styled.div`
color: #EAE3D2;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
font-weight: bold;
text-decoration: none
`

export const ContainerHome = styled.div`
display: flex;
`

export const Ul = styled.ul`
margin: 0;
padding: 0;
text-decoration: none
`

export const ListItem = styled.li`
color: #EAE3D2;
padding: 10px;
display: flex;
align-items: center
`
