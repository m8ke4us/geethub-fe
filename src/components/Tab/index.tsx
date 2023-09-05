'use client';

import classnames from 'classnames';
import React, { useState } from 'react';

type ItemValue = string;
interface TabItem extends React.PropsWithChildren {
  label: React.ReactNode;
  value: ItemValue;
}
export interface TabProps {
  defaultActiveValue: ItemValue;
  items: TabItem[];
  onChange?: (value: ItemValue) => void;
}
export default function Tab({ defaultActiveValue, items, onChange }: TabProps) {
  const [activeValue, setActiveValue] = useState(defaultActiveValue);
  const onClick = (value: ItemValue) => {
    setActiveValue(value);
    onChange?.(value);
  };

  return (
    <ul className="flex border-b-2 border-neutral-300 pb-2">
      {items.map((item, i) => (
        <li
          key={i}
          className={classnames(
            'cursor-pointer font-semibold text-neutral-500',
            item.value === activeValue
              ? 'after:block after:h-3 after:bg-amber-200 after:content-[""]'
              : 'hover:text-neutral-700',
          )}
          onClick={() => onClick(item.value)}
        >
          <p className="mb-[-0.7rem] px-4">{item.label}</p>
        </li>
      ))}
    </ul>
  );
}
