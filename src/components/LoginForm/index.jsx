import { useState } from 'react'
import { LoginSection, Icon, InputWrapper, OptionWrapper, Button } from './styled'
import { useMutation } from 'react-query'
import { requests } from '../../constants/api'
import Api from '../../api'
import { useNavigate } from 'react-router'

export default function Component() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const { mutate: loginMutation, error } = useMutation(
        async (payload) => {
            return await Api.processRequest({ request: requests.token, body: payload })
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
