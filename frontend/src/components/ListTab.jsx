import styled from 'styled-components';

export const ListTab = styled.div`
    width: 60%;
    margin: 0 auto;
    border: 1px solid #a7a7a7;
    color: #0746ad;
    display: flex;
    align-items: center;
    padding: 0 15px;
    justify-content: space-between;
    margin-bottom: 10px;
    border-radius: 10px;
    &:hover {
        background-color: #0746ad;
        color: white;
        transition: 0.2s linear;
    }
    cursor: pointer;
    height: 40px;
`;
