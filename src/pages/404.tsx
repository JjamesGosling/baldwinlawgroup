import Layout from "@/components/layout/Layout";
import SEO from "@/components/seo";
import { INFO } from "@/constants";
import Custom404 from "@/sections/404page";

export default function error() {
  return (
    <Layout>
      <SEO title={`404 | ${INFO.companyName}`} />
      <Custom404 />
    </Layout>
  );
}
