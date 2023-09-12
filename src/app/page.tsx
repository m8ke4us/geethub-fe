import Avatar from '@/components/Avatar';
import Tab from '@/components/Tab';
import Layout from '@/template/Layout';

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
    <Layout>
      <Tab defaultActiveValue="YEAR" items={items} />
      <Avatar path="142975816?s=48&v=4" alt="example avatar" size={30} />
    </Layout>
  );
}
