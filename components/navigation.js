import React, {useState} from "react"
import Link from "next/link"
import styled from 'styled-components'
import logo from "../assets/F-is-famaly-logo.jpg"
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import NavElem from "./nav-elem"
import withLink from "./with-link"

const LinkImage = withLink(Image);

const Navigation = ({ seasons }) => {

    const [toggle, setToggle] = useState(false);

    const season = {link: "", text: "сезоны"};
    const seasonUnders = seasons.map((season) => {
        const text = season.attributes.Title;
        const link = `/season/${season.attributes.Number}`;
        return {link: link, text: text};
    });
    
    return (
    <Nav>
        { !toggle && <Button selected onClick = {() => setToggle(true)}><FontAwesomeIcon icon={faBars} /></Button> }
        { toggle && <Button onClick = {() => setToggle(false)}><FontAwesomeIcon icon={faTimes} /></Button> }
        <LinkImage src = {logo} alt = "logo" width = {97} height = {60} placeholder=  "blur" href = "/" />
        <List viewMobile = {toggle}>
            <ListElem> 
                <NavElem 
                    content = { season }
                    under = { seasonUnders }
                /> 
            </ListElem>
        </List>
    </Nav>
    )
}

const Nav = styled.nav`
    display: flex;
    position: relative;
    height: ${props => props.theme.navigationHeight};
    background-color: #F3DAAF;
    justify-content: center;
    box-shadow: 0 5px 5px gray;/*x y прозрачность цвет*/
    width: 100%;

    p {
        margin: 0;
        padding: 0;
    }

    @media screen and (min-width: 900px) {
        justify-content: flex-start;
    }
`

const Button = styled.button`
    position: absolute;
    left: 0;
    width: 60px;
    height: 60px;
    border: 1px solid gray;
    font-size: 20px;
    color: blue;

    background-color: ${({selected}) => selected ? "#f26a2c": "transparent"};

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
        display: flex;
        position: static;
        top: 0;
        width: auto;
        flex-direction: row;
    }
`

const ListElem = styled.li``


export default Navigation

