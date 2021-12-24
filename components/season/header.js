import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Body>
            <div>
                <HeaderImg src={"/poster.jpg"} alt="poster" />
            </div>
            <Info>
                <Name>
                    <h2>Рик и Морти 5 сезон смотреть онлайн</h2>
                    <small>2021-06-20</small>
                </Name>
                <Autors>
                    <p><span>Авторы:</span> Ройланд Джастин, Хармон Дэн</p>
                    <p><span>Режисеры:</span> Джефф Майерс, Брайан Ньютон, Джон Райс, Джастин Ройланд, Стивен Сандовал</p>
                    <p><span>Перевод на русский:</span> Сыендук</p>
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
