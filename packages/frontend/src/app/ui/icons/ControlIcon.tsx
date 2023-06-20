import { IFillIcon } from "../iconComponent/interfaceofIcon";

function ControlIcon({ fill, className }: IFillIcon) {
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
        <g id="Type=Black, Name=Control, State=Fill">
          <path
            id="Vector"
            d="M26 16.5C26.8284 16.5 27.5 17.1716 27.5 18V26C27.5 26.8284 26.8284 27.5 26 27.5H18C17.1716 27.5 16.5 26.8284 16.5 26V18C16.5 17.1716 17.1716 16.5 18 16.5H26ZM26 4.5C26.8284 4.5 27.5 5.17157 27.5 6V12.2857C27.5 13.1141 26.8284 13.7857 26 13.7857H18C17.1716 13.7857 16.5 13.1141 16.5 12.2857V6C16.5 5.17157 17.1716 4.5 18 4.5H26ZM12.2857 4.5C13.1141 4.5 13.7857 5.17157 13.7857 6V26C13.7857 26.8284 13.1141 27.5 12.2857 27.5H6C5.17157 27.5 4.5 26.8284 4.5 26V6C4.5 5.17157 5.17157 4.5 6 4.5H12.2857Z"
            fill="black"
            stroke="black"
          />
        </g>
      </svg>
    );
  } else {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Type=Black, Name=Control, State=Base">
          <path
            id="Vector"
            d="M26 16.75C26.6904 16.75 27.25 17.3096 27.25 18V26C27.25 26.6904 26.6904 27.25 26 27.25H18C17.3096 27.25 16.75 26.6904 16.75 26V18C16.75 17.3096 17.3096 16.75 18 16.75H26ZM26 4.75C26.6904 4.75 27.25 5.30964 27.25 6V12.2857C27.25 12.9761 26.6904 13.5357 26 13.5357H18C17.3096 13.5357 16.75 12.9761 16.75 12.2857V6C16.75 5.30964 17.3096 4.75 18 4.75H26ZM12.2857 4.75C12.9761 4.75 13.5357 5.30964 13.5357 6V26C13.5357 26.6904 12.9761 27.25 12.2857 27.25H6C5.30964 27.25 4.75 26.6904 4.75 26V6C4.75 5.30964 5.30964 4.75 6 4.75H12.2857Z"
            stroke="black"
            stroke-width="1.5"
          />
        </g>
      </svg>
    );
  }
}

export default ControlIcon;
