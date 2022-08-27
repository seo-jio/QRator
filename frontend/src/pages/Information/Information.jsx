import { useParams } from 'react-router-dom';
import { Img } from './Information.style';

const Information = () => {
    return (
        <div id='container'>
            <header>
                <Img />
                <button type='button' class='btm_image' id='img_btn'>
                    <img src='Vector.png' />
                </button>
            </header>

            <div id='main'>
                <div id='lion'>
                    <img src='image 1.png' />
                </div>
                <div id='text'>
                    <p>
                        <b>
                            "내 아이디어를 내 손으로 실현한다, HACK YOUR
                            <br />
                            LIFE!" 멋쟁이사자처럼 대학은 온라인 기반의 강의와
                            오프
                            <br />
                            라인 활동이 함께 이루어지는 코딩 교육 동아리입니
                            <br />
                            다.
                            <br />
                            이를 통해 컴퓨터를 모르는 학생들이 프로그래밍 교
                            <br />
                            육을 통해 원하는 IT서비스를 직접 런칭합니다.
                        </b>
                    </p>
                </div>
                <div id='logos'>
                    <img src='facebook.png' id='logo' />
                    <img src='logos_youtube-icon.png' id='logo' />
                    <img src='image 2.png' id='logo' />
                </div>
                <div id='tel'>
                    <p id='phone'>010-1234-5678</p>
                    <img src='Call.png' id='call' />
                </div>
                <footer>
                    <input
                        id='go_home'
                        type='button'
                        onclick='newPage()'
                        value='입장하기'
                    />

                    <div id='entrance'>
                        <button>입장하기</button>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Information;
