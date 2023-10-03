import { Container } from './styled'

// Hooks
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useQuery } from 'react-query'

// Redux
import { useDispatch } from 'react-redux'
import { actions as userActions } from '../../features/user'

// Api
import ApiClient from '../../apiClient'
import { apiQueries } from '../../constants/api'

// Components
import WelcomHeader from '../../components/WelcomHeader'
import AccountItem from '../../components/AccountItem'

// Mocked data
import { accounts } from '../../constants/mockedData'

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
