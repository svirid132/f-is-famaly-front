import {useState} from "react"
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import NavUnderElem from './NavUnderElem';
import { faBars, faTimes, faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavElem({content, under}) {

    const [compToggle, setCompToggle] = useState(false);
    const [mobileToggle, setMobileToggle] = useState(false);

    const elem = under ?
        <p>{content.text}</p> :   
        <Link href = {content.link}>
            <a>{content.text} <Icon icon={faCaretDown} /></a>
        </Link>;

    const underElems = under ? under.map((content) => {
        const textElem = <> <Icon icon={faCaretRight} /> {content.text}</>;
        return (
            <ListElem key = {content.link} selectMobile = {mobileToggle}>
                <NavUnderElem content={{ ...content, text: textElem }}/>
            </ListElem>
        )
    }) : null;

    return (
        <Body onMouseEnter = {() => setCompToggle(true)} onMouseLeave = {() => setCompToggle(false)}>
            <ElemWrapper                     
                onMouseEnter = {() => setMobileToggle(true)} 
                onMouseLeave = {() => setMobileToggle(false)}
            >
                {elem}
            </ElemWrapper>

            {under ? 
                <List viewComp = {compToggle} >
                    { underElems }
                </List>
            : null}
        </Body>
    )
}

const Body = styled.div`
    position: relative;
    height: 100%;
`

const ElemWrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: #F3DAAF;
    height: 100%;
    padding: 10px 0 10px 20px;
    border: solid gray;
    border-width: 2px 0;
    &:hover {
        background-color: #f7a222;
    }
    @media screen and (min-width: 900px) {
        padding: 0 20px;
        align-items: center;
        border: 0;
        background-color: transparent;
    }
`

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    @media screen and (min-width: 900px) {
        display: ${props => props.viewComp ? "flex" : "none"};
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 100%;
        right: 0;
    }
`

const ListElem = styled.li`
    width: 50%;
    text-align: center;
    background-color: ${(props) => props.selectMobile ? "#f7a222": "#F3DAAF"};
    &:hover {
        background-color: #f7a222;
    }
    &::before {
        content: "-";
        margin-right: 5px;
    }
    @media screen and (min-width: 900px) {
        background-color: #F3DAAF;
        width: 100%;
        &::before {
            display: none;
        }
    }
`

const Icon = styled(FontAwesomeIcon)`
    display: none;
    @media screen and (min-width: 900px) {
        display: inline;
    }
`

export default NavElem
