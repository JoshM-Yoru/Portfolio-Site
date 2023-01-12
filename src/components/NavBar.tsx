import { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
        background: transparent;
        postion: sticky;
        position: -webkit-sticky;
        top: 0;
        display: flex;
        justify-content: center;
        height: fit-content;
        z-index: 2;
`
const MenuWrapper = styled.ul`
        display: flex;
        justify-content: space-evenly;
        list-style: none;
`
const MenuItem = styled.button`
        margin: 0.5em 1em;
        padding: 0.25em 0.5em;
        background: transparent;
        border: none;
        color: white;
        cursor: pointer;
        font-size: 1rem;
        &:hover {
            background-image: var(--accent-gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-size: 500%;
            background-position: 0%;
        }
        &:active {
            background-image: var(--accent-gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-size: 500%;
            background-position: 0%;
        }
`

const NavBar: React.FC = () => {

    // const [navbarOpen, setNavberOpen] = useState<boolean>(false);

    return (
        <Container>
            <MenuWrapper>
                <MenuItem>Home</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Projects</MenuItem>
                <MenuItem>Projects</MenuItem>
            </MenuWrapper>
        </Container>
    )
}

export default NavBar
