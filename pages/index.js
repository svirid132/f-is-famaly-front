import Home from '../components/Home'
import Layout from '../components/layout'
import {fetchAPI} from "./../lib/api"

export default function HomePage( { seasons }) {
  return (
    <Layout seasons={seasons}>
      <Home />
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