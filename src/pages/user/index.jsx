import { Container } from './styled'

// React Query
import { useQuery } from 'react-query'

// Global State
import { useDispatch } from 'react-redux'
import { actions as userActions } from '../../features/user'

// Api
import ApiClient from '../../apiClient'
import { apiQueries } from '../../constants/api'

// Components
import WelcomHeader from '../../components/WelcomHeader'
import AccountItem from '../../components/AccountItem'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'

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
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) navigate('/login')
    }, [navigate, token])

    useQuery(
        'user',
        async () => {
            if (token) {
                return await ApiClient.processRequest({
                    apiQuery: apiQueries.getProfile,
                    headers: { Authorization: `Bearer ${token}` },
                })
            }
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
