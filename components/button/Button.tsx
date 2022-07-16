type IButtonProps = {
  xl?: boolean;
  children: string;
};

const Button = (props: IButtonProps) => {
  return (
    <div
      className={`btn btn-xl btn-primary inline-block rounded-md text-black bg-primary-500 font-extrabold text-xl py-4 px-6`}
    >
      {props.children}
    </div>
  );
};

export { Button };
