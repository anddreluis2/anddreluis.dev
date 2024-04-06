import Link from "next/link";
import { getPosts } from "./use-posts";

type PostsType = {
  title: string;
  url: string;
  id: string;
  published_timestamp: string;
};

export default async function MyPosts() {
  const posts = await getPosts();

  return (
    <main className="flex min-h-screen flex-col items-start font-xs px-10 py-10 sm:py-16 sm:px-48">
      <h1 className="text-3xl font-extrabold mb-6">My articles</h1>
      {posts.map((post: PostsType) => (
        <div className="flex pb-10 sm:pb-0 sm:gap-6" key={post.id}>
          <p className="w-full sm:w-auto">
            {post.published_timestamp.slice(0, 10)}
          </p>
          <Link
            target="blank"
            href={`${post.url}`}
            className="hover:cursor-pointer sm:w-auto w-full underline pb-2"
          >
            {post.title}
          </Link>
        </div>
      ))}
    </main>
  );
}
