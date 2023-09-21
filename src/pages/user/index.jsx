import { Container } from './styled'

// Components
import WelcomHeader from '../../components/WelcomHeader'
import AccountItem from '../../components/AccountItem'

export default function Page() {
    return (
        <Container>
            <WelcomHeader />
            <h2 class="sr-only">Accounts</h2>
            <AccountItem />
            <AccountItem />
            <AccountItem />
        </Container>
    )
}
