import PageHead from "@/components/pageHead";
import React from 'react';
import { useRouter } from 'next/router';
import SEO from '@/components/seo';
import { INFO } from '@/constants';
import Layout from '@/components/layout/Layout';
import { GET_BLOG_POSTS } from '@/api/queries';
import BlogList from '@/sections/blogPage/BlogList';

const BlogPage = ({ posts }: any) => {
  console.log(posts);
  return (
    <Layout>
      <PageHead title="Blog" pageName="Blog" hasBreadCrumb />
      <SEO title={`Blog | ${INFO.companyName}`} />
      {/* <BlogList posts={posts} /> */}
    </Layout>
  );
};
export async function getStaticProps(): Promise<{
  props: any;
  revalidate: number;
}> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: GET_BLOG_POSTS,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data from the API');
    }

    const { data } = await response.json();

    return {
      props: {
        posts: data?.posts || [],
      },
      revalidate: 1,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        posts: [],
      },
      revalidate: 1,
    };
  }
}
export default BlogPage;
