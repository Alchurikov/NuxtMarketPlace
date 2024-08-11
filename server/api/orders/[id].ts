import { defineEventHandler } from 'h3';
import type { OrderDetails } from '~/types/order';
import { orders } from '../checkout';

export default defineEventHandler(async (event): Promise<OrderDetails> => {
  const id = event.context.params?.id;

  if (!id || !orders[id]) {
    console.error('Order not found for ID:', id);
    throw createError({
      statusCode: 404,
      message: 'Order not found',
    });
  }

  return orders[id];
});
