import React from "react";

const Curso = ({ curso }) => {
  const { titulo, contenido, imagen } = curso;
  console.log(imagen.data.attributes.url);
  return (
    <section className="curso">
      <style jsx="true">
        {`
          .curso {
            background-image: linear-gradient(
                to right bottom,
                rgba(0, 0, 0, 0.7),
                rgba(0, 0, 0, 0.7)
              ),
              url(${imagen.data.attributes.url});
          }
        `}
      </style>
      <div className="contenedor curso-grid">
        <div className="contenido">
          <h2 className="heading">{titulo}</h2>
          <p className="texto">{contenido}</p>
        </div>
      </div>
    </section>
  );
};

export default Curso;
