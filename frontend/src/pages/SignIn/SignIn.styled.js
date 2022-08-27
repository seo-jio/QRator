import styled from 'styled-components';

export const Header = styled.div`
    height: 230px;
    width: 100%;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
`;

export const LoginBox = styled.div`
    height: 220px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`;

export const Input = styled.input`
    width: 80%;
    height: 40px;
    color: 16px;
    margin: 0 auto;
    border: none;
    &:focus {
        outline: none;
    }
    border-bottom: 1px solid #a8a6a7;
    font-size: 16px;
`;
