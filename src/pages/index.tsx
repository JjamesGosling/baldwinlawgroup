import Layout from "@/components/layout/Layout";
import SEO from "@/components/seo";
import HomePage from "@/sections/homePage";
import { INFO } from "@/constants";

export default function home() {
  return (
    <Layout>
      <SEO
      title={`Baldwin Mader Law Group: California's Leading Law Firm | ${INFO.companyName}`}
      description={`Baldwin Mader Law Group is California's premier law firm specializing in securities litigation and investment fraud, providing expert legal representation and trusted counsel....
`}
      />
      <HomePage />
    </Layout>
  );
}
