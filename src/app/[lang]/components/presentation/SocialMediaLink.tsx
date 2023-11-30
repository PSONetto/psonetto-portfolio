'use client';

import { useRef } from 'react';
import { TooltipTriggerProps, useTooltipTrigger } from 'react-aria';
import { useTooltipTriggerState } from 'react-stately';

import Tooltip from '@/components/overlay/tooltip/Tooltip';

export interface ISocialMediaLinkProps extends TooltipTriggerProps {
  name: string;
  path: string;
  icon: React.ReactNode;
  tooltip: React.ReactNode;
}

export default function SocialMediaLink(props: ISocialMediaLinkProps) {
  const state = useTooltipTriggerState(props);
  const ref = useRef(null);

  const { triggerProps, tooltipProps } = useTooltipTrigger(props, state, ref);

  return (
    <span className="relative transition ease-in-out duration-500 hover:scale-105">
      <a
        {...triggerProps}
        href={props.path}
        target="_blank"
        className="text-3xl"
        aria-label={props.name}
      >
        {props.icon}
      </a>

      {state.isOpen && (
        <Tooltip state={state} {...tooltipProps}>
          {props.tooltip}
        </Tooltip>
      )}
    </span>
  );
}
