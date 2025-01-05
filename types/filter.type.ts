import * as z from 'zod';

export const filterType = z.object({
  year: z.string(),
  month: z.string(),
  status: z.string(),
});
