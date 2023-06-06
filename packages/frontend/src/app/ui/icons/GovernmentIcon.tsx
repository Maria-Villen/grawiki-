import { IFillIcon } from "../iconComponent/interfaceofIcon";

function GovernmentIcon({ fill }: IFillIcon) {
  if (fill) {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Type=Black, Name=Government, State=Fill">
          <path
            id="Vector"
            d="M5.09091 23.4545V11.4545H4V9.27273H7.27273V7.09091C7.27273 6.80158 7.38766 6.5241 7.59225 6.31952C7.79683 6.11493 8.07431 6 8.36364 6H23.6364C23.9257 6 24.2032 6.11493 24.4078 6.31952C24.6123 6.5241 24.7273 6.80158 24.7273 7.09091V9.27273H28V11.4545H26.9091V23.4545H28V25.6364H4V23.4545H5.09091ZM17.0909 23.4545V15.8182H14.9091V23.4545H17.0909ZM11.6364 23.4545V15.8182H9.45455V23.4545H11.6364ZM22.5455 23.4545V15.8182H20.3636V23.4545H22.5455ZM9.45455 8.18182V9.27273H22.5455V8.18182H9.45455Z"
            fill="currentColor"
          />
        </g>
      </svg>
    );
  }
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Type=Black, Name=Government, State=Base">
        <path
          id="Vector"
          d="M24.7273 9.27273H28V11.4545H26.9091V23.4545H28V25.6364H4V23.4545H5.09091V11.4545H4V9.27273H7.27273V7.09091C7.27273 6.80158 7.38766 6.5241 7.59225 6.31952C7.79683 6.11493 8.07431 6 8.36364 6H23.6364C23.9257 6 24.2032 6.11493 24.4078 6.31952C24.6123 6.5241 24.7273 6.80158 24.7273 7.09091V9.27273ZM24.7273 11.4545H7.27273V23.4545H10.5455V15.8182H12.7273V23.4545H14.9091V15.8182H17.0909V23.4545H19.2727V15.8182H21.4545V23.4545H24.7273V11.4545ZM9.45455 8.18182V9.27273H22.5455V8.18182H9.45455Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default GovernmentIcon;
