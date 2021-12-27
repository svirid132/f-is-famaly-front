import Home from '../components/home'
import Layout from '../components/layout'
import {fetchAPI} from "./../lib/api"

export default function HomePage( { seasons }) {
  return (
    <Layout seasons={seasons}>
      <Home seasons={seasons} />
    </Layout>
  )
}

export async function getStaticProps() {

  const seasons = await fetchAPI("/seasons", { populate: "*" });
  const seasonsResult = seasons.data;

  return {
    props: {
      seasons: seasonsResult,
    },
    revalidate: 1,
  }
}