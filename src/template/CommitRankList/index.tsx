import classnames from 'classnames';

import Avatar from '@/components/Avatar';

interface CommitRankItem {
  id: string;
  rank: number;
  username: string;
  avatarPath: string;
  count: number;
}
export interface CommitRankListProps {
  items: CommitRankItem[];
  className?: string;
}

interface RankTextColorType {
  [key: string]: string;
}

const rankTextColorClasses: RankTextColorType = {
  1: 'text-amber-400',
  2: 'text-emerald-600',
  3: 'text-violet-600',
  default: 'text-neutral-600',
};

function CommitRankItem({ rank, username, avatarPath, count }: CommitRankItem) {
  return (
    <li className="mb-4 flex items-center justify-between rounded-md border-2 border-neutral-700 p-4 last:mb-0">
      <div className="flex items-center">
        <span
          className={classnames(
            'mr-8 text-xl font-bold',
            rank <= 3 ? rankTextColorClasses[rank] : rankTextColorClasses.default,
          )}
        >
          {rank}
        </span>
        <span className="mr-2 font-semibold">{username}</span>
        <Avatar path={avatarPath} alt={`${username} avatar`} size={26} />
      </div>
      <div>
        <span className="mr-0.5 text-lg font-semibold">{count}</span>
        <span className="text-sm text-neutral-600">items</span>
      </div>
    </li>
  );
}

function CommitRankList({ items, className }: CommitRankListProps) {
  return (
    <ul className={classnames(className)}>
      {items.map((item) => (
        <CommitRankItem key={item.id} {...item} />
      ))}
    </ul>
  );
}

export default CommitRankList;
