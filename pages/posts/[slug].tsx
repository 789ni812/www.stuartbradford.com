import { GetStaticProps, GetStaticPaths } from "next";
import { getFileBySlug, getFiles } from "../../lib/post";
import { MDXRemoteSerializeResult } from "next-mdx-remote/dist/types";
import { MDXRemote } from "next-mdx-remote";
import matter from "gray-matter";

interface PostProps {
  post: {
    slug: string;
    data: {
      title: string;
      date: string;
    };
    content: MDXRemoteSerializeResult<Record<string, unknown>>;
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles();

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
    if (!params || typeof params.slug !== "string") {
      return {
        notFound: true,
      };
    }
  
    const post = await getFileBySlug(params.slug);
  
    return {
      props: {
        post: {
          ...post,
          data: {
            ...post.data,
            date: post.data.date.toISOString(),
          },
        },
      },
    };
  };

export default function Post({ post }: PostProps) {
  return (
    <div>
      <h1>{post.data.title}</h1>
      <p>{post.data.date}</p>
      <MDXRemote {...post.content} />
    </div>
  );
}