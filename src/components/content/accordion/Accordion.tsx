'use client';

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';

export interface IAccordionItems {
  title: string;
  content: React.ReactNode;
}
export interface IAccordionProps {
  items: IAccordionItems[];
}

export default function Accordion({ items }: IAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} className="mb-1">
          <div
            className="cursor-pointer p-4 bg-opacity-5 bg-white rounded"
            onClick={() => handleClick(index)}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <span
                className={`w-6 h-6 flex items-center justify-center duration-500 transition-transform transform ${
                  activeIndex === index ? 'rotate-180' : 'rotate-0'
                }`}
              >
                <FaChevronDown />
              </span>
            </div>
          </div>

          <div
            id="content"
            className={`p-4 transition-all duration-500 ease-in-out overflow-hidden ${
              activeIndex === index
                ? 'max-h-96 opacity-100'
                : 'max-h-0 p-0 opacity-0'
            }`}
          >
            {item.content}
          </div>
        </li>
      ))}
    </ul>
  );
}
