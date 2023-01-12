import styled from 'styled-components'
import NAJClothing from "../assets/NAJclothing.png"
import WeatherApp from "../assets/weatherapp.png"
import GoodBank from "../assets/goodbankwelcome.png"

const Container = styled.div`
    padding: 1.5rem;
    positon: relative;
    overflow: hidden;
`
const Title = styled.h2`
`
const ProjectWrapper = styled.div`
    position: relative;
    backface-visibility: hidden;
    display: block;
    background-size: cover;
    float: left;
    position: relative;
    overflow: hidden;
    background-position: center;
    margin: 10px;
    p {
        position: absolute;
        top: 83%;
        left: -100%;
        text-transform: capitalize;
        color: pink;
        font-size: 20px;
        z-index: 8;
        transition: all .6s ease;
    }
    &:hover {
        p {
            left: 8;
        }
        img {
            transform: translateY(-15px);
        }
    }
`
const ProjectTitle = styled.h3`
    margin: 1rem;
    text-align: center;
`
const Project = styled.img`
    width: 100%;
    height: auto;
    cursor: pointer;
    &:hover {
            content: "butt"
    }
`
const ProjectLinksWrapper = styled.p`
        position: absolute;
        top: 83%;
        left: -100%;
        text-transform: capitalize;
        color: pink;
        font-size: 20px;
        z-index: 8;
        transition: all .6s ease;
`

const Projects: React.FC = () => {


    return (
        <Container>
            <Title>Projects</Title>
            <ProjectTitle>NAJ Clothing</ProjectTitle>
            <ProjectWrapper>
                <Project src={NAJClothing} alt="NAJ Clothing Homepage" loading="lazy" />
                <p>Testing</p>
            </ProjectWrapper>
            <ProjectTitle>GoodBank</ProjectTitle>
            <ProjectWrapper>
                <Project src={GoodBank} alt="GoodBank Welcome Page" loading="lazy" />
            </ProjectWrapper>
            <ProjectTitle>Weather App</ProjectTitle>
            <ProjectWrapper>
                <Project src={WeatherApp} alt="Weathe in Tokyo" loading="lazy" />
            </ProjectWrapper>
        </Container>
    )
}

export default Projects
