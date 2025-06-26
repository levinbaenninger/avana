import { TRPCError } from '@trpc/server';

import { middleware } from '../trpc';

export const withAuth = middleware(async ({ ctx, next }) => {
  if (!ctx.session) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
      message: 'Unauthorized',
    });
  }

  return next({
    ctx: {
      session: ctx.session,
    },
  });
});
