import { FC } from 'react';
import { ChevronProps } from './types';

import styles from './DropdownChevron.module.scss';

const { chevron, inner, innerOpen } = styles;

const DropdownChevron: FC<ChevronProps> = ({ isOpen }) => (
  <div className={chevron}>
    <svg
      className={isOpen ? `${inner} ${innerOpen}` : inner}
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1
        .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
      />
    </svg>
  </div>
);

export default DropdownChevron;
