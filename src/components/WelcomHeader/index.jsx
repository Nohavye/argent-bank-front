import { Container, Button } from './styled'
import { selectors } from '../../store'
import { useNavigate } from 'react-router'

export default function Component() {
    const user = selectors.User()
    const navigate = useNavigate()

    const handleButton = () => {
        navigate('/profile')
    }

    return (
        user && (
            <Container>
                <h1>
                    Welcome back
                    <br />
                    {`${user.firstName} ${user.lastName}!`}
                </h1>
                <Button onClick={handleButton}>Edit Name</Button>
            </Container>
        )
    )
}
