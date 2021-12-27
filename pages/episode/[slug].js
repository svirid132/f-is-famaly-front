import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faBars, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import {default as CompEpisode} from "components/episode"
import Layout from 'components/layout'
import { fetchAPI } from 'lib/api'
import { useRouter } from 'next/router'

function Episode({episodes, episode, seasons}) {
    return (
    <Layout seasons={seasons}>
        <CompEpisode episode = {episode} episodes={episodes}/>
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
      fallback: false
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
  const seasonData = seasonResp.data;

    const episodeResp = await fetchAPI("/epizodes", { 
      filters: { slug: params.slug },
      populate: "*"
    });
    const episode = episodeResp.data[0];

    const seasonResp = await fetchAPI("/seasons", {
        filters: { slug: params.slug },
        populate: {
            epizodes: {
            populate: "*",
          },
        },
      })
    const episodesData = seasonResp.data[0].attributes.epizodes.data;

    const seasonsResp = await fetchAPI("/seasons", { populate: "*" });
    const seasonsData = seasons.data;

    return {
      props: { 
        seasons: seasonsData,
        episode: episode,
        episodes: episodesData,
      },
      revalidate: 1,
    }
  }

export default Episode
