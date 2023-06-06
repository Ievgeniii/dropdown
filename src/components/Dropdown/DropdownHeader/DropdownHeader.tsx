import { FC } from 'react';
import { DropdownHeaderProps } from './types';
import DropdownChevron from '../DropdownChevron/DropdownChevron';

import styles from './DropdownHeader.module.scss';

const { header, inner, innerUnselected, chevron } = styles;

const DropdownHeader: FC<DropdownHeaderProps> = ({
  options,
  activeOptionIndex,
  emptyStatePlaceholder,
  isOpen,
  onClick
}) => {
  const selectedOption: string | undefined = options[activeOptionIndex];
  const headerValue: string = selectedOption ?? emptyStatePlaceholder;
  const headerInnerCx: string = selectedOption ? inner : `${inner} ${innerUnselected}`;

  return (
    <div className={header}>
      <button
        className={headerInnerCx}
        aria-label={headerValue}
        onClick={onClick}
      >
        {headerValue}
      </button>
      <div className={chevron}>
        <DropdownChevron isOpen={isOpen} />
      </div>
    </div>
  );
};

export default DropdownHeader;
