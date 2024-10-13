import { Link, useLoaderData } from 'react-router-dom';
import { formatPrice } from '../utils';

const ProductsGrid = () => {
  const { products } = useLoaderData();

  return (
    <div className='pt-2 grid gap-2 md:grid-cols-1 lg:grid-cols-3'>
      {products.map((product) => {
        const { title, price, image } = product.attributes;
        const dollarsAmount = formatPrice(price);
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className='card w-full shadow-xl hover:shadow-4xl transition duration-100'
          >
            <figure className='px-4 pt-4'>
              <img
                src={image}
                alt={title}
                className='rounded-xl h-72 md:h-56 w-full object-cover'
              />
            </figure>
            <div className='card-body items-center text-center'>
              <h2 className='card-title capitalize tracking-wider'>{title}</h2>
              <span className='text-primary'>{dollarsAmount}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsGrid;
