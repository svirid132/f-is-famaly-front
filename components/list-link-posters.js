import React from 'react'
import Poster from 'components/poster';
import withLink from './with-link';
import styled from 'styled-components';

const LinkPoster = withLink(Poster);

function ListLinkArticle({title, elems}) {
    
    const elemList = elems.map((elem, index) => {

        return (
            <ListElem key = {index}>
                <LinkPoster {...elem} />
            </ListElem>
        );
    });

    return (
        <Body>
            <h3>{title}</h3>
            <List>
                {elemList}
            </List>
        </Body>
    )
}

const Body = styled.div`
    padding: 0 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid black;
`

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    column-gap: 5%;
    row-gap: 20px;
    padding: 0;
    @media screen and (min-width: 600px) {
        column-gap: 2%;
    }
`

const ListElem = styled.li`
    width: 45%;
    @media screen and (min-width: 600px) {
        width: 31.9%;
    }
    @media screen and (min-width: 900px) {
        width: 23%;
    }
`

export default ListLinkArticle
