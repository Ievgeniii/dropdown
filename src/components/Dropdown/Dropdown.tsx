import { FC, useState, useRef } from 'react';
import { DropdownProps } from './types';
import DropdownHeader from './DropdownHeader/DropdownHeader';
import DropdownMenu from './DropdownMenu/DropdownMenu';
import { dispatchCustomEvent } from '../../customEvent/customEvent';

import styles from './Dropdown.module.scss';

const { container } = styles;

const Dropdown: FC<DropdownProps> = ({ emptyStatePlaceholder, options, optionsInitialIndex }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeOptionIndex, setActiveOptionIndex] = useState<number>(optionsInitialIndex ?? -1);
  const dropdownEl = useRef<HTMLElement>(null);

  const toggleOpen = (): void => setIsOpen(!isOpen);

  const handleOptionClick = (optionIndex: number): void => {
    setIsOpen(false);
    setActiveOptionIndex(optionIndex);
    dispatchCustomEvent(dropdownEl.current, optionIndex);
  };

  return (
    <section className={container} ref={dropdownEl}>
      <DropdownHeader
        options={options}
        activeOptionIndex={activeOptionIndex}
        emptyStatePlaceholder={emptyStatePlaceholder}
        isOpen={isOpen}
        onClick={toggleOpen}
      />
      {isOpen && <DropdownMenu options={options} onOptionClick={handleOptionClick} />}
    </section>
  );
};

export default Dropdown;
