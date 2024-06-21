export const revalidate = 420;

interface Post {
  title: string;
  slug: string;
  content: string;
}

interface Props {
  params: { slug: string };
}

const generateStaticParams = async () => {
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then((res) => res.json());
  return posts.map((post) => {
    slug: post.slug;
  });
};

const BlogPostPage = async ({ params }: Props) => {
  const posts: Post[] = await fetch("http://localhost:3000/api/content").then((res) => res.json()); //fetch from api
  const post = posts.find((post) => post.slug === params.slug)!;
  console.log(posts);
  if (!post) {
    return <div>Slug not found</div>;
  }

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </>
  );
};

export default BlogPostPage;
