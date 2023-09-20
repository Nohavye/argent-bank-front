import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Assets
import logo from '../../assets/argentBankLogo.png'

export const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;

    & a {
        font-weight: bold;
        color: #2c3e50;
    }

    & a.router-link-exact-active {
        color: #42b983;
    }
`
export const ItemLink = styled(Link)`
    margin-right: 0.5rem;

    &:hover {
        text-decoration: underline;
    }

    & i {
        margin-right: 0.5rem;
    }
`
export const LogoLink = styled(Link)`
    display: flex;
    align-items: center;
`
export const Logo = styled.img`
    content: url(${logo});
    max-width: 100%;
    width: 200px;
`
