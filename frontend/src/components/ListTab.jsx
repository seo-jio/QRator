import styled from 'styled-components';

export const ListTab = styled.div`
    width: 80%;
    margin: 0 auto;
    border: 1px solid #f0f0f0;
    border-bottom: none;
    &:last-child {
        border-bottom: 1px solid #f0f0f0;
    }
    &:hover {
        background: #0746ad;
        transition: 0.2s linear;
    }
    cursor: pointer;
    height: 40px;
`;
