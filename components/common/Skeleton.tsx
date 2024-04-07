import React from 'react';

const Bone = ({ className }: { className?: string }) => (
  <div className={`h-6 rounded bg-gray-200 dark:bg-gray-800 animate-pulse ${className}`}></div>
);

type SkeletonProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactElement;
};

export default function Skeleton({ children, ...rest }: SkeletonProps) {
  return children ?? <Bone {...rest} />;
}
