import { useOutletContext } from "@remix-run/react";
import { useEffect, useState } from "react";
import styles from "~/styles/carrito.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export function meta() {
  return [
    {
      title: "GuitarLA - Carrito",
    },
  ];
}

const Carrito = () => {
  const [total, setTotal] = useState(0);
  const { carrito, actualizarCantidad, eliminarGuitarra } = useOutletContext();

  useEffect(() => {
    const total = carrito.reduce((acc, producto) => {
      return acc + producto.precio * producto.cantidad;
    }, 0);
    setTotal(total);
  }, [carrito]);

  return (
    <main className="contenedor">
      <h1 className="heading">Carrito de compras</h1>
      <div className="contenido">
        <div className="carrito">
          <h2>Artículos</h2>
          {carrito.length === 0
            ? "No hay artículos en el carrito"
            : carrito.map((producto) => (
                <div key={producto.id} className="producto">
                  <div>
                    <img
                      src={producto.imagen}
                      alt="Imagen producto"
                      className="imagen"
                    />
                  </div>
                  <div>
                    <p className="nombre">{producto.nombre}</p>
                    <p className="precio">
                      Precio unitario: $<span>{producto.precio}</span>
                    </p>

                    <select
                      value={producto.cantidad}
                      onChange={(e) =>
                        actualizarCantidad({
                          id: producto.id,
                          cantidad: +e.target.value,
                        })
                      }
                      className="select"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    <p className="cantidad">Cantidad: {producto.cantidad}</p>
                    <p className="precio">
                      Subtotal: $
                      <span>{producto.precio * producto.cantidad}</span>
                    </p>
                    <button
                      type="button"
                      className="btn-eliminar"
                      onClick={() => eliminarGuitarra(producto.id)}
                      title="Eliminar producto del carrito"
                    >
                      x
                    </button>
                  </div>
                </div>
              ))}
        </div>

        <aside className="resumen">
          <h3>Resumen del pedido</h3>
          <p>Total a pagar: ${total}</p>
        </aside>
      </div>
    </main>
  );
};

export default Carrito;
