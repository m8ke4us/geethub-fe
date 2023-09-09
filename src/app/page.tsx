import Tab from '@/components/Tab';

import type { TabProps } from '@/components/Tab';

const items: TabProps['items'] = [
  {
    label: 'THIS YEAR',
    value: 'YEAR',
    children: <p>this year list</p>,
  },
  {
    label: 'THIS MONTH',
    value: 'MONTH',
    children: <p>this month list</p>,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Tab defaultActiveValue="YEAR" items={items} />
    </main>
  );
}
