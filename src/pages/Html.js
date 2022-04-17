import htmlLogo from '../assets/logo_html.png'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Html = () => {
    let navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/')
    }
    return(
        <Logo>
        <img src={htmlLogo} alt="logo-html"/>
        <h4>HTML5 Markup</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui totam ex ullam aperiam et necessitatibus eaque quisquam, quos mollitia officia iusto distinctio excepturi! Temporibus recusandae unde explicabo aperiam tenetur natus? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui totam ex ullam aperiam et necessitatibus eaque quisquam, quos mollitia officia iusto distinctio excepturi! Temporibus recusandae unde explicabo aperiam tenetur natus? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui totam ex ullam aperiam et necessitatibus eaque quisquam, quos mollitia officia iusto distinctio excepturi! Temporibus recusandae unde explicabo aperiam tenetur natus? </p>
        <Button onClick={handleNavigate}>GO BACK</Button>
        </Logo>
    )
}

export default Html


const Logo = styled.div`
text-align:center;
margin-top:35px;
height:28em`


const Button = styled.button`
background-color:purple;
color:white;
border:none;
border-radius:5px;
padding: 20px;
width:20em;
`