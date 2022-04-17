import {Link } from "react-router-dom"
import styled from 'styled-components'

const Navbar = () => {
    return (
        <NavbarStyle>
            <Header>
                <h2><Clarusway id="clarusway">Clarusway</Clarusway>Web Design</h2>
                <nav>
                    <HeaderUl>
                        <HeaderLi>
                            <Link style={{color:"white",textDecoration:"none"}}to="/">Home</Link>
                        </HeaderLi>
                        <HeaderLi>
                            <Link  style= {{color:"white",textDecoration:"none"}} to="/about">About</Link>
                        </HeaderLi>
                        <HeaderLi>
                            <Link style= {{color:"white",textDecoration:"none"}} to="/services">Services</Link>
                        </HeaderLi>
                    </HeaderUl>
                </nav>
            </Header>
        </NavbarStyle>
    )
}

export default Navbar


const NavbarStyle = styled.div`
margin:0;
`
const Header = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0.4em;
height: 5em;
background-color: rgb(75, 74, 74);
color: whitesmoke;
border-bottom: 4px solid rgb(156, 55, 156);
`


const HeaderUl = styled.ul`
display:flex;
list-style: none;
font-size: large;
`

const HeaderLi = styled.li`
padding:5px;
margin-left: 7px;
`

const Clarusway = styled.span`
color: rgb(156, 55, 156);

`


