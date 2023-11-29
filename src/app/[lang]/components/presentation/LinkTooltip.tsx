import { FaExternalLinkAlt } from 'react-icons/fa';

export interface ILinkTooltip {
  name: string;
}

export default function LinkTooltip({ name }: ILinkTooltip) {
  return (
    <span className="flex items-center justify-center gap-1">
      {name}
      <FaExternalLinkAlt />
    </span>
  );
}
