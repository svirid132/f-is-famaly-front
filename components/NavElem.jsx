import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import NavUnderElem from './NavUnderElem';

function NavElem({className, content}) {

    const info = content.myself;
    const elem = info.link ? 
        <Link href = {info.link}>
            <p>{info.text} {info.icon}</p>
        </Link> :
        <p>{info.text} {info.icon}</p>;

    const under = content.under;
    const underElems = under ? under.map((content) => {
        return (
            <ListElem key = {content.link}>
                <NavUnderElem content={{link: content.link, icon: content.icon, text: content.text}}/>
            </ListElem>
        )
    }) : null;

    return (
        <div className = {className}>
            <Body>
                <ElemWrapper>
                    {elem}
                </ElemWrapper>

                {under ? 
                    <List>
                        { underElems }
                    </List>
                : null}
            </Body>
        </div>
    )
}

const Body = styled.div`
    position: relative;
`

const ElemWrapper = styled.div`
    border: 1px solid gray;
    padding: 0 5px;
    background-color: white;
    &:hover {
        background-color: aqua;
    }
    @media screen and (min-width: 900px) {
        align-items: center;
        border: 0;
        background-color: transparent;
    }
`

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    margin-bottom: 20px;
    @media screen and (min-width: 900px) {
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 100%;
        right: 0;
        background-color: aqua;
    }
`

const ListElem = styled.li`
    width: 50%;
    &::before {
        content: "-";
        padding: 10px;
    }
    @media screen and (min-width: 900px) {
        line-height: 0.5;
        & a::before {
            display: none;
        }
    }
`

export default NavElem
