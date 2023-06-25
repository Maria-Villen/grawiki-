/**
 * Component Suggestions
 * Description: A selector of DataList
 * Parameters: data - the list of suggestions
 * Parameter: onSelect - the function to handle when an element of the suggestion list is selected
 */

import classes from "./suggestions.module.sass";
import { IIcon } from "../../iconComponent/interfaceofIcon";
import Icon from "../../iconComponent/Icon";

export interface DataProps {
  icon?: IIcon;
  text: string;
}

export interface ResultProps {
  icon?: IIcon;
  target: { value: string };
}

interface SuggestionProps {
  data: Array<DataProps>;
  onSelect: (value: ResultProps) => void;
}

const Suggestions = ({ data, onSelect }: SuggestionProps) => {
  const applyValue = (el: DataProps) => {
    const value = el.icon
      ? { icon: el.icon, target: { value: el.text } }
      : { target: { value: el.text } };
    onSelect(value); // mimic onchange event
  };

  return (
    <>
      {data
        ? data?.map((el) => (
            <li
              className={classes.item}
              key={el.text}
              onClick={() => applyValue(el)}
            >
              {el.icon && (
                <Icon
                  className={classes.icon}
                  name={el.icon.name}
                  {...el.icon.props}
                />
              )}
              <span>{el.text}</span>
            </li>
          ))
        : null}
    </>
  );
};

export default Suggestions;
