import { FC } from 'react';
import { DropdownMenuProps } from './types';
import DropdownOption from '../DropdownOption/DropdownOption';

import styles from './DropdownMenu.module.scss';

const { menu } = styles;

const DropdownMenu: FC<DropdownMenuProps> = ({ options, onOptionClick }) => {
  return (
    <ul className={menu}>
      {options.map((option: string, optionIndex: number) => {
        return (
          <DropdownOption
            key={optionIndex.toString()}
            title={option}
            onClick={() => onOptionClick(optionIndex)}
          />
        );
      })}
    </ul>
  );
};

export default DropdownMenu;
