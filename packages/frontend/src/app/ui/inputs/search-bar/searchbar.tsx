import classes from "./searchbar.module.sass";
import { FindIcon } from "../../icons";
import { useState, ChangeEvent } from "react";

interface ISearchInput extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  fluid?: boolean;
  disabled?: boolean;
}

const Searchbar = ({ className, fluid, disabled, ...props }: ISearchInput) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div
      className={`${classes.searchbar} ${disabled && classes.disabled} ${
        fluid && classes.fluid
      } ${className}`}
    >
      <form onSubmit={onSubmit}>
        <button className={classes.searchbar_icon} type="submit">
          <FindIcon />
        </button>
        <input
          type="text"
          className={classes.searchbar_input}
          placeholder="Buscar temas"
          onChange={handleChange}
          value={value}
          disabled={disabled}
          {...props}
        />
      </form>
    </div>
  );
};

export default Searchbar;
