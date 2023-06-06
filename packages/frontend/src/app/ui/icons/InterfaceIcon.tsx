import { IFillIcon } from "../iconComponent/interfaceofIcon";

function InterfaceIcon({ fill }: IFillIcon) {
  if (fill) {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Type=Black, Name=Interface, State=Fill">
          <g id="Box">
            <rect
              x="4"
              y="4"
              width="24"
              height="24"
              rx="2"
              fill="currentColor"
            />
          </g>
          <g id="Group">
            <path
              id="Vector"
              d="M8.32306 16.5121L11.3692 19.1231L17.1846 11.8539"
              stroke="white"
              stroke-width="1.5"
            />
            <path
              id="Vector_2"
              d="M18.2923 19.4001H23.8308"
              stroke="white"
              stroke-width="1.5"
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
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Type=Black, Name=Interface, State=Base">
        <g id="Frame 34374">
          <g id="Group">
            <path
              id="Vector"
              d="M4.9231 6.92309C4.9231 5.81852 5.81853 4.9231 6.9231 4.9231H25.0769C26.1815 4.9231 27.0769 5.81853 27.0769 6.9231V25.0769C27.0769 26.1815 26.1815 27.0769 25.0769 27.0769H6.92309C5.81852 27.0769 4.9231 26.1815 4.9231 25.0769V6.92309Z"
              stroke="currentColor"
              stroke-width="1.5"
            />
            <path
              id="Vector_2"
              d="M8.24615 16.4352L9.72145 17.6998C10.5803 18.4359 11.8782 18.3139 12.5848 17.4306L17.1077 11.7769"
              stroke="currentColor"
              stroke-width="1.5"
            />
            <path
              id="Vector_3"
              d="M18.2154 19.3232H23.7539"
              stroke="currentColor"
              stroke-width="1.5"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default InterfaceIcon;
