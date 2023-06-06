export type DropdownHeaderProps = {
  options: string[];
  activeOptionIndex: number;
  emptyStatePlaceholder: string;
  isOpen: boolean;
  onClick: () => void;
};
