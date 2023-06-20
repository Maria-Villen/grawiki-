import { IFillIcon } from "../iconComponent/interfaceofIcon";

function ToysIcon({ fill, className }: IFillIcon) {
  if (fill) {
    return (
      <svg
        width="32"
        height="32"
        className={className}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Type=Black, Name=Toys, State=Fill">
          <g id="Toys">
            <path
              id="Vector"
              d="M26.8 14.8H22.6V5.2C22.6 4.88174 22.4736 4.57652 22.2485 4.35147C22.0235 4.12643 21.7183 4 21.4 4H10.6C10.2817 4 9.97652 4.12643 9.75147 4.35147C9.52643 4.57652 9.4 4.88174 9.4 5.2V14.8H5.2C4.88174 14.8 4.57652 14.9264 4.35147 15.1515C4.12643 15.3765 4 15.6817 4 16V26.8C4 27.1183 4.12643 27.4235 4.35147 27.6485C4.57652 27.8736 4.88174 28 5.2 28H26.8C27.1183 28 27.4235 27.8736 27.6485 27.6485C27.8736 27.4235 28 27.1183 28 26.8V16C28 15.6817 27.8736 15.3765 27.6485 15.1515C27.4235 14.9264 27.1183 14.8 26.8 14.8ZM14.8 25.6H6.4V17.2H14.8V25.6ZM11.8 14.8V6.4H20.2V14.8H11.8ZM25.6 25.6H17.2V17.2H25.6V25.6Z"
              fill="currentColor"
            />
            <rect
              id="Rectangle 1229"
              x="7.00012"
              y="17.8001"
              width="7.2"
              height="7.2"
              fill="currentColor"
            />
            <rect
              id="Rectangle 1230"
              x="17.8002"
              y="17.8001"
              width="7.2"
              height="7.2"
              fill="currentColor"
            />
            <rect
              id="Rectangle 1231"
              x="12.4001"
              y="7.00015"
              width="7.2"
              height="7.2"
              fill="currentColor"
            />
          </g>
        </g>
      </svg>
    );
  }
  return (
    <svg
      width="32"
      height="32"
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Type=Black, Name=Toys, State=Base">
        <path
          id="Vector"
          d="M26.8 14.8H22.6V5.2C22.6 4.88174 22.4736 4.57652 22.2485 4.35147C22.0235 4.12643 21.7183 4 21.4 4H10.6C10.2817 4 9.97652 4.12643 9.75147 4.35147C9.52643 4.57652 9.4 4.88174 9.4 5.2V14.8H5.2C4.88174 14.8 4.57652 14.9264 4.35147 15.1515C4.12643 15.3765 4 15.6817 4 16V26.8C4 27.1183 4.12643 27.4235 4.35147 27.6485C4.57652 27.8736 4.88174 28 5.2 28H26.8C27.1183 28 27.4235 27.8736 27.6485 27.6485C27.8736 27.4235 28 27.1183 28 26.8V16C28 15.6817 27.8736 15.3765 27.6485 15.1515C27.4235 14.9264 27.1183 14.8 26.8 14.8ZM14.8 25.6H6.4V17.2H14.8V25.6ZM11.8 14.8V6.4H20.2V14.8H11.8ZM25.6 25.6H17.2V17.2H25.6V25.6Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default ToysIcon;
