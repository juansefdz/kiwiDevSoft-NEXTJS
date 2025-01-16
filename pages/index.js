import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/PrincipalBanner";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title='Kiwi DevSoft' />
      <Layout>
        <Hero />
        <Feature />
        <Pricing />
      </Layout>
    </>
  );
}
