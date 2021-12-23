import React from 'react'
import Link from 'next/link'

const withLink = (Component, href) => ({ ...props }) => (
    <Link href = {href}>
        <a>
            <Component {...props} />
        </a>
    </Link>
  );

export default withLink
