import styled from 'styled-components'
const Services = () => {
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
                    <Section3Div1H4>Services</Section3Div1H4>
                    <Section3Div1Div>
                        <h4>Website Design</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum adipisci ut molestias magnam veniam
                            nemo ipsa, itaque soluta. Cupiditate, voluptatem!</p>
                        <p>Pricing :$1,000-$3,000</p>
                    </Section3Div1Div>
                    <Section3Div1Div>
                        <h4>Website Maintenance</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident labore delectus rem debitis
                            assumenda modi rerum sequi hic accusamus? Ab!</p>
                        <p>Pricing: $250 per month</p>
                    </Section3Div1Div>
                    <Section3Div1Div>
                        <Section3Div1H4>Website Hosting</Section3Div1H4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo tempora optio architecto sint
                            incidunt hic quidem numquam! Quia, tempore perferendis.</p>
                        <p>Pricing: $25 per month</p>
                    </Section3Div1Div>
                </Section3Div1>


                <Section3Div2>

                    <Section3Form action="#">
                        <h4>Get A Quote</h4>

                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" placeholder="Name" required/>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="Email" required/>
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" cols="30" rows="2" placeholder="Message..."></textarea>
                                <button style={{background:"orange",color:"white",marginTop:"10px"}}type="send">Send</button>
                            </Section3Form>
                        </Section3Div2>
                    </Section3>
                </div>
                )
}

export default Services

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
height: 30em;
`

const Section3Div1 = styled.div`
padding: 1em;
`

const Section3Div1H4 = styled.h4`
padding: 0.5em;
`

const Section3Div1Div = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
background-color: #E6E6E6;
height: 9em;
padding: 1em;
border: 1px solid white;
font-size: 14px;
`
const Section3Div2 = styled.div`
display: flex;
flex-direction: column;
width: 30%;
`

const Section3Form = styled.form`
display: flex;
flex-direction: column;
justify-content: space-around;
padding: 1em;
margin: 1em;
background-color: #35424A;
color: white;
`
