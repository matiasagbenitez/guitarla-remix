import { useLoaderData } from "react-router";
import { getPost } from "~/models/posts.server";
import { formatearFecha } from "~/utils/helpers";
import styles from "~/styles/blog.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export async function loader({ params }) {
  const { urlPost } = params;
  const post = await getPost(urlPost);
  if (post.data.length === 0) {
    return new Response("", {
      status: 404,
      statusText: "Entrada no encontrada",
    });
  }
  return post;
}

export function meta({ data }) {
  const { titulo } = data.data[0].attributes;
  return [{ title: `GuitarLA - ${titulo}` }];
}

const Post = () => {
  const post = useLoaderData();
  const { contenido, imagen, titulo, publishedAt } = post?.data[0].attributes;

  return (
    <article className="contenedor post mt-3">
      <img src={imagen?.data?.attributes.url} alt={titulo} />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="texto">{contenido}</p>
      </div>
    </article>
  );
};

export default Post;
