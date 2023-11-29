'use client';

import { AriaTooltipProps, mergeProps, useTooltip } from 'react-aria';
import { TooltipTriggerState } from 'react-stately';

export interface ITooltipProps extends AriaTooltipProps {
  state: TooltipTriggerState;
  children: React.ReactNode;
}

export default function Tooltip({ state, ...props }: ITooltipProps) {
  const { tooltipProps } = useTooltip(props, state);

  return (
    <span
      className="absolute p-2 mt-3 left-2 top-full max-w-[150px] whitespace-nowrap bg-gray-700 border-gray-400 rounded"
      {...mergeProps(props, tooltipProps)}
    >
      {props.children}
    </span>
  );
}
