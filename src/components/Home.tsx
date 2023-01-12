import styled from "styled-components"
import selfPortrait from "../assets/meb&w.jpg"

const Container = styled.div`
    padding: 1rem;
    height: fit-content;
`
const IntroWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const Intro = styled.p`
    font-size: 1.5rem;
    padding: 1rem 0;
`
const Name = styled.p`
    background-image: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 500%;
    background-position: 0%;
    font-size: 2.5rem;
    text-align: center;
`
const ImageWrapper = styled.div`
    height: 350px;
    width: 350px;
    margin: 1rem auto;
    border-radius: 50%;
    poistion: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
`
const PortfolioImage = styled.img`
    display: inline;
    margin: -10% auto;
    height: 550px;
    width: auto;
`

const Home: React.FC = () => {

    return (
        <Container>
            <IntroWrapper>
                <Intro>Hello! I am
                </Intro>
                <Name>Joshua Maciel</Name>
                <Intro style={{ textAlign: 'right' }}>
                    and I am a Full Stack <br /> Software Engineer.
                </Intro>
            </IntroWrapper>
            <ImageWrapper>
                <PortfolioImage src={selfPortrait} />
            </ImageWrapper>
        </Container>
    )
}

export default Home
