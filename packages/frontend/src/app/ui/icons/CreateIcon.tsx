function CreateIcon({ className }: { className: string }) {
  return (
    <svg
      width="24"
      height="24"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 17.4599V20.4999C3 20.7799 3.22 20.9999 3.5 20.9999H6.54C6.67 20.9999 6.8 20.9499 6.89 20.8499L17.81 9.93994L14.06 6.18994L3.15 17.0999C3.05 17.1999 3 17.3199 3 17.4599ZM20.71 7.03994C21.1 6.64994 21.1 6.01994 20.71 5.62994L18.37 3.28994C17.98 2.89994 17.35 2.89994 16.96 3.28994L15.13 5.11994L18.88 8.86994L20.71 7.03994Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default CreateIcon;
