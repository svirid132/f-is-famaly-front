import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import ContainerInfo from './container-info'
import PosterCard from './poster-card'
import withLink from './with-link'

const LinkPoster = withLink(PosterCard);

function Home({seasons}) {

    return (
        <Body>
            <Title>С Значит Семья смотреть онлайн</Title>
            <TitleSmall>F Is for Family</TitleSmall>
            <p>
                <strong>С Значит Семья </strong>
                - фильм-ностальгия по 1970-м, когда все поголовно носили с собой оружие и дымили не только дома, но и в общественных местах. В центре событий – семейка Мёрфи, относящаяся к достаточно бедной прослойке общества. У главы семейства, Фрэнка, масса странностей, от которых страдают его жена Сью и двое сыновей – Кевин и Билл. Их муж и отец из одной крайности бросается в противоположную, так что скучно с ним не бывает.
            </p>
            <Header>
                <h2>
                    <i className="fas fa-video"></i>
                    Все сезоны
                </h2>
                <span>5 сезонов</span>
            </Header>
            <ContainerPoster>
                {new Array(5).fill(null).map((elem, index) => {
                    return (<LinkPosterStyle key = {index} content={{
                        img: {
                            src: "/poster.jpg",
                            alt: "poster"
                            },
                        numberSeason: 1,
                        title: "5 сезон",
                        href: "/season"
                        }}
                    />)
                })}
            </ContainerPoster>
            <Informations    />
        </Body>
    )
}

const Body = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${props => props.theme.mainPadding};
    background-color: white;
    min-height: calc(100vh - ${props => props.theme.navigationHeight});
`

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

const Title = styled.h1`
    margin-bottom: 0; 
`

const TitleSmall = styled.small`
    line-height: 1;
`

const ContainerPoster = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 3%;
    row-gap: 30px;
`

const LinkPosterStyle = styled(LinkPoster)`
  width: 22%;
`;

const Informations = styled(ContainerInfo)`
  margin-top: 20px;
`;

export default Home
