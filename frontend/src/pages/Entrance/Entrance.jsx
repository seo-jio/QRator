import { Container } from '../../components/Container';
import { Camera, CameraBox } from './Entrance.styled';

const Entrance = () => {
    return (
        <Container>
            <CameraBox>
                <Camera type='file' accept='image/*' capture='camera' />
            </CameraBox>
        </Container>
    );
};

export default Entrance;
