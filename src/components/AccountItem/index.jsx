import {
    Container,
    ContentWrapper,
    Title,
    Amount,
    AmountDescription,
    ButtonWrapper,
    Button,
} from './styled'

export default function Component() {
    return (
        <Container>
            <ContentWrapper>
                <Title>Argent Bank Checking (x8349)</Title>
                <Amount>$2,082.79</Amount>
                <AmountDescription>Available Balance</AmountDescription>
            </ContentWrapper>
            <ButtonWrapper>
                <Button>View transactions</Button>
            </ButtonWrapper>
        </Container>
    )
}
