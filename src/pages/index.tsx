import Layout from "@/components/layout/Layout";
import SEO from "@/components/seo";
import HomePage from "@/sections/homePage";
import { INFO } from "@/constants";

export default function home() {
  return (
    <Layout>
      <SEO
      title={`Top California Securities Law Firm  | ${INFO.companyName}`}
      description={`Baldwin Mader Law Group – A trusted California securities law firm in Manhattan Beach, providing expert legal counsel on securities litigation, compliance, and regulatory matters. Contact us today!
`}
      />
      <HomePage />
    </Layout>
  );
}
