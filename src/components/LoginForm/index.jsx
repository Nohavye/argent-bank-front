import { LoginSection, Icon, InputWrapper, OptionWrapper, Button } from './styled'

// Hooks
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useMutation } from 'react-query'

// Api
import ApiClient from '../../apiClient'
import { apiQueries } from '../../constants/api'

export default function Component() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const { mutate: loginMutation, error } = useMutation(
        async (payload) => {
            return await ApiClient.processRequest({ apiQuery: apiQueries.token, body: payload })
        },
        {
            onSuccess: (data) => {
                sessionStorage.setItem('token', data)
                navigate('/user')
            },
        }
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        loginMutation({ email, password })
    }

    return (
        <LoginSection>
            <Icon className="fa fa-user-circle"></Icon>
            <h1>Sign In</h1>
            {error && <span>{error.toString().replace('Error: Error:', '')}</span>}
            <form>
                <InputWrapper>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" onChange={(e) => setEmail(e.target.value)} />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </InputWrapper>
                <OptionWrapper>
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </OptionWrapper>
                <Button onClick={handleSubmit}>Sign In</Button>
            </form>
        </LoginSection>
    )
}
