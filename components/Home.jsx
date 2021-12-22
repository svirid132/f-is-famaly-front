import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import poster from "../assets/poster.jpg"

function Home() {
    return (
        <Body>
            <Title>Рик и Морти смотреть онлайн</Title>
            <TitleSmall className="boyd__title-small">Rick and Morty</TitleSmall>
            <p>
                <strong>Рик и Морти</strong>
                - американский анимационный телесериал, созданный Дэном Хармоном и Джастином Ройландом, премьера которого состоялась 2 декабря 2013 года в программном блоке Cartoon Network [adult swim].
            </p>
            <p>
                Первый сезон шоу состоит из 11 двадцати двух минутных эпизодов. После выхода в эфир первых шести эпизодов, создатели мултфильма продлил шоу на второй сезон, состоящий из 10 двадцати двух минутных эпизодов. Далее шоу было продлено на третий сезон, состоящий из 10 двадцатидвухминутных эпизодов, которые транслировались летом 2017 года.
            </p>
            <Header>
                <h2>
                    <i className="fas fa-video"></i>
                    Все сезоны
                </h2>
                <span>5 сезонов</span>
            </Header>
            <ContainerPoster>
                <Article>
                    <Poster>
                        <Img src={poster} alt="poster" />
                        <ContainerSeason>
                            <SeasonSmall>сезон</SeasonSmall>
                            <SeasonH3>5</SeasonH3>
                            <SeasonP>Смотреть онлайн</SeasonP>
                        </ContainerSeason>
                    </Poster>
                    <Info>
                        <h3>5 сезон</h3>
                    </Info>
                </Article>
                <Article>
                    <Poster>
                        <Img src={poster} alt="poster" />
                    </Poster>
                    <Info>
                        <h3>5 сезон</h3>
                    </Info>
                </Article>
                <Article>
                    <Poster>
                        <Img src={poster} alt="poster" />
                    </Poster>
                    <Info>
                        <h3>5 сезон</h3>
                    </Info>
                </Article>
                <Article>
                    <Poster>
                        <Img src={poster} alt="poster" />
                    </Poster>
                    <Info>
                        <h3>5 сезон</h3>
                    </Info>
                </Article>
                <Article>
                    <Poster>
                        <Img src={poster} alt="poster" />
                    </Poster>
                    <Info>
                        <h3>5 сезон</h3>
                    </Info>
                </Article>
            </ContainerPoster>
            <div className="info-serial">
                <br />
                <h2>Сэжет мультсериала Рик и Морти</h2>
                <p>После пропажи почти 20 лет Рик Санчес внезапно появляется на пороге своей дочери Бет, желая переехать к ней и ее семье. Бет приветствует его с распростертыми объятиями, но ее ничем не примечательный муж Джерри не слишком взволнован слезным воссоединением, поскольку приезд Рика служит для того, чтобы немного встряхнуть все вокруг дома. Рик превращает гараж в свою личную лабораторию и начинает работать над всеми видами опасных научно-фантастических гаджетов и приспособлений. Это было бы не так плохо, если бы не тот факт, что Рик продолжает вовлекать своих внуков Морти и Саммер в свои безумные приключения</p>
            </div>
        </Body>
    )
}

const Body = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 20px;

    @media screen and (min-width: 900px) {
        max-width: 900px;
        margin: 0 auto;
        background-color: white;
    }
`

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

const Title = styled.h1`
    margin: 0;
    margin-top: 10px;
    line-height: 0.9;
`

const TitleSmall = styled.small`
    line-height: 0;
`

{/* .fas.fa-video {
    color: aqua
} */}

const ContainerPoster = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 3%;
    row-gap: 30px;
`

const Article = styled.article`
    display: flex;
    flex-direction: column;
    width: 22%;
`

const Poster = styled.div`
    display: flex;
    position: relative;
`

const ContainerSeason = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    width: 100%;
    height: 100%;
    color: white;

    & * {
        font-size: 15px;
        opacity: 1;
    }

`

const SeasonSmall = styled.small`
    line-height: 1;
`

const SeasonH3 = styled.h3`
    line-height: 0.8;
    font-size: 50px;
    margin: 0;
`

const SeasonP = styled.p`
    color: yellow;
    font-size: 20px;
    width: 100%;
    text-align: center;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Img = styled(Image)`
    width: 100%;
    height: 100%;
    margin: 0;
`

const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: aqua;
    max-height: 30px;
    border-radius: 0 0 3px 3px;
    border: 1px solid black;
`

export default Home
