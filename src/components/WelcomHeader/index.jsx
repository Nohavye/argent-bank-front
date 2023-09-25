import { Container, Button } from './styled'
import { selectors } from '../../store'

export default function Component() {
    const user = selectors.User()

    return (
        user && (
            <Container>
                <h1>
                    Welcome back
                    <br />
                    {`${user.firstName} ${user.lastName}!`}
                </h1>
                <Button>Edit Name</Button>
            </Container>
        )
    )
}
