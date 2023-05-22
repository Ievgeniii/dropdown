import { FC, useState, useRef } from 'react';
import { DropdownProps } from './types';
import Chevron from '../Chevron/Chevron';
import { dispatchCustomEvent } from '../../customEvent/customEvent';

import styles from './Dropdown.module.scss';

const {
  container,
  header,
  headerInner,
  headerInnerUnselected,
  chevron,
  menu,
  option,
  optionNoScroll,
  optionInner
} = styles;

const Dropdown: FC<DropdownProps> = ({ emptyStatePlaceholder, options, optionInitialIndex }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeOptionIndex, setActiveOptionIndex] = useState<number>(optionInitialIndex ?? -1);
  const dropdownEl = useRef<HTMLElement>(null);

  const toggleOpen = (): void => setIsOpen(!isOpen);

  const handleOptionClick = (optionIndex: number): void => {
    setIsOpen(false);
    setActiveOptionIndex(optionIndex);
    dispatchCustomEvent(dropdownEl.current, optionIndex);
  };

  const isScrollable: boolean = options.length > 7;
  const selectedOption: string | undefined = options[activeOptionIndex];
  const headerValue: string = selectedOption ?? emptyStatePlaceholder;

  const headerInnerCx: string = selectedOption ? headerInner : `${headerInner} ${headerInnerUnselected}`;
  const optionCx: string = isScrollable ? option : `${option} ${optionNoScroll}`;

  return (
    <section className={container} ref={dropdownEl}>
      <div className={header}>
        <button
          className={headerInnerCx}
          aria-label={headerValue}
          onClick={toggleOpen}
        >
          {headerValue}
        </button>
        <div className={chevron}>
          <Chevron isOpen={isOpen} />
        </div>
      </div>

      {isOpen && (
        <ul className={menu}>
          {options.map((optionValue: string, optionIndex: number) => {
            return (
              <li className={optionCx} key={optionIndex.toString()}>
                <button
                  className={optionInner}
                  aria-label={optionValue}
                  onClick={() => handleOptionClick(optionIndex)}
                >
                  {optionValue}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default Dropdown;
