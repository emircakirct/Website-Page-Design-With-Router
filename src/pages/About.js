import styled from 'styled-components'
const About = () => {
    return (
        <div>
            <Section2>
                <p>Subscribe To Our Newsletter</p>

                <form action="#">
                <Section2Input type="email" name="email" id="email" required placeholder="Enter Email..."/>
            <Section2Button>Subscribe</Section2Button>
                </form>
            </Section2>
            <Section3>
                <Section3Div1>
                    <Section3H4>About Us</Section3H4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas exercitationem esse repellendus
                        repellat quidem perferendis repudiandae culpa unde doloremque? Explicabo tenetur dolor, quisquam
                        adipisci veritatis sequi cum eos eaque doloremque velit itaque. Officia dicta magnam at quam alias,
                        iure a totam provident hic autem error ipsam sit mollitia modi asperiores expedita eos corrupti,
                        excepturi laudantium voluptas dignissimos eaque rem aut tempora? Ab voluptas nam deleniti.</p>
                    <DarkText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas exercitationem esse repellendus
                        repellat quidem perferendis repudiandae culpa unde doloremque? Explicabo tenetur dolor, quisquam
                        adipisci veritatis sequi cum eos eaque doloremque velit itaque. Officia dicta magnam at quam alias,
                        iure a totam provident hic autem error ipsam sit mollitia modi asperiores expedita eos corrupti,
                        excepturi laudantium voluptas dignissimos eaque rem aut tempora? Ab voluptas nam deleniti.</DarkText>
                </Section3Div1>
                <Section3Div2>
                    <Section3H4>What We Do</Section3H4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis ratione obcaecati vitae reprehenderit
                        nam cum quibusdam amet consequuntur non quis! Eaque soluta molestias nostrum minima, veniam hic. Et
                        rem quam laboriosam architecto animi totam id?</p>
                </Section3Div2>
            </Section3>
        </div>
    )
}

export default About


const Section2 = styled.section`
padding: 0em 2.7em;
height: 5em;
background-color:rgb(75, 74, 74);
display: flex;
justify-content: space-between;
align-items: center;
color: whitesmoke;
padding: 16px;
font-weight:bold;
`

const Section3 = styled.section`
display: flex;
justify-content: space-between;
height: 30em;
text-align:center;
`

const Section3H4 = styled.h4`
margin-bottom: 1em;
`

const Section3Div1 = styled.div`
margin: 2em;
padding: 1em;
`

const DarkText = styled.p`
background-color: rgb(75, 74, 74);
color: white;
padding: 1em;
margin-top: 0.5em;
`

const Section3Div2 = styled.div`
background-color: rgb(75, 74, 74);
color: white;
margin: 2em;
height: 12em;
padding: 1em;
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