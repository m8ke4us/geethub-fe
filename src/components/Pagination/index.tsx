'use client';

import { useMemo } from 'react';

type FlagType = 'prev' | 'next';
interface PaginationProps {
  total: number;
  pageSize: number;
  current: number;
  onChange: (page: number) => void;
}
function Pagination({ total, pageSize, current, onChange }: PaginationProps) {
  const totalPage = useMemo(() => Math.ceil(total / pageSize), [total, pageSize]);

  const onClick = (flag: FlagType) => {
    if (flag === 'prev') {
      onChange(current - 1 > 0 ? current - 1 : 1);
    } else {
      onChange(current + 1 <= totalPage ? current + 1 : totalPage);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <button onClick={() => onClick('prev')}>
        <svg
          viewBox="64 64 896 896"
          focusable="false"
          data-icon="left"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
        </svg>
      </button>
      <span>
        {current} / {totalPage}
      </span>
      <button onClick={() => onClick('next')}>
        <svg
          viewBox="64 64 896 896"
          focusable="false"
          data-icon="right"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
        </svg>
      </button>
    </div>
  );
}

export default Pagination;
