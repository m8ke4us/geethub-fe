import Tab from '@/components/Tab';

import type { TabProps } from '@/components/Tab';

const items: TabProps['items'] = [
  {
    label: 'THIS YEAR',
    value: 'YEAR',
  },
  {
    label: 'THIS MONTH',
    value: 'MONTH',
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Tab defaultActiveValue="YEAR" items={items} />
    </main>
  );
}
