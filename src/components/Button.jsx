import clsx from "clsx";

const Button = ({
  variant = "primary",
  type,
  children,
  className,
  onView,
  isLoading,
  size = "lg",
  ...props
}) => {
  const variantButton = {
    primary:
      "bg-bgGray text-sm sm:text-base border-[1px] border-bgGray rounded-full text-white py-2 px-8",
    secondary:
      "bg-bgGray text-sm sm:text-base border-[1px] border-white rounded-full text-white py-2 px-8",
    login:
      "text-header text-sm sm:text-base border-[1px] border-bgGray bg-white rounded-full py-2 px-6",
    signup: "text-white text-sm sm:text-base  bg-bgGray rounded-full py-2 px-6",
    
    tertiary:
      "bg-bgGray text-sm sm:text-base border-[1px]  rounded-lg text-white py-2 px-8",
  };

  const buttonSizes = {
    lg: "w-full",
    md: "w-full",
    sm: "w-full",
  };

  return (
    <div>
      <button
        className={clsx(
          variantButton[variant],
          type,
          (isLoading = { isLoading }),
          buttonSizes[size],
          className
        )}
        onClick={onView}
        disabled={isLoading}
        {...props}
       
      >
        {children}
      </button>
    </div>
  );
};
// bg-bgGray w-full text-sm sm:text-base border-[1px] border-white rounded-md text-white py-2 px-8

export default Button;
