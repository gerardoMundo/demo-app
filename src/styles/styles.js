import styled, {createGlobalStyle} from 'styled-components';


export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    font-family: 'Poppins', sans-serif;
}
`

export const H1 = styled.h1`
color: #F9F5EB
`

export const SideBar = styled.div`
background-color: #607EAA;
flex: 1;
min-height: 100vh
`

export const HomeContainter = styled.div`
background-color: #F9F5EB;
flex: 4;
`

export const NavbarContainer = styled.div`
display: flex;
color: #F9F5EB;
background-color: #1C3879;
padding: 20px;
font-weight: 500;
font-size: 16px;
align-items: center;
justify-content: flex-end
`
export const WidgetsContainer = styled.div`
display: flex;
justify-content: space-around;
`

export const TagUser = styled.div`
display: flex;
margin: 0 15px 0 15px
`

export const CardShadow = styled.div`
background-color: #EAE3D2;
padding: 20px;
height: 200px;
width: 250px;
margin-top: 50px;
border-radius: 10px;
box-shadow: 1px 12px 20px -5px rgba(41,39,39,0.7);
-webkit-box-shadow: 1px 12px 20px -5px rgba(41,39,39,0.7);
-moz-box-shadow: 1px 12px 20px -5px rgba(41,39,39,0.7);
`

export const Homediv = styled.div`
display: flex;
`

export const Logo = styled.div`
color: #EAE3D2;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
font-weight: bold;
text-decoration: none;
padding: 15px;
margin-top: 10px
`

export const Ul = styled.ul`
margin: 0;
padding: 0;
padding-top: 70px;
text-decoration: none;

`

export const ListItem = styled.li`
margin-left: 15px;
color: #EAE3D2;
padding: 15px;
display: flex;
align-items: center;
text-decoration: none;
cursor: pointer;
&:hover{
    background-color: #1C3879
}
`

export const Span = styled.span`
font-weight: 500;
font-size: 16px;
margin-left: 20px
`


