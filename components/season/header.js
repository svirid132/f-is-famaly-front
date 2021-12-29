import React from 'react'
import styled from 'styled-components'

const server = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

function Header({season}) {

    const attrs = season[0].attributes;
    const picAttrs = season[0].attributes.picture.data.attributes;

    return (
        <Body>
            <div>
                <HeaderImg src={server + picAttrs.url} alt={attrs.Title} />
            </div>
            <Info>
                <Name>
                    <h2>{`С значит Семья ${attrs.Number} сезон смотреть онлайн`}</h2>
                    <small>{`${attrs.publishedAt}`}</small>
                </Name>
                <Autors>
                    <p><strong>Авторы:</strong> {`${attrs.directors}`}</p>
                    <p><strong>Режисеры:</strong> {`${attrs.directors}`}</p>
                    <p><strong>Перевод на русский:</strong> Netflix</p>
                </Autors>
            </Info>
        </Body>
    )
}

const Body = styled.header`
    display: flex;
    padding: 20px 10px;
    border-bottom: 1px solid black;
`

const HeaderImg = styled.img`
    width: 140px;
    height: 210px;
`
const Info = styled.div`
    margin: 0 20px;
`

const Name = styled.div`
    border-bottom: 1px solid black;
    padding-bottom: 15px;
    & h2 {
        line-height: 1;
        margin: 0; 
    }
`

const Autors = styled.div`
    & p {
        margin: 10px 0;
    }
    & span {
        color: blue;
    }
`

export default Header
