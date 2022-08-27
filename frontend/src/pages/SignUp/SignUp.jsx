import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { Text } from '../../components/Text';
import { Header, Input, LoginBox } from './SignUp.styled';

const SignUp = () => {
    return (
        <Container>
            <Header>Sign Up</Header>
            <Text>계정을 만듭니다.</Text>
            <LoginBox>
                <Input placeholder='이름' />
                <Input placeholder='아이디' />
                <Input placeholder='패스워드' />
                <Input placeholder='패스워드 확인' />
                <Button>회원가입</Button>
            </LoginBox>
        </Container>
    );
};

export default SignUp;
