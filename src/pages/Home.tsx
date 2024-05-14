import { useState, useEffect } from 'react';
import useProducts from '../hooks/useProducts';
import Card from '../components/Card.tsx';
import NavbarHome from '../components/NavbarHome.tsx';

const Home = () => {
  const { isLoading, products, error, getProducts } = useProducts();

  const [paginaActual, setPaginaActual] = useState(1);
  const [productosPorPagina, setProductosPorPagina] = useState(3);
  const [productosActuales, setProductosActuales] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const startIndex = (paginaActual - 1) * productosPorPagina;
    const endIndex = startIndex + productosPorPagina;
    setProductosActuales(products.slice(startIndex, endIndex));
  }, [paginaActual, products]);

  const cambiarPagina = (nuevaPagina) => {
    setPaginaActual(nuevaPagina);
  };

  return (
    <div className='container'>
              <NavbarHome />

      <div className="containerCards">
        {isLoading ? (
          <p>Cargando productos...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : productosActuales.length > 0 && (
          productosActuales.map((producto, index) => (
            <Card key={index} product={producto} isLoading={isLoading} />
          ))
        )}
      </div>

      <div className="pagination">
        <button
          type="button"
          id="1"
          disabled={paginaActual === 1}
          onClick={() => cambiarPagina(1)}
        >
          1
        </button>
        <button
          type="button"
          id="2"
          onClick={() => cambiarPagina(paginaActual + 1)}
        >
          2
        </button>
        <button
          type="button"
          id="3"
          onClick={() => cambiarPagina(paginaActual + 2)}
        >
          3
        </button>

      </div>
    </div>
  );
};

export default Home;

