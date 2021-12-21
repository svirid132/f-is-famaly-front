import React from 'react'
import styled from 'styled-components'

function NavUnderElem({className, content}) {
    return (
        <div className={className}>
            <Body>
                <Link href={content.link}>
                    <Text>
                        <Icon icon={content.icon} /> {content.text}
                    </Text>
                </Link>
            </Body>
        </div>
    )
}

const Body = styled.div`
    display: block;
    padding: 10px 0;
`

const Text = styled.a`
    line-height: 0.5;
`

export default NavUnderElem
