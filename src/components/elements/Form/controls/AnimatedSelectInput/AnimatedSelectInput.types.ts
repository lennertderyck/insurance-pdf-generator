export interface AnimatedSelectInputProps {
  id?: string;
  name: string;
  label: string;
  value: string | number | null;
  disabled?: boolean;
  options: {
    label: string;
    value: string | number;
  }[];
  onChange: (newValue: string | number) => void;
};