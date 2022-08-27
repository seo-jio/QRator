import { Link, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Container } from '../../components/Container';
import { ListTab } from '../../components/ListTab';
import { idState } from '../../recoil/id/id';
import { Header } from '../SignIn/SignIn.styled';
import { GroupMemberCount, GroupName, ListBox } from './List.styled';

const data = [
    {
        id: 1,
        name: '멋쟁이 사자처럼',
        current: 10,
        max: 12,
    },
    {
        id: 2,
        name: 'HUFSDOVY',
        current: 11,
        max: 13,
    },
    {
        id: 1,
        name: '라온',
        current: 1,
        max: 5,
    },
    {
        id: 3,
        name: '만리행',
        current: 0,
        max: 6,
    },
    {
        id: 4,
        name: '컴퓨던트',
        current: 1,
        max: 8,
    },
];

const List = () => {
    const params = useParams();
    const id = useRecoilValue(idState);
    return (
        <Container>
            <Header>안녕하세요 {id.id}님!</Header>
            {params.name ? null : (
                <ListBox>
                    {data.map((item, index) => (
                        <Link key={index} to={`./${item.id}`}>
                            <ListTab>
                                <GroupName>{item.name}</GroupName>
                                <GroupMemberCount>
                                    {item.current} / {item.max}
                                </GroupMemberCount>
                            </ListTab>
                        </Link>
                    ))}
                </ListBox>
            )}
        </Container>
    );
};

export default List;
