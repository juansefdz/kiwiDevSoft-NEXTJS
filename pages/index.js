import Feature from "../components/Feature";
import Services from "../components/Services";
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
        <Services />
      </Layout>
    </>
  );
}
