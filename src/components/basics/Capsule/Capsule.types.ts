import { ReactNode } from "react";

export interface CapsuleProps {
  Prefix?: ReactNode;
  Suffix?: ReactNode;
  Title?: ReactNode;
  Subheader?: ReactNode;
  onClick?: () => void;
  alignment?: 'start' | 'center';
};