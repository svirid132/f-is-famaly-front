import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import {Season as CompSeason} from "components/season"

function Season({seasons}) {
    return (
    <Layout seasons={seasons}>
        <CompSeason />
    </Layout> 
    )
}

export default Season
