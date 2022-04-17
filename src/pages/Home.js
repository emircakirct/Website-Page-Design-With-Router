import htmlLogo from '../assets/logo_html.png'
import cssLogo from '../assets/logo_css.png'
import brushLogo from '../assets/logo_brush.png'
import Card from '../components/Card'
import styled from 'styled-components'
import showCase from '../assets/showcase.jpg'
import {Link} from 'react-router-dom'

const Home = () => {
    // const cardDetail = [
    //     { id: "1", title: "HTML5 Markup", imgSrc: {htmlLogo}, paragraph: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium maxime eveniet, quaerat quisquam laboriosam neque blanditiis? Provident, ullam?", detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis rem ipsam recusandae. Delectus, quibusdam sint laborum animi eaque maxime deserunt tempore consequuntur id sit possimus quas totam pariatur! Placeat praesentium culpa excepturi voluptas, consequatur quibusdam adipisci aperiam magni aut exercitationem ad vel pariatur doloribus, voluptatibus temporibus quis ea debitis repellendus!"},
    //     { id: "2", title: "CSS3 Styling", imgSrc: {cssLogo}, paragraph: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium maxime eveniet, quaerat quisquam laboriosam neque blanditiis? Provident, ullam?",detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis rem ipsam recusandae. Delectus, quibusdam sint laborum animi eaque maxime deserunt tempore consequuntur id sit possimus quas totam pariatur! Placeat praesentium culpa excepturi voluptas, consequatur quibusdam adipisci aperiam magni aut exercitationem ad vel pariatur doloribus, voluptatibus temporibus quis ea debitis repellendus!" },
    //     { id: "3", title: "Graphic Design", imgSrc: {brushLogo}, paragraph: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium maxime eveniet, quaerat quisquam laboriosam neque blanditiis? Provident, ullam?", detail: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis rem ipsam recusandae. Delectus, quibusdam sint laborum animi eaque maxime deserunt tempore consequuntur id sit possimus quas totam pariatur! Placeat praesentium culpa excepturi voluptas, consequatur quibusdam adipisci aperiam magni aut exercitationem ad vel pariatur doloribus, voluptatibus temporibus quis ea debitis repellendus!" }
    // ];
    return(
        <div>
        <Section1>
        <Section1H1>Professional Web Design</Section1H1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum expedita odio reprehenderit quia! Harum tempora voluptates aut? Blanditiis eligendi sunt enim dolorem aut? Perspiciatis, dolore!</p>
    </Section1>


    <Section2>
        <p>Subscribe To Our Newsletter</p>
        
        <form action="#" method="get">
            <Section2Input type="email" name="email" id="email" required placeholder="Enter Email..."/>
            <Section2Button>Subscribe</Section2Button>
        </form>
    </Section2>
    <Section3>
        <Logos>
            <Link to="/html">
                <img style={{height:"110px"}}src={htmlLogo} alt="logo_html" />
            </Link>
            <h4>HTML5 Markup</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui totam ex ullam aperiam et necessitatibus eaque quisquam, quos mollitia officia iusto distinctio excepturi! Temporibus recusandae unde explicabo aperiam tenetur natus?</p>
        </Logos>

        <Logos>
            <Link to="/css">
                <img style={{height:"110px"}}src={cssLogo} alt="logo_css"/>
            </Link>
            <h4>CSS3 Styling</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui totam ex ullam aperiam et necessitatibus eaque quisquam, quos mollitia officia iusto distinctio excepturi! Temporibus recusandae unde explicabo aperiam tenetur natus?</p>
        </Logos>

        <Logos>
            <Link to="/brush">
                <img style={{height:"110px"}}src={brushLogo} alt="logo_brush"/>
            </Link>
            <h4>Graphic Design</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui totam ex ullam aperiam et necessitatibus eaque quisquam, quos mollitia officia iusto distinctio excepturi! Temporibus recusandae unde explicabo aperiam tenetur natus?</p>
        </Logos>
    </Section3>
    </div>
    )
}

export default Home


const Section1 = styled.section`
background-image: url(${showCase});
background-size:cover;
background-repeat: no-repeat;
background-position: center;
height: 20em;
text-align: center;
color:white;
display:flex;
flex-direction: column;
justify-content: center;
`

const Section1H1 = styled.h1`
font-size: 36px;
padding: 30px;
`

const Section2 = styled.section`
background-color:rgb(75, 74, 74);
display: flex;
justify-content: space-between;
align-items: center;
color: whitesmoke;
height:4rem;
padding: 16px;
font-weight:bold;
`

const Section2Input = styled.input`
height: 1em;
padding: 1em;
`

const Section2Button = styled.button`
height: 2.3em;
padding: 0.1em;
color: white;
background-color: orange;
border: 5px solid orange;
`

const Section3 = styled.section`
display: flex;
justify-content: space-between;
align-items: center;
color: black;
height: 15em;
`

const Logos = styled.nav`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 5em;
padding: 1em;`