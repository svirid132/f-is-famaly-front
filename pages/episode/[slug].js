import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faBars, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import {default as CompEpisode} from "components/episode"
import Layout from 'components/layout'
import { fetchAPI } from 'lib/api'
import { useRouter } from 'next/router'

function Episode({episode, season, seasons}) {
    return (
    <Layout seasons={seasons}>
        <CompEpisode season = {season} episode={episode}/>
    </Layout>
    )
}

export async function getStaticPaths() {

    const epizodesResult = await fetchAPI("/epizodes", { fields: ["slug"] })

    return ({
      paths: epizodesResult.data.map((episode) => {
        return ({
          params: {
            slug: episode.attributes.Slug,
          }
        })
      }),
      fallback: 'blocking'
    })
  }

export async function getStaticProps({ params }) {

  const seasonResp = await fetchAPI("/seasons", {
    filters: { 
      epizodes: {
        slug: params.slug 
      }
    },
    populate: {
        epizodes: {
          populate: "*",
      },
    },
  })
  const seasonData = seasonResp.data[0];

  const seasonsResp = await fetchAPI("/seasons", { populate: "*" });
  const seasonsData = seasonsResp.data;

  const episodeResp = await fetchAPI("/epizodes", { 
    filters: { slug: params.slug },
    populate: "*"
  });
  const episodeData = episodeResp.data[0];

    return {
      props: { 
        season: seasonData,
        seasons: seasonsData,
        episode: episodeData,
      },
      revalidate: 1,
    }
  }

export default Episode
