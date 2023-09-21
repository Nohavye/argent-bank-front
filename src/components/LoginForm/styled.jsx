import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

export const LoginSection = styled.section`
    box-sizing: border-box;
    background-color: white;
    width: 300px;
    margin: 0 auto;
    margin-top: 3rem;
    padding: 2rem;
`
export const Icon = styled.i`
    font-size: 5rem;
`
export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 1rem;

    & label {
        font-weight: bold;
    }

    & input {
        padding: 5px;
        font-size: 1.2rem;
    }
`
export const OptionWrapper = styled.div`
    display: flex;
    align-items: center;

    & label {
        margin-left: 0.25rem;
    }
`
export const Button = styled(RouterLink)`
    display: block;
    width: 100%;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 1rem;
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;
    text-decoration: underline;
`
