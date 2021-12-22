import Home from '../components/Home'
import Layout from '../components/layout'


export default function HomePage( { seasons }) {
  return (
    <Layout seasons={seasons}>
      <Home />
    </Layout>
  )
}

// export async function getStaticProps() {

//   const seasonsResult = await fetchAPI("/seasons", { populate: "*" });

//   return {
//     props: {
//       seasons: seasonsResult,
//     },
//     revalidate: 1,
//   }
// }