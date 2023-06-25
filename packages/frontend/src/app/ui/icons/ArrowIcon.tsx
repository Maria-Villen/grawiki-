interface IArrowIconProps {
  direction: "up" | "down" | "left" | "right";
  className?: string;
}

const ArrowIcon = ({ direction, className }: IArrowIconProps) => {
  switch (direction) {
    case "down":
      return (
        <svg
          className={className}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Type=Black, Name=Arrow Down, State=Base">
            <path
              id="Icon/Back (Stroke)"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.29623 10.7962L7.925 10.425L7.55377 10.7962C7.75879 11.0013 8.09121 11.0013 8.29623 10.7962ZM7.925 9.68255L3.39623 5.15378C3.19121 4.94876 2.85879 4.94876 2.65377 5.15378C2.44874 5.35881 2.44874 5.69122 2.65377 5.89624L7.55377 10.7962C7.55377 10.7962 7.55377 10.7962 7.925 10.425C8.29623 10.7962 8.29623 10.7962 8.29623 10.7962L13.1962 5.89624C13.4013 5.69122 13.4013 5.35881 13.1962 5.15378C12.9912 4.94876 12.6588 4.94876 12.4538 5.15378L7.925 9.68255Z"
              fill="currentColor"
            />
          </g>
        </svg>
      );
    case "up":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Type=Black, Name=Arrow Top, State=Base">
            <path
              id="Icon/Back (Stroke)"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.55378 5.15377L7.92501 5.525L8.29624 5.15377C8.09121 4.94874 7.7588 4.94874 7.55378 5.15377ZM7.92501 6.26746L12.4538 10.7962C12.6588 11.0013 12.9912 11.0013 13.1962 10.7962C13.4013 10.5912 13.4013 10.2588 13.1962 10.0538L8.29624 5.15377C8.29624 5.15377 8.29624 5.15377 7.92501 5.525C7.55378 5.15377 7.55378 5.15377 7.55378 5.15377L2.65377 10.0538C2.44875 10.2588 2.44875 10.5912 2.65377 10.7962C2.8588 11.0013 3.19121 11.0013 3.39624 10.7962L7.92501 6.26746Z"
              fill="currentColor"
            />
          </g>
        </svg>
      );

    case "left":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Type=Black, Name=Arrow Left, State=Base">
            <path
              id="Icon/Back (Stroke)"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.15378 8.79623L5.52501 8.425L5.15378 8.05377C4.94876 8.25879 4.94876 8.59121 5.15378 8.79623ZM6.26748 8.425L10.7962 3.89623C11.0013 3.69121 11.0013 3.35879 10.7962 3.15377C10.5912 2.94874 10.2588 2.94874 10.0538 3.15377L5.15378 8.05377C5.15376 8.05379 5.15378 8.05377 5.52501 8.425C5.15378 8.79623 5.15376 8.79621 5.15378 8.79623L10.0538 13.6962C10.2588 13.9013 10.5912 13.9013 10.7962 13.6962C11.0013 13.4912 11.0013 13.1588 10.7962 12.9538L6.26748 8.425Z"
              fill="currentColor"
            />
          </g>
        </svg>
      );
    case "right":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Type=Black, Name=Arrow Right, State=Base">
            <path
              id="Icon/Back (Stroke)"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.7962 8.05378L10.425 8.42501L10.7962 8.79624C11.0013 8.59121 11.0013 8.2588 10.7962 8.05378ZM9.68255 8.42501L5.15378 12.9538C4.94876 13.1588 4.94876 13.4912 5.15378 13.6962C5.35881 13.9013 5.69122 13.9013 5.89624 13.6962L10.7962 8.79624C10.7963 8.79621 10.7962 8.79624 10.425 8.42501C10.7962 8.05378 10.7963 8.0538 10.7962 8.05378L5.89624 3.15378C5.69122 2.94875 5.35881 2.94875 5.15378 3.15378C4.94876 3.3588 4.94876 3.69121 5.15378 3.89624L9.68255 8.42501Z"
              fill="currentColor"
            />
          </g>
        </svg>
      );
  }
};

export default ArrowIcon;
