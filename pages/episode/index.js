import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faBars, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import {default as CompEpisode} from "components/episode"
import Layout from 'components/layout'

function Episode({seasons}) {
    return (
    <Layout seasons={seasons}>
        <CompEpisode />
    </Layout>
    )
}

export default Episode
