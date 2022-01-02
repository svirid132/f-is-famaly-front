import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

function NavUnderElem({content}) {
    return (
        <Body>
            <Link href={content.link}>
                <a>
                    {content.text}
                </a>
            </Link>
        </Body>
    )
}

const Body = styled.div`
    display: inline-block;
    padding: 10px 0;
    @media screen and (min-width: 900px) {
        padding: 15px 0;
    }
`

export default NavUnderElem
