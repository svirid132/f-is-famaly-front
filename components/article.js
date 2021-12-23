import Image from 'next/image'
import React from 'react'

function Article({img, info}) {
    return (
    <Article>
        <Figure>
            <Img src={img.src} alt={img.alt} />
            <Figcaption>`${info.season} сезон`</Figcaption>
        </Figure>
        <Name>{info.name}</Name>
        <Date>{info.date}</Date>
    </Article>
    )
}

const Article = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 30%;
    padding: 10px 0;
`

const Figure = styled.figure`
    display: flex;
    position: relative;
    width: 100%;
    margin: 0;
    margin-bottom: 20px;
`

const Img = styled(Image)`
    width: 100%;
    height: auto;
`

const Figcaption = styled.figcaption`
    position: absolute;
    padding: 5px 0;
    text-align: center;
    bottom: 0%;
    background-color: aqua;
    width: 60%;
`

const Name = styled.h4`
    margin: 0;
`

const Date = styled.small`
    margin: 0;
    padding: 10px 0;
    color: gray;
`

export default Article
