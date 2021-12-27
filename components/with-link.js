import React from 'react'
import styled from 'styled-components';
import Link from 'next/link'

const withLink = (Component) => (props) => {
    
    const {className, href, children, ...otherProps} = props;

    return (
      <Link href = {href} passHref>
          <A className = {className}>
              <Component {...otherProps} > 
                {children}
              </Component>
          </A>
      </Link>
  );
    }

  const A = styled.a`
    display: inline-block;
  `

export default withLink
