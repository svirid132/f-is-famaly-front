import React, {useState} from "react"
import Link from "next/link"
import styled, {css} from 'styled-components'
import logo from "../assets/F-is-famaly-logo.jpg"
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import NavElem from "./navElem"


const Navigation = ({ seasons }) => {

    const [toggle, setToggle] = useState(false);

    return (
    <Nav>
        { !toggle && <Button selected onClick = {() => setToggle(true)}><FontAwesomeIcon icon={faBars} /></Button> }
        { toggle && <Button onClick = {() => setToggle(false)}><FontAwesomeIcon icon={faTimes} /></Button> }
        <Image src={logo} alt="logo" width = {97} height={60} placeholder = "blur"/>
        <List viewMobile = {toggle}>
            <ListElem> 
                <NavElem 
                    content = {{link: "", text: "text"}}
                    under = {[
                        {link: "", text: "text"},
                        {link: "", text: "text"}
                    ]}
                /> 
            </ListElem>
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
    position: absolute;
    left: 0;
    width: 60px;
    height: 60px;
    background-color: #f8981c;
    border: 1px solid gray;
    font-size: 20px;
    color: blue;

    background-color: ${({selected}) => selected ? "#f8981c": "transparent"};

    &:hover{
        cursor: pointer;
    }
    @media screen and (min-width: 900px) {
        display: none;
    }
`

const List = styled.ul`
    display: ${props => props.viewMobile ? "flex" : "none"};
    position: absolute;
    width: 100%;
    flex-direction: column;
    top: 100%;
    height: 100%;
    @media screen and (min-width: 900px) {
        position: static;
        top: 0;
        width: auto;
        flex-direction: row;
    }
`

const ListElem = styled.li``


export default Navigation

