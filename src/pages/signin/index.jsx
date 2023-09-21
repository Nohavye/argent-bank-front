import {
    Container,
    SigninSection,
    Icon,
    InputWrapper,
    RememberWrapper,
    SigninButton,
} from './styled'

export default function Page() {
    return (
        <Container>
            <SigninSection>
                <Icon className="fa fa-user-circle"></Icon>
                <h1>Sign In</h1>
                <form>
                    <InputWrapper>
                        <label for="username">Username</label>
                        <input type="text" id="username" />
                    </InputWrapper>
                    <InputWrapper>
                        <label for="password">Password</label>
                        <input type="password" id="password" />
                    </InputWrapper>
                    <RememberWrapper>
                        <input type="checkbox" id="remember-me" />
                        <label for="remember-me">Remember me</label>
                    </RememberWrapper>
                    <SigninButton to="/user">Sign In</SigninButton>
                </form>
            </SigninSection>
        </Container>
    )
}
