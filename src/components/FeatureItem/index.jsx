import { Container, Icon, Title } from './styled'

/** Composant représentant une caractéristique (évoquée sur la landing page) */
export default function Component({ icon, title, children }) {
    return (
        <Container>
            <Icon src={icon} alt="Icon" />
            <Title>{title}</Title>
            <p>{children}</p>
        </Container>
    )
}
