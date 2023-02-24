declare module 'react-awesome-spinners' {
  export interface SpinnerProps {
    size?: number;
    color?: string;
    sizeUnit?: string
  }

  export const Spinner: React.FC<SpinnerProps>;
  export const Ring: React.FC<SpinnerProps>;
  export const Ellipsis: React.FC<SpinnerProps>;
  export const Grid: React.FC<SpinnerProps>;
  export const Circle: React.FC<SpinnerProps>;
  export const Default: React.FC<SpinnerProps>;

}