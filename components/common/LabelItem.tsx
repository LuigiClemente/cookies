import React from 'react';

import LabelModel from '../models/LabelModel';
import Link from 'next/link';

export type LabelItemProps = {
  label: LabelModel;
  getLink: (label: string) => string;
};

export default function LabelItem(props: LabelItemProps) {
  const { label, getLink } = props;

  return (
    <Link href={getLink(label.name)} className="mr-4 flex items-center">
      <span className="w-2 h-2 rounded-full" style={{ background: label.color }}></span>
      <span className="ml-2 dark:text-gray-600">{label.name}</span>
    </Link>
  );
}
