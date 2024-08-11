import type { Product } from '../../../types/product';
import { products } from '../products';

export default defineEventHandler((event) => {
  const id = Number(event.context.params?.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Product not found',
    });
  }

  return product;
});
