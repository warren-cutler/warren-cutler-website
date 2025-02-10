type PrimaryButtonProps = {
  buttonText: string;
};

export const PrimaryButton = ({ buttonText }: PrimaryButtonProps) => {
  return (
    <button className='bg-primary-200 border border-primary-200 rounded-lg px-2 py-1 duration-300 ease-in text-primary-950 hover:text-secondary-950 hover:bg-secondary-200 hover:border hover:border-secondary-950'>
      {buttonText}
    </button>
  );
};

