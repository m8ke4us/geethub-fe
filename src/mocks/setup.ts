import { setupWorker } from 'msw';
import { setupServer } from 'msw/node';

import { handlers } from '@/mocks/handlers';

export const setupMSW = async () => {
  if (typeof window === 'undefined') {
    const server = setupServer(...handlers);
    server.listen();
  }

  const worker = setupWorker(...handlers);
  await worker.start({
    onUnhandledRequest(req, print) {
      const { pathname } = req.url;
      const unhandledPath = ['/_next', '/__next', '/'];
      const isUnhandledPath = unhandledPath.some((path) => pathname.startsWith(path));

      if (isUnhandledPath) {
        return;
      }

      print.warning();
    },
  });
};
