import brushLogo from '../assets/logo_brush.png'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'


const Brush = () => {
    let navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/')
    }
    return(
        <Logo>
        <img src={brushLogo} alt="logo-brush"/>
        <h4>Graphic Design</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui totam ex ullam aperiam et necessitatibus eaque quisquam, quos mollitia officia iusto distinctio excepturi! Temporibus recusandae unde explicabo aperiam tenetur natus? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui totam ex ullam aperiam et necessitatibus eaque quisquam, quos mollitia officia iusto distinctio excepturi! Temporibus recusandae unde explicabo aperiam tenetur natus? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui totam ex ullam aperiam et necessitatibus eaque quisquam, quos mollitia officia iusto distinctio excepturi! Temporibus recusandae unde explicabo aperiam tenetur natus?</p>
        <Button onClick={handleNavigate}>GO BACK</Button>
        </Logo>
    )
}

export default Brush

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