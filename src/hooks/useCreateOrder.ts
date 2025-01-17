import Food from '../types/Food';

const url = 'http://localhost:3000/orders';

export default function useCreateOrder() {
  const createOrder = async (menu: Food[], totalPrice: number) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ menu, totalPrice }),
    });

    const receipt = await response.json();
    return receipt;
  };

  return {
    createOrder,
  };
}
