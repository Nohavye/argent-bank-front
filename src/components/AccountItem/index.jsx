import {
    Container,
    ContentWrapper,
    Title,
    Amount,
    AmountDescription,
    ButtonWrapper,
    Button,
} from './styled'

/** Composant représentant un compte sur la page de l'utilisateur */
export default function Component({ data }) {
    return (
        <Container>
            <ContentWrapper>
                <Title>{data.title}</Title>
                <Amount>{data.amount}</Amount>
                <AmountDescription>{data.description}</AmountDescription>
            </ContentWrapper>
            <ButtonWrapper>
                <Button>View transactions</Button>
            </ButtonWrapper>
        </Container>
    )
}
