interface IPasswordEyeIconProps {
  hidden: boolean;
  className?: string;
}

function PasswordEyeIcon({ hidden, className }: IPasswordEyeIconProps) {
  if (hidden) {
    return (
      <svg
        width="32"
        height="32"
        className={className}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Type=Black, Name=Password Hide, State=Base" opacity="0.5">
          <g id="Group">
            <path
              id="Vector"
              d="M5 5L27 27"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M10.184 10.1948C6.83127 12.4748 5 16 5 16C5 16 9 24 16 24C18.2553 24 20.1991 22.9007 21.7982 21.8172M15 8C15.3579 7.9581 15.6247 8.00001 16 8.00001C23 8.00001 27 16 27 16C27 16 26.239 17.4649 24.8 19.1168"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_3"
              d="M18.2 18.4598C17.6161 18.9823 16.8453 19.3001 16 19.3001C14.1774 19.3001 12.7 17.8227 12.7 16.0001C12.7 15.094 13.0651 14.2733 13.6563 13.677"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
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
      <g id="Type=Black, Name=Password Show, State=Base" opacity="0.5">
        <g id="Group">
          <path
            id="Vector"
            d="M5 16C5 16 9 8 16 8C23 8 27 16 27 16"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Vector_2"
            d="M5 16C5 16 9 24 16 24C23 24 27 16 27 16"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Vector_3"
            d="M16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
    </svg>
  );
}

export default PasswordEyeIcon;
