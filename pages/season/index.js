import React from 'react'
import {default as CompSeason} from "components/season"
import Layout from "components/layout"

function Season({seasons}) {
    return (
    <Layout seasons={seasons}>
        <CompSeason />
    </Layout> 
    )
}

export default Season
