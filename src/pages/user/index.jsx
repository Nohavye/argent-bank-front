import { Container } from './styled'

// Components
import WelcomHeader from '../../components/WelcomHeader'
import AccountItem from '../../components/AccountItem'

import { selectors } from '../../store'

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
    const token = selectors.UserToken()

    console.log('Page User')
    console.log(token)

    return (
        <Container>
            <WelcomHeader />
            <h2 className="sr-only">Accounts</h2>
            {accounts.map((account, index) => (
                <AccountItem data={account} key={`account-${index}`} />
            ))}
        </Container>
    )
}
