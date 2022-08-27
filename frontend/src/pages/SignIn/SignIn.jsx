import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { Text } from '../../components/Text';
import { Header, Input, LoginBox } from './SignIn.styled';
const SignIn = () => {
    return (
        <Container>
            <Header>Sign In</Header>
            <Text>아이디와 비밀번호를 입력하세요.</Text>
            <LoginBox>
                <Input placeholder='아이디' />
                <Input placeholder='패스워드' />
                <Button>로그인</Button>
            </LoginBox>
        </Container>
    );
};

export default SignIn;
