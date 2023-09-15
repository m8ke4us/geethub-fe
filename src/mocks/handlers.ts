import { rest } from 'msw';

import { commitRankItems } from '@/mocks/data/rank';

export const handlers = [
  rest.get('/api/commit/ranks', (_, res, ctx) => {
    // TODO: 인증 여부 확인
    return res(ctx.status(200), ctx.json(commitRankItems));
  }),
];
