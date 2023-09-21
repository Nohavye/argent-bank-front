import { Container, Icon, Title } from './styled'

export default function Component({ icon, title, children }) {
    return (
        <Container>
            <Icon src={icon} alt="Icon" />
            <Title>{title}</Title>
            <p>{children}</p>
        </Container>
    )
}
