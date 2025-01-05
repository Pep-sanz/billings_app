import * as z from 'zod';

export const invoiceSchema = z.object({
  customer: z.string(),
  price: z.string(),
  date: z.date(),
  dueDate: z.date(),
});
