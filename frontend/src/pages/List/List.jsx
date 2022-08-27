import { Container } from '../../components/Container';
import { ListTab } from '../../components/ListTab';
import { ListBox } from './List.styled';

const List = () => {
    return (
        <Container>
            <ListBox>
                <ListTab></ListTab>
                <ListTab></ListTab>
                <ListTab></ListTab>
                <ListTab></ListTab>
                <ListTab></ListTab>
                <ListTab></ListTab>
                <ListTab></ListTab>
            </ListBox>
        </Container>
    );
};

export default List;
