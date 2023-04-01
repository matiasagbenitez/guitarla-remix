import imagen from "../../public/img/nosotros.jpg";
import styles from "~/styles/nosotros.css";

export function meta() {
  return [{ title: "GuitarLA - Nosotros" }];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "preload",
      href: imagen,
      as: "image",
    },
  ];
}

const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="Imagen sobre nosotros" />
        <div className="texto">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            ducimus a distinctio necessitatibus. Commodi ad sint similique
            excepturi ducimus hic? Dolorem dolore fugit id possimus? Animi,
            adipisci distinctio quidem omnis praesentium quod doloremque minima
            at enim tempore exercitationem eaque illo porro deleniti. Sequi
            ducimus aspernatur dolorum, doloremque porro ea dolore.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            ducimus a distinctio necessitatibus. Commodi ad sint similique
            excepturi ducimus hic? Dolorem dolore fugit id possimus? Animi,
            adipisci distinctio quidem omnis praesentium quod doloremque minima
            at enim tempore exercitationem eaque illo porro deleniti. Sequi
            ducimus aspernatur dolorum, doloremque porro ea dolore.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Nosotros;
