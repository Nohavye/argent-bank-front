import { Container } from './styled'

// Components
import WelcomHeader from '../../components/WelcomHeader'
import AccountItem from '../../components/AccountItem'

const accounts = [
    {
        title: 'Argent Bank Checking (x8349)',
        amount: '$2,082.79',
        description: 'Available Balance',
    },
    {
        title: 'Argent Bank Savings (x6712)',
        amount: '$10,928.42',
        description: 'Available Balance',
    },
    {
        title: 'Argent Bank Credit Card (x8349)',
        amount: '$184.30',
        description: 'Current Balance',
    },
]

export default function Page() {
    return (
        <Container>
            <WelcomHeader />
            <h2 class="sr-only">Accounts</h2>
            {accounts.map((account, index) => (
                <AccountItem data={account} key={`account-${index}`} />
            ))}
        </Container>
    )
}
