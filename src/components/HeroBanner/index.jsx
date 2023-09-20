import { Container, Section, Subtitle, Text } from './styled'

export default function Component() {
    return (
        <Container>
            <Section>
                <h2 className="sr-only">Promoted Content</h2>
                <Subtitle>No fees.</Subtitle>
                <Subtitle>No minimum deposit.</Subtitle>
                <Subtitle>High interest rates.</Subtitle>
                <Text>Open a savings account with Argent Bank today!</Text>
            </Section>
        </Container>
    )
}
