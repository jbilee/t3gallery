import Link from "next/link";

const mockUrls = [
  "https://i.imgur.com/jo94Ux4.jpeg",
  "https://i.imgur.com/sv7Yx3I.jpeg",
  "https://i.imgur.com/I5wpnxA.jpeg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((img) => (
          <div key={img.id} className="w-48">
            <img src={img.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
