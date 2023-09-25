import { Container } from './styled'

// React Query
import { useQuery } from 'react-query'

// Global State
import { useDispatch } from 'react-redux'
import { actions as userActions } from '../../features/user'

// Api
import Api from '../../api'
import { requests } from '../../constants/api'

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
    const dispatch = useDispatch()
    const token = sessionStorage.getItem('token')

    useQuery(
        'user',
        async () => {
            return await Api.processRequest({
                request: requests.profile,
                headers: { Authorization: `Bearer ${token}` },
            })
        },
        {
            onSuccess: (data) => dispatch(userActions.set(data)),
        }
    )

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
