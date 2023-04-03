import { Link } from "@remix-run/react";

const Guitarra = ({ guitarra }) => {
  const { id, nombre, descripcion, precio, url, imagen } = guitarra;
  const img = imagen.data.attributes.formats.medium.url;
  return (
    <div className="guitarra">
        <img src={img} alt={nombre} />
        <div className="contenido">
            <h3>{nombre}</h3>
            <p className="descripcion">{descripcion}</p>
            <p className="precio">${precio}</p>

            <Link className="enlace" to={`/guitarras/${url}`}>Ver producto</Link>
        </div>
    </div>
  )
};
   
export default Guitarra;
