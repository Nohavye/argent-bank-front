import { Container, Icon, Title } from './styled'
import icon from '../../assets/icon-chat.png'

export default function Component({ icon, title, children }) {
    return (
        <Container>
            <Icon src={icon} alt="Icon" />
            <Title>{title}</Title>
            <p>{children}</p>
        </Container>
    )
}
