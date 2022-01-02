import { faBars, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ListLinkArticle from 'components/list-link-posters';
import withLink from 'HOC/with-link';
import React, {useRef} from 'react'
import styled from 'styled-components'
import Moment from "react-moment"

const server = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

function Episode({season, episode, className}) {

    const episodes = season.attributes.epizodes.data;

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
    });

    const currentSlug = episode.attributes.Slug;
    const [lastLinkEpisode, nextLinkEpisode] = episodes.reduce((accam, episode, index) => {
        const slug = episode.attributes.Slug;
        const isPreviousEp = index > 0;
        const isNextEp = episodes[index + 1] ? true: false;
        const isMatch = slug === currentSlug;
        if (isPreviousEp && isMatch) {
            accam[0] = "/episode/" + episodes[index - 1].attributes.Slug;
        }
        if (isNextEp && isMatch) {
            accam[1] = "/episode/" + episodes[index + 1].attributes.Slug;
        }
        return accam;
    }, [null, null]);  

    const urlVideo = episode.attributes.video.data[0].attributes.url;
    const scrollEl = useRef(null);

    const description = episode.attributes.description.split("\n").map((words, index) => {
        return <p key = {index}>{words}</p>
    })

    return (
        <Body className={className}>

            <ControlVideo>
                <video src={server + urlVideo} controls></video>
                <HeaderBtn>
                    {lastLinkEpisode && <LinkButtonStyle href = {lastLinkEpisode}>
                        <Icon icon={faChevronLeft} />Предыдущая серия
                    </LinkButtonStyle> }
                    <Button onClick = {() => scrollEl.current.scrollIntoView({behavior: 'smooth'})}>
                        <Icon icon={faBars}/>список серий
                    </Button>
                    {nextLinkEpisode && <LinkButtonStyle href = {nextLinkEpisode}>
                        следующая серия<Icon icon={faChevronRight} />
                    </LinkButtonStyle> }
                </HeaderBtn>
            </ControlVideo>

            <Title>
                <h2>{`С значит семья сезон ${season.attributes.Number} серия ${episode.attributes.number}`}</h2>
            </Title>

            <Description>
                <h3>{episode.attributes.title}</h3>
                <p>{description}</p>
            </Description>

            <Date>
                    <p>
                        {"Дата выхода: "} 
                        <Moment format="DD/MM/YYYY">{episode.attributes.publishedAt}</Moment>
                    </p>
            </Date>

            <ListLinkArticle ref = {scrollEl} title = {"Все серии 5 сезона"} elems = {elems} />
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
    background-color: #f26a2c;
    padding: 15px 0;
    width: 100%;
    text-align: center;
    cursor: pointer;
    @media screen and (min-width: 900px) {
        padding: 20px 0;
    }
`;

const LinkButton = withLink(Button);

const LinkButtonStyle = styled(LinkButton)`
    width: 100%;
`

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
