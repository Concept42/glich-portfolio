interface Props {
  children: string;
}

const BasicButton = ({ children }: Props) => {
  return (
    <button className=" px-4 py-2 border-solid border-2 border-primary-orange text-primary-text font-light hover:bg-secondary-orange hover:text-white">
      {children}
    </button>
  );
};

export default BasicButton;
