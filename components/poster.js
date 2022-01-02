import React from 'react'
import styled from 'styled-components'
import Moment from "react-moment"

function Poster({content}) {
    return (
        <div>
            <Figure>
                    <Img src={content.img.src} alt={content.img.alt} />
                    <Figcaption>{content.img.info}</Figcaption>
                </Figure>
                <Info>
                    <p>{content.name}</p>
                    <Date>
                        <Moment format="DD/MM/YYYY">
                            {content.date}
                        </Moment>
                    </Date>
                </Info>
        </div>
    )
}

const Figure = styled.figure`
    display: flex;
    width: 100%;
    height: auto;
    position: relative;
    box-shadow: 0 1px 8px rgba(0,0,0,.7),0 0 0 1px rgba(0,0,0,.4) inset;
    margin: 0;
    &:hover {
        filter: blur(1px) brightness(.5);
        background: rgba(0,0,0,.4) !important;
    }
`

const Img = styled.img`
    width: 100%;
    height: auto;
    border-radius: 3px;
`

const Figcaption = styled.figcaption`
    display: inline-block;
    position: absolute;
    bottom: 0;
    background-color: #f26a2c;
    padding: 0 10px;
    color: white;
    & p {
        margin: 5px 0;
    }
`

const Info = styled.div`
    & p {
        margin: 5px 0 1px;
        line-height: 1;    
    }
    & small {
        color: gray;
    }
`

const Date = styled.small`
    color: gray;
`

export default Poster
