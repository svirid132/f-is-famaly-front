import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faBars, faChevronRight} from '@fortawesome/free-solid-svg-icons'


function Episode() {
    return (
        <>
            <ControlVideo>
                <video src="./assets/video.mp4" controls></video>
                <HeaderBtn>
                    <a><FontAwesomeIcon icon={faChevronLeft} />Предыдущая серия</a>
                    <a><FontAwesomeIcon icon={faBars} />список серий</a>
                    <a>следующая серия<FontAwesomeIcon icon={faChevronRight} /></a>
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

            <Episodes>
                <header><h3>Все серии 5 сезона</h3></header>
                <EpisodesContent>

                </EpisodesContent>
            </Episodes>
        </>
    )
}

const ControlVideo = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 600px;
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
    & a {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: aqua;
        padding: 15px 0;
        width: 100%;
        text-align: center;
    }
    & i {
        margin: 0 10px;
    }
`

const Title = styled.div`
    border-bottom: 1px solid black;
    padding: 10px 50px;
`

const Description = styled.div`
    padding: 0 50px;
    & p {
        padding-top: 10px;
    }
`

const Date = styled.div`
    padding: 10px 0 10px 50px;
`

const Episodes = styled.div`
    padding: 0 50px;
    & header {
        margin: 0;
    }
`

const EpisodesContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 3%;
`

export default Episode
