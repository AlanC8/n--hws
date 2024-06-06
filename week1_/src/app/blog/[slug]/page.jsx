import Head from "next/head";
import data from "../../data.js";

export default function Page({ params }) {
  const post = data.find((post) => post.id === parseInt(params.slug));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
      </Head>
      <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
        <article className="prose prose-gray max-w-3xl mx-auto dark:prose-invert">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <img
                src={post.image_url}
                alt="Author Avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
              <p className="text-gray-500 dark:text-gray-400">{post.author}</p>
            </div>
            <p className="text-gray-500 dark:text-gray-400">{post.date}</p>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight mb-4 lg:text-5xl">
            {post.title}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg mb-8">
            {post.description}
          </p>
          <p>
            Through practical tips and real-world examples, you'll learn how to
            harness the power of storytelling to connect with your audience,
            convey your message, and leave a lasting impact.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
            reiciendis sed rem sunt dignissimos enim laudantium nesciunt earum,
            ducimus repudiandae magnam natus inventore voluptatibus quod optio,
            illo, amet adipisci maiores ex quasi aliquid delectus eum. Quisquam
            accusamus in, ex dicta, itaque eveniet minus veritatis cupiditate
            ipsam, perferendis rem ut consequuntur!
          </p>
        </article>
      </div>
    </>
  );
}
