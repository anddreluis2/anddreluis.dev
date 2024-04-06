import Link from "next/link";
import { getPosts } from "./use-posts";

type PostsType = {
  title: string;
  url: string;
  id: string;
};

export default async function MyPosts() {
  const posts = await getPosts();

  return (
    <main className="flex min-h-screen flex-col items-start font-xs px-8 py-10 sm:py-16 sm:px-48">
      {posts.map((post: PostsType) => (
        <Link
          target="blank"
          href={`${post.url}`}
          className="hover:cursor-pointer hover:underline pb-2"
          key={post.id}
        >
          {post.title}
        </Link>
      ))}
    </main>
  );
}
