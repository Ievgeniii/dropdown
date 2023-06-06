import { FC } from 'react';
import { DropdownItemProps } from './types';

import styles from './DropdownOption.module.scss';

const { option, inner } = styles;

const DropdownOption: FC<DropdownItemProps> = ({ title, onClick }) => {
  return (
    <li className={option}>
      <button
        className={inner}
        aria-label={title}
        onClick={onClick}
      >
        {title}
      </button>
    </li>
  );
};

export default DropdownOption;
