import React from 'react'
import styled from 'styled-components'

function ContainerInfo({className}) {
    return (
    <div className={className}>
        <h2>Подробнее</h2>
        <Container>
            <List>
                <li>Жанры:</li>
                <li>Ситкомы</li>
                <li>Анимационные фильмы для взрослых</li>
                <li>Комедии</li>
                <li>Американские сериалы</li>
            </List>
            <List>
                <li>О сериале:</li>
                <li>С непристойными шутками</li>
            </List>
            <List>
                <li>В ролях</li>
                <li>Билл Бёрр</li>
                <li>Деби Дерриберри</li>
                <li>Мо Коллинз</li>
                <li>Дэвид Кокнер</li>
                <li>Джонатан Бэнкс</li>
            </List>
        </Container>
    </div>
    )
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 15%;
    row-gap: 20px;
`

const List = styled.ul`
    display: flex;
    flex-direction: column;
    width: 35%;

    & li:first-child {
        color: gray;
    }

    & li {
        margin: 5px 0;
    }
`

export default ContainerInfo
