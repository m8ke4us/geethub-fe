'use client';

import axios from 'axios';
import { useState } from 'react';

import Pagination from '@/components/Pagination';
import Tab from '@/components/Tab';
import CommitRankList from '@/template/CommitRankList';
import Layout from '@/template/Layout';

import type { TabProps } from '@/components/Tab';
import type { CommitRankListProps } from '@/template/CommitRankList';

const tabItems: TabProps['items'] = [
  {
    label: 'THIS YEAR',
    value: 'YEAR',
  },
  {
    label: 'THIS MONTH',
    value: 'MONTH',
  },
];

const commitRankItems: CommitRankListProps['items'] = [
  {
    id: '1',
    rank: 1,
    username: 'danbiilee',
    avatarPath: '53761241?s=48&v=4',
    count: 1234,
  },
  {
    id: '2',
    rank: 2,
    username: 'lebrancconvas',
    avatarPath: '33986491?v=4',
    count: 234,
  },
  {
    id: '3',
    rank: 3,
    username: 'yuhyeminn',
    avatarPath: '58774719?v=4',
    count: 34,
  },
  {
    id: '4',
    rank: 4,
    username: 'kyechan99',
    avatarPath: '14146566?v=4',
    count: 4,
  },
  {
    id: '5',
    rank: 5,
    username: 'kyechan99',
    avatarPath: '14146566?v=4',
    count: 4,
  },
];

export default function Home() {
  const [current, setCurrent] = useState(1);

  const getRankList = () => {
    axios.get('/api/rank').then((res) => console.log(res));
  };

  getRankList();

  return (
    <Layout>
      <Tab defaultActiveValue="YEAR" items={tabItems} />
      <CommitRankList className="pb-12 pt-6" items={commitRankItems} />
      <Pagination total={52} pageSize={10} current={current} onChange={setCurrent} />
    </Layout>
  );
}
