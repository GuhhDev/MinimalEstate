import { HTMLAttributes } from 'react';

export type ContainerSize = 'small' | 'medium' | 'large' | 'full';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize;
  verticalPadding?: boolean;
  horizontalPadding?: boolean;
  centerContent?: boolean;
}
