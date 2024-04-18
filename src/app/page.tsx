import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://i.imgur.com/jo94Ux4.jpeg",
  "https://i.imgur.com/sv7Yx3I.jpeg",
  "https://i.imgur.com/I5wpnxA.jpeg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((img) => (
          <div key={img.id} className="w-48">
            <img src={img.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
