import { useEffect, useState } from 'react'
import { LoginSection, Icon, InputWrapper, Button } from './styled'
import { useMutation } from 'react-query'
import { requests } from '../../constants/api'
import ApiClient from '../../api'
import { useNavigate } from 'react-router'
import { selectors } from '../../store'

export default function Component() {
    const [firstName, setFirstName] = useState(selectors.User()?.firstName)
    const [lastName, setLastName] = useState(selectors.User()?.lastName)
    const token = sessionStorage.getItem('token')
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) navigate('/login')
    }, [navigate, token])

    const { mutate: updateProfile, error } = useMutation(
        async (payload) => {
            return await ApiClient.processRequest({
                request: requests.updateProfile,
                headers: { Authorization: `Bearer ${token}` },
                body: payload,
            })
        },
        {
            onSuccess: () => {
                navigate('/user')
            },
        }
    )

    const handleBack = (e) => {
        e.preventDefault()
        navigate('/user')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateProfile({ firstName, lastName })
    }

    return (
        <LoginSection>
            <Icon className="fa fa-user-circle"></Icon>
            <h1>Profile</h1>
            {error && <span>{error.toString().replace('Error: Error:', '')}</span>}
            <form>
                <InputWrapper>
                    <label htmlFor="firstname">First name:</label>
                    <input
                        type="text"
                        id="firstname"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="lastname">Last name:</label>
                    <input
                        type="text"
                        id="lastname"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </InputWrapper>
                <Button onClick={handleSubmit}>Modify</Button>
                <Button onClick={handleBack}>Back</Button>
            </form>
        </LoginSection>
    )
}
