'use client';

import { SeparatorProps, useSeparator } from 'react-aria';

export default function Separator(props: SeparatorProps) {
  const { separatorProps } = useSeparator(props);

  return (
    <div
      {...separatorProps}
      className={`bg-gray-300 ${
        props.orientation === 'vertical'
          ? 'w-[1px] h-full mx-2'
          : 'w-full h-[1px] my-2'
      }`}
    />
  );
}
