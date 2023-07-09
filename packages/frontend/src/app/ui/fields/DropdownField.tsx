import { SlipButton, Suggestions } from "..";
import { DataProps, ResultProps } from "../layouts/suggestions/suggestions";
import { IIcon } from "../iconComponent/interfaceofIcon";
import { ChangeEvent, InputHTMLAttributes, useRef, useState } from "react";

interface DropDownFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: IIcon;
  fluid?: boolean;
  data: Array<DataProps>;
  value?: string | number | readonly string[] | undefined;
}

const DropdownField = ({
  icon,
  fluid,
  data,
  value,
  onChange,
  ...props
}: DropDownFieldProps) => {
  const [myIcon, setMyIcon] = useState(icon);
  const [myValue, setValue] = useState(value || "");
  const [closeControl, setCloseControl] = useState(false);
  const [suggestionList, setSuggestionList] = useState(data);
  const inputRef = useRef<HTMLInputElement>(null);

  const changeValue = (values: string, e: ChangeEvent<HTMLInputElement>) => {
    setValue(values);
    onChange && onChange(e);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" || event.key === "Tab") {
      setCloseControl(!closeControl); // Cierra las sugerencias
      inputRef.current?.blur(); // Remueve el foco del elemento de entrada
    }
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const newvalue = event.target.value;
    if (!newvalue) {
      setMyIcon(undefined);
      setSuggestionList(data);
      changeValue("", event);
    } else {
      changeValue(newvalue, event);
      const newList = data.filter((el) =>
        el.text.toLowerCase().match(newvalue.toLowerCase())
      );
      if (
        newList.length === 1 &&
        newList[0]?.text.toLowerCase() === newvalue.toLowerCase()
      ) {
        const suggestionList = data.filter(
          (el) => el.text.toLowerCase() !== newList[0].text.toLowerCase()
        );
        if (newList[0].icon) setMyIcon(newList[0].icon);
        setSuggestionList(suggestionList);
        changeValue(newList[0].text, event);
      } else {
        setSuggestionList(newList);
        setMyIcon(undefined);
      }
    }
  };

  const selectHandler = (value: ResultProps) => {
    setValue(value.target.value);
    if (value.icon) setMyIcon(value.icon);
    const newList = data.filter(
      (el) => el.text.toLowerCase() !== value.target.value.toLowerCase()
    );
    setSuggestionList(newList);
    setCloseControl(!closeControl);
    onChange &&
      onChange({
        target: { value: value.target.value },
      } as ChangeEvent<HTMLInputElement>);
  };

  return (
    <div>
      <SlipButton
        ref={inputRef}
        icon={myIcon}
        fluid={fluid}
        closeControler={closeControl}
        value={myValue}
        onChange={onChangeHandler}
        onKeyDown={handleKeyDown}
        {...props}
      >
        <Suggestions data={suggestionList} onSelect={selectHandler} />
      </SlipButton>
    </div>
  );
};

export default DropdownField;
