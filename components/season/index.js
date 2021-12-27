import React from 'react'
import styled from 'styled-components'
import Header from './header'
import ListLinkArticle from 'components/list-link-posters'

const localHost = "http://localhost:1337";

function Season({season, episodes}) {

    const elems = episodes.map((episode, index) => {
        const attrs = episode.attributes;
        const picAttrs = episode.attributes.picture.data.attributes;
        const elem = {};
        elem.content = {
            img: { src: localHost + picAttrs.url, alt: picAttrs.name, info: attrs.title},
            name: attrs.title,
            date: attrs.publishedAt,
        };
        elem.href = `${season[0].attributes.Slug}/` + "episode/" + attrs.Slug;
        return elem;
    })

    return (
    <Body>
        <Header season={ season }/>
        <ListLinkArticle title={"Все серии 5 сезона"} elems = {elems}/>
        <ContainerVideo>
            <p>Рик и Морти возвращаются в 5-й сезон в воскресенье, 20 июня, в 11 вечера в США, в России первые переводы будут в понедельник, Сыендук во вторник-среду.</p>
            <LimitVideo>
                <Video>
                    <iframe src="https://www.youtube.com/embed/sPAw95c_AOE"></iframe> 
                </Video>
            </LimitVideo>
        </ContainerVideo>
    </Body>
    )
}

const Body = styled.div`
  background-color: white;
  padding: ${props => props.theme.mainPadding};
`;

const ContainerVideo = styled.div`
    padding-bottom: 15px;
    border-bottom: 1px solid black;
`
const LimitVideo = styled.div`
    max-width: 600px;
    width: 100%;   
    margin: 0 auto;
`

const Video = styled.div`
    position: relative;
    width: 100%;
    margin: 0 auto;
    padding-top: 56.25%;
    overflow: hidden;
    & iframe {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
    }
`

export default Season
