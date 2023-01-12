import styled from 'styled-components'

const Container = styled.div`
        background: transparent;
        postion: sticky;
        position: -webkit-sticky;
        top: 0;
        display: flex;
        justify-content: center;
        height: fit-content;
        font-size: 1.2em;
        z-index: 2;
`
const MenuWrapper = styled.ul`
        display: flex;
        justify-content: space-evenly;
        list-style: none;
`
const MenuItem = styled.li`
        margin: 0.5em 1em;
        padding: 0.25em 0.5em;
        cursor: pointer;
`

const NavBar: React.FC = () => {

    return (
        <Container>
            <MenuWrapper>
                <MenuItem>Home</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Contact</MenuItem>
            </MenuWrapper>
        </Container>
    )
}

export default NavBar
