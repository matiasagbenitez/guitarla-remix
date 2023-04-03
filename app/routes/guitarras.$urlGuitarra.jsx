import { useLoaderData } from "@remix-run/react";
import { getGuitarra } from "~/models/guitarras.server";
import styles from "~/styles/guitarras.css";

export async function loader({ params }) {
  const { urlGuitarra } = params;
  const guitarra = await getGuitarra(urlGuitarra);
  if (guitarra.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Guitarra no encontrada",
    });
  }
  return guitarra;
}

// Data se recibe desde el loader de la ruta
export function meta({ data }) {
  if (!data) {
    return [{ title: "GuitarLA - Error" }];
  }

  const nombre = data.data[0].attributes.nombre;
  return [{ title: `GuitarLA - ${nombre}` }];
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

const Guitarra = () => {
  const guitarra = useLoaderData();
  const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes;

  return (
    <main className="contenedor guitarra">
      <img
        className="imagen"
        src={imagen.data.attributes.url}
        alt={`Imagen de la guitarra ${nombre}`}
      />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">${precio}</p>
      </div>
    </main>
  );
};

export default Guitarra;
