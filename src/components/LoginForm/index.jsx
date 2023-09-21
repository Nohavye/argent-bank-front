import { LoginSection, Icon, InputWrapper, OptionWrapper, Button } from './styled'

export default function Page() {
    return (
        <LoginSection>
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
                <OptionWrapper>
                    <input type="checkbox" id="remember-me" />
                    <label for="remember-me">Remember me</label>
                </OptionWrapper>
                <Button to="/user">Sign In</Button>
            </form>
        </LoginSection>
    )
}
