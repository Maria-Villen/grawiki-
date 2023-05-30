export interface IChamp extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Tells if the input was touched or not. Boolean.
   */
  isTouched: boolean | undefined;
  /**
   * If there is an error, its contain the error message.
   */
  isError: string | undefined;
  /**
   * To add custom styles for the input.
   */
  className?: string;
}
