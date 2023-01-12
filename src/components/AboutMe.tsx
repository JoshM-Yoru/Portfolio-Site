import styled from "styled-components";

const Container = styled.div`
    padding: 1.5rem;
`;
const TitleWrapper = styled.div`
    /* border-bottom: 1px solid white; */
    /* padding-bottom: 0.5em; */
`
const Title = styled.h2`
    border-bottom: 1px solid var(--background-accent);
`
const About = styled.p`
    margin-block: 2rem;
`;
const FactsWrapper = styled.ul`
    list-style: circle;
    padding-left: 1rem;
`
const Facts = styled.li`
`

const AboutMe: React.FC = () => {
    return (
        <Container>
            <TitleWrapper>
                <Title>About Me</Title>
            </TitleWrapper>
            <About>
                I am a fun-loving, hard-working new father who enjoys
                programming or playing chess in my free time. I also enjoy
                doing photography as a hobby; being able to create beautiful
                images using proper lighting is a wonderful feeling, similar
                to finally getting that troublesome piece of code to finally
                work after hours of googling and trial and error. I have a
                background in mathematics, as I enjoy advanced math, and I
                had previously worked as an Emergency Medical Dispatcher. I
                have always had an interest in programming, and I taught
                myself Ruby, Python, JavaScript, and a little bit of Rust
                before joining Revature. I am now an accomplished full-stack
                software engineer using React, Java, and PostgreSQL as my
                main focus, but I pick up new languages and technologies
                quickly. I have written code using different programming
                paradigms, such as object-oriented code using Java and
                functional code with React and JavaScript.
            </About>
            <About>
                In a work environment, I have always been someone who is
                dependable and works well under pressure. I have had
                opportunities to be a part of a great group of coworkers as
                well as a team leader. I am also typically someone who is
                easy to talk to about anything, work-related or otherwise,
                and I enjoy helping others when given the opportunity or
                when I know a lot about the subject. I am always willing to
                help others to the best of my abilities.
            </About>
            <About style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>Interesting Facts About Me:</About>
            <FactsWrapper>
                <Facts>I enjoy learning new things and always enjoy opportunities to do so.</Facts>
                <Facts>I have traveled to many states and rock-climbed in most of them.</Facts>
                <Facts>I use Fedora Linux as my main OS for development.</Facts>
                <Facts>I use Neovim as my preferred text editor and IDE.</Facts>
            </FactsWrapper>
        </Container>
    );
};

export default AboutMe;
