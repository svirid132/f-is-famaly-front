import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import ContainerInfo from './container-info'
import PosterCard from './poster-card'
import withLink from './with-link'

const LinkPoster = withLink(PosterCard);
const localHost = "http://localhost:1337"

function Home({seasons}) {

    const posterElms = seasons.map((season, index) => {
        const attrs = season.attributes;
        const picAttrs = season.attributes.picture.data.attributes;
        const content = { 
            img: {
                src: localHost + picAttrs.url,
                alt: attrs.Title
            },
            numberSeason: attrs.Number,
            title: attrs.Title,
        }

        return (<LinkPosterStyle 
            key = {index}
            content = {content}
            href =  {`/season/${attrs.Slug}`}
        />)
    })

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
            <ContainerPoster size = {seasons.length}>
                {posterElms}
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
    justify-content: ${props => props.size > 3 ? "space-between" : "space-around"};
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
