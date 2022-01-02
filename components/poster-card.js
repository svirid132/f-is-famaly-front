import React from 'react'
import styled from 'styled-components'

function PosterCard({content, className}) {
    return (
        <Article className = {className}>
            <Poster>
                <Img src={content.img.src} alt={content.img.alt} />
                <ContainerSeason>
                    <SeasonSmall>сезон</SeasonSmall>
                    <SeasonH3>{content.numberSeason}</SeasonH3>
                    <SeasonP>Смотреть онлайн</SeasonP>
                </ContainerSeason>
            </Poster>
            <Info>
                <h3>{content.title}</h3>
            </Info>
        </Article>
    )
}

const Article = styled.article`
    display: flex;
    flex-direction: column;
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

const Img = styled.img`
    width: 100%;
    height: 100%;
    margin: 0;
`

const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f26a2c;
    color: black;
    max-height: 30px;
    border-radius: 0 0 3px 3px;
    border: 1px solid black;
`

export default PosterCard
