export interface IChamp extends React.InputHTMLAttributes<HTMLInputElement> {
  isTouched: boolean | undefined;
  isError: string | undefined;
  ref?: React.MutableRefObject<HTMLInputElement | null>;
}
