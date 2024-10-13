import { Form, redirect } from 'react-router-dom';
import FormInput from './FormInput';
import SubmitBtn from './SubmitBtn';
import { customFetch, formatPrice } from '../utils';
import { toast } from 'react-toastify';
import { clearCart } from '../features/cart/cartSlice';

export const action =
  (store, queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, street, city, postalCode, requestedTime, frequency } =
      Object.fromEntries(formData);
    
    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;

    const info = {
      name,
      address: { street, city, postalCode },
      requestedTime,
      frequency,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
      cartItems,
      numItemsInCart,
    };

    try {
      const response = await customFetch.post(
        '/orders',
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      queryClient.removeQueries(['orders']);
      store.dispatch(clearCart());
      toast.success('order placed successfully');
      return redirect('/orders');
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        'there was an error placing your order';
      toast.error(errorMessage);
      if (error?.response?.status === 401 || 403) return redirect('/login');
      return null;
    }
  };

const CheckoutForm = () => {
  return (
    <Form method='POST' className='flex flex-col gap-y-4'>
      <h4 className='font-medium text-xl capitalize'>service address</h4>

      {/* Name */}
      <FormInput label='first name' name='name' type='text' />

      {/* Address */}
      <FormInput label='street' name='street' type='text' />
      <FormInput label='city' name='city' type='text' />
      <FormInput label='postal code' name='postalCode' type='text' />

      {/* Requested Time */}
      <h4 className='font-medium text-xl capitalize'>requested service time</h4>
      <FormInput label='requested time' name='requestedTime' type='datetime-local' />

      {/* Frequency */}
      <h4 className='font-medium text-xl capitalize'>frequency of service</h4>
      <div className='flex gap-x-4'>
        <label>
          <input type='radio' name='frequency' value='one-time' className='mr-2' />
          One-time
        </label>
        <label>
          <input type='radio' name='frequency' value='weekly' className='mr-2' />
          Weekly
        </label>
        <label>
          <input type='radio' name='frequency' value='monthly' className='mr-2' />
          Monthly
        </label>
      </div>

      <div className='mt-4'>
        <SubmitBtn text='place your order' />
      </div>
    </Form>
  );
};

export default CheckoutForm;
