import { GetStaticProps } from "next";
import Link from "next/link";
import { getFiles } from "../../lib/posts";

interface HomeProps {
  posts: string[];
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const posts = getFiles();

  return {
    props: {
      posts,
    },
  };
};

export default function Home({ posts }: HomeProps) {
    
    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => {
                    const postToUrl = post.replace(/\.mdx/, "");
                    return (
                        <li key={post}>
                            <Link href={`/posts/${postToUrl}`}>
                                {postToUrl}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}