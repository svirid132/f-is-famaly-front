import React from 'react'
import styled from 'styled-components'
import Header from './header'
import ListLinkArticle from 'components/list-link-posters'

const server = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

function Season({season, episodes, additionSeason}) {

    const elems = episodes.map((episode, index) => {
        const attrs = episode.attributes;
        const picAttrs = episode.attributes.picture.data.attributes;
        const elem = {};
        elem.content = {
            img: { src: server + picAttrs.url, alt: picAttrs.name, info: attrs.title},
            name: attrs.title,
            date: attrs.publishedAt,
        };
        elem.href = "/episode/" + attrs.Slug;
        return elem;
    })


    const text = additionSeason ? additionSeason.attributes.description: null;
    const urlVideo = additionSeason? additionSeason.attributes.urlVideo: null;
    const isAdditionSection = urlVideo ? true : false;

    return (
    <Body>
        <Header season={ season }/>
        <ListLinkArticle title={"Все серии 5 сезона"} elems = {elems}/>
        {isAdditionSection &&
            <ContainerVideo>
                <p>{text}</p>
                <LimitVideo>
                    <Video>
                        <iframe src={urlVideo}></iframe> 
                    </Video>
                </LimitVideo>
            </ContainerVideo>
        }
    </Body>
    )
}

const Body = styled.div`
  background-color: white;
  padding: ${props => props.theme.mainPadding};
  min-height: calc(100vh - ${props => props.theme.navigationHeight});
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
