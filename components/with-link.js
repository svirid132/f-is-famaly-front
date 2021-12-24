import React from 'react'
import styled from 'styled-components';
import Link from 'next/link'

const withLink = (Component) => ({ content, className }) => {
    
    const {href, ...otherContent} = content;

    return (
    <Link href = {href}>
        <A className = {className}>
            <Component content = { otherContent } />
        </A>
    </Link>
  );
    }

  const A = styled.a`
    display: inline-block;
  `

export default withLink
