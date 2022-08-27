import { useState } from 'react';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { Text } from '../../components/Text';
import { Header, Input, LoginBox } from './SignUp.styled';
import axios from 'axios';

const SignUp = () => {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const onChangeName = (e) => {
        setName(e.target.value);
    };
    const onChangeId = (e) => {
        setId(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:8080/api/join', {
                email: id,
                password: password,
                username: name,
            })
            .then((response) => console.log(response));
    };
    return (
        <Container>
            <Header>Sign Up</Header>
            <Text>계정을 만듭니다.</Text>
            <LoginBox onSubmit={onSubmit}>
                <Input
                    value={name}
                    onChange={onChangeName}
                    placeholder='이름'
                />
                <Input value={id} onChange={onChangeId} placeholder='아이디' />
                <Input
                    value={password}
                    onChange={onChangePassword}
                    placeholder='패스워드'
                />
                <Input placeholder='패스워드 확인' />
                <Button>회원가입</Button>
            </LoginBox>
        </Container>
    );
};

export default SignUp;
