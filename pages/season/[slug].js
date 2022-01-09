import React from 'react'
import {default as CompSeason} from "components/season"
import Layout from "components/layout"
import { fetchAPI } from 'lib/api'

function Season({season, seasons, additionSeason, episodes}) {

  // if (season === undefined) {
  //   return <>Oooops problem!!!</>
  // }

    return (
    <Layout seasons={seasons}>
        <CompSeason season={season} episodes={episodes} additionSeason={additionSeason}/>
    </Layout> 
    )
}

export async function getStaticPaths() {
    const seasonResult = await fetchAPI("/seasons", { fields: ["slug"] })
  
    return {
      paths: seasonResult.data.map((season) => ({
        params: {
          slug: season.attributes.Slug,
        },
      })),
      fallback: 'blocking'
    }
  }

export async function getStaticProps({ params }) {

    const seasonResp = await fetchAPI("/seasons", {
        filters: { slug: params.slug },
        populate: {
            epizodes: {
            populate: "*",
          },
        },
      })
    const episodesData = seasonResp.data[0].attributes.epizodes.data;

    const season = await fetchAPI("/seasons", { 
        filters: { slug: params.slug },
        populate: "*", 
    });
    const seasonData = season.data;

    const seasons = await fetchAPI("/seasons", { populate: "*" });
    const seasonsData = seasons.data; 

    const additionSeasonResp = await fetchAPI("/addition-seasons", {
      populate: "*",
      filters: {
          season: {
            slug: {
              $eq: params.slug
            },
        },
      },
    })
    const additionSeasonData = additionSeasonResp.data[0];
  
    return {
      props: { 
        season: seasonData,
        additionSeason: additionSeasonData ? additionSeasonData : null,
        seasons: seasonsData,
        episodes: episodesData,
      },
      revalidate: 1,
    }
  }

export default Season
