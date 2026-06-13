export const PrimaryBtn = ({ text, classes }) => (
  <button className={`${classes} capitalize font-semibold text-grey-950 bg-limegreen-950 hover:bg-limegreen-900 dark:hover:bg-[#d8ff66] px-6 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-95 cursor-pointer`}>
    {text}
  </button>
);

export const SecondaryBtn = ({ text, classes }) => (
  <button className={`${classes} text-center font-medium text-grey-800 dark:text-white bg-white dark:bg-grey-800 hover:bg-grey-50 dark:hover:bg-grey-700 px-6 py-2.5 border border-grey-200 dark:border-grey-700 rounded-full shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-95 cursor-pointer`}>
    {text}
  </button>
);
