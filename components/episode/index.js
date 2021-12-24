import { faBars, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ListLinkArticle from 'components/list-link-posters';
import Poster from 'components/poster';
import withLink from 'components/with-link';
import React from 'react'
import styled from 'styled-components'

function Episode({className}) {

    const elems = new Array(5).fill(null).map((nullElem,index) => {
        const elem = {};
        elem.content = {
            img: { src: "/expImg.webp", alt: "picture", info: "5 сезон спецвыпуск"},
            name: "Спецвыпуск",
            date: "2021-08-05",
        };
        elem.href = "/season";
        return elem;
    });

    return (
        <Body className={className}>

            <ControlVideo>
                <video src="./assets/video.mp4" controls></video>
                <HeaderBtn>
                    <LinkButtonStyle href = "/">
                        <Icon icon={faChevronLeft} />Предыдущая серия
                    </LinkButtonStyle>
                    <LinkButtonStyle href = "/">
                        <Icon icon={faBars}/>список серий
                    </LinkButtonStyle>
                    <LinkButtonStyle href = "/">
                        следующая серия<Icon icon={faChevronRight} />
                    </LinkButtonStyle>
                </HeaderBtn>
            </ControlVideo>

            <Title>
                <h2>Рик и Морти 5 сезон 1 серия</h2>
            </Title>

            <Description>
                <h3>Смертность</h3>
                <p>«Саммер встречает Бога» — специальный выпуск «Рика и Морти» в стиле анимэ от японского режиссера Такаси Сано.</p>
                <p>Новый парень Саммер – не человек, у Джерри, как всегда, большие проблемы, Морти сталкивается со Злом, а Рик здоров … и как всегда, в своем репертуаре. В итоге планета разрушена, на Землю больше не сможет никто вернуться, зато здесь есть Саммер и ее новый друг, вместе с которым она сможет построить новый мир – Мир Рика, как она собирается назвать его в честь своего деда.</p>
                <p>«Саммер встречает Бога» — специальный выпуск «Рика и Морти» в стиле анимэ от японского режиссера Такаси Сано.</p>
            </Description>

            <Date>
                <p>Дата выхода: 2021-06-28</p>
            </Date>

            <ListLinkArticle title = {"Все серии 5 сезона"} elems = {elems} />
        </Body>
    )
}

const Body = styled.div`
  background-color: white;
  padding: ${(props) => props.theme.mainPadding};
  padding-top: 0;
`;

const ControlVideo = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto; 
    & video {
        width: 100%;
        height: auto;
    }
`

const HeaderBtn = styled.div`
    display: flex;
    justify-content: space-between;
    column-gap: 1px;
`

const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: aqua;
    padding: 15px 0;
    width: 100%;
    text-align: center;
    @media screen and (min-width: 900px) {
        padding: 20px 0;
    }
`;

const LinkButton = withLink(Button);

const LinkButtonStyle = styled(LinkButton)`
  width: 100%;
`;

const Title = styled.div`
    border-bottom: 1px solid black;
`

const Description = styled.div`
    border-bottom: 1px solid black;
`

const Date = styled.div`
    padding-left: 10px;
    font-size: 18px;
    border-bottom: 1px solid black;
`

const Icon = styled(FontAwesomeIcon)`
    margin: 0 7px;
`

export default Episode
