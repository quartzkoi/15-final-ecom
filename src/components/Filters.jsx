import { Form, useLoaderData, Link } from 'react-router-dom';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormRange from './FormRange';

const Filters = () => {
  const { meta, params } = useLoaderData();
  const { search, category, order, price } = params;

  return (
    <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 items-center'>
      {/* SEARCH */}
      <FormInput
        type='search'
        label='search for your service'
        name='search'
        size='input-sm'
        defaultValue={search}
      />
      {/* CATEGORIES */}
      <FormSelect
        label='narrow down the category'
        name='category'
        list={meta.categories}
        size='select-sm'
        defaultValue={category}
      />
      {/* ORDER */}
      <FormSelect
        label='sort by'
        name='order'
        list={['a-z', 'z-a', 'high', 'low']}
        size='select-sm'
        defaultValue={order}
      />
      {/* PRICE */}
      <FormRange
        name='price'
        label='select price'
        size='range-sm'
        price={price}
      />
      {/* BUTTONS */}
      <button type='submit' className='btn btn-primary btn-sm'>
        search
      </button>
      <Link to='/products' className='btn btn-accent btn-sm'>
        reset
      </Link>
    </Form>
  );
};
export default Filters;
