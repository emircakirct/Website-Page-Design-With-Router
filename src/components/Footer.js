import Logo from '../assets/clarusway_logo.png'
import styled from 'styled-components'

const Footer = () => {
    return(
        <FooterStyle>
        <FooterP> Clarusway Web Design, Copyright &copy; 2022</FooterP>
        <FooterImg src={Logo} alt="clarusway_logo"/>
    </FooterStyle>
    )
}

export default Footer


const FooterStyle = styled.footer`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
color: whitesmoke;
background-color: rgb(75, 74, 74);
height: 9em;
font-size: 1em;
margin-top:6.6em;`

const FooterP = styled.p`
margin-top: 1em;
padding: 1em;
`

const FooterImg = styled.img`
height: 32px;
margin-bottom: 3.1em;
`