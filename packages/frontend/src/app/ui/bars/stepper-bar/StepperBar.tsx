import { useState } from "react";
import Icon from "../../iconComponent/Icon";
import classes from "./stepperBar.module.sass";
import { CircleButton } from "../..";

interface IStepperBarProps {
  pages: number;
  active: number;
  onChange: (page: number) => void;
}

const StepperBar = ({ pages, active, onChange }: IStepperBarProps) => {
  const [isBackActive, setIsBackActive] = useState(false);
  const [isNextActive, setIsNextActive] = useState(false);
  const [activePage, setActivePage] = useState(active);

  const handlePageChange = (page: number) => {
    if (page <= 0) {
      page = 1;
    } else if (page > pages) {
      page = pages;
    }
    setActivePage(page);
    updateButtonStates(page);
    onChange(activePage);
  };

  const updateButtonStates = (page: number) => {
    setIsBackActive(page > 1);
    setIsNextActive(page < pages);
  };

  if (pages <= 1) {
    return <></>;
  } else {
    return (
      <div className={classes.stepperBar}>
        {isBackActive && (
          <div
            className={classes.back}
            onClick={() => handlePageChange(activePage - 1)}
          >
            <Icon className={classes.icon} name="ArrowIcon" direction="left" />
            <span>Atras</span>
          </div>
        )}
        <div className={classes.buttons}>
          {[...Array(pages)].map((_, index) => (
            <CircleButton
              key={index}
              active={index + 1 === activePage}
              aria-label={`Pagina ${index + 1}`}
              onClick={() => handlePageChange(index + 1)}
            />
          ))}
        </div>
        {isNextActive && (
          <div
            className={classes.next}
            onClick={() => handlePageChange(activePage + 1)}
          >
            <span>Siguiente</span>
            <Icon className={classes.icon} name="ArrowIcon" direction="right" />
          </div>
        )}
      </div>
    );
  }
};
export default StepperBar;
