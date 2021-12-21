import React, {useState} from "react"
import Link from "next/link"
import styled, {css} from 'styled-components'
import logo from "../assets/F-is-famaly-logo.jpg"
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import NavElem from "./navElem"


const Navigation = ({ seasons }) => {

    const [selected, setSelected] = useState(null);
    const [toggle, setToggle] = useState(false);

    return (
    <Nav>
        <Button view = {toggle == false} onClick = {() => setToggle(true)}><FontAwesomeIcon icon={faBars} /></Button>
        <Button view = {toggle} onClick = {() => setToggle(false)}><FontAwesomeIcon icon={faTimes} /></Button>
        <Image src={logo} alt="logo" width = {97} height={60} placeholder = "blur"/>
        <List view = {toggle}>
            {/* <Li onMouseEnter = {() => setSelected(1)} onMouseLeave = {() => setSelected(null)}>
                <NavElem text="Смотерть онлайн" icon={ <Icon icon={faCaretDown} /> }/>
                <UnderContnet view = {selected === 1}>
                    <UnderUl>
                        <UnderLi>
                            <Link href="/season/1"><a><Icon icon={faCaretRight} />Сезон 1</a></Link>
                        </UnderLi>
                        <UnderLi>
                            <Link href="/season/1"><a><Icon icon={faCaretRight} />Сезон 2</a></Link>
                        </UnderLi>
                        <UnderLi>
                            <Link href="/season/3"><a><Icon icon={faCaretRight} />Сезон 3</a></Link>
                        </UnderLi>
                    </UnderUl>
                </UnderContnet>
            </Li> */}
            <ListElem> 
                <NavElem content={{myself: {link: "", text: "text", icon: <Icon icon={faCaretRight} />}}} 
                    under = { [{link: "", text: "text", icon: <Icon icon={faCaretRight} />}] }
                    /> 
            </ListElem>
            {/* <Li><p>Новости сериала</p></Li>
            <Li><p>Дата выхода</p></Li> */}
        </List>

    </Nav>
    )
}

const Nav = styled.nav`
    display: flex;
    position: relative;
    height: 60px;
    background-color: #F3DAAF;
    justify-content: center;
    box-shadow: 0 5px 5px gray;/*x y прозрачность цвет*/
    width: 100%;

    @media screen and (min-width: 900px) {
        justify-content: flex-start;
    }
`

const Button = styled.button`
    display: ${ ({ view }) => view ? "block": "none"};
    position: absolute;
    left: 0;
    width: 60px;
    height: 60px;
    background-color: white;
    border: 1px solid gray;
    font-size: 20px;
    color: blue;

    &:hover{
        cursor: pointer;
    }
    @media screen and (min-width: 900px) {
        display: none;
    }
`

const List = styled.ul`
    position: absolute;
    width: 100%;
    display: ${ ({ view }) => view ? "flex": "none"};
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
    top: 100%;
    @media screen and (min-width: 900px) {
        display: flex;
        position: static;
        top: 0;
        width: auto;
        flex-direction: row;
    }
`

const ListElem = styled.li`
    position: relative;
    border: 1px solid gray;
    padding-left: 20px;
    background-color: white;
    &:hover {
        background-color: aqua;
    }
    @media screen and (min-width: 900px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 0;
    
        padding-left: 20px;
        padding-right: 20px;
        height: 100%;
        background-color: transparent;
    }
`

const UnderContnet = styled.div`
    width: 100%;
    @media screen and (min-width: 900px) {
        display: ${({view}) => view ? "block": "none"};
    }
`

const UnderUl = styled.ul`
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
const UnderLi = styled.li`
    width: 50%;
    & a {
        display: inline-block;
        padding: 10px 0;
    }
    & a::before {
        content: "-";
        margin: 10px;
    }
    @media screen and (min-width: 900px) {
        line-height: 0.5;
        & a::before {
            display: none;
        }
    }
`

const Icon = styled(FontAwesomeIcon)`
    display: none;
    @media screen and (min-width: 900px) {
        display: inline;
        line-height: 0;
        margin-right: 6px;
    }
`


export default Navigation

