interface CardProps {
  children: React.ReactNode;
  customPadding?: boolean;
}

const Card = ({ children, customPadding }: CardProps) => {
  const padding = customPadding ? "" : "p-3";
  return (
    <>
      <div className="flex flex-col mt-2">
        <div className={"relative flex flex-col md:flex-row md:space-x-5 md:space-y-0 rounded-xl shadow-lg" + padding  + "border border-white dark:border-none bg-white dark:bg-slate-500 overflow-hidden"}>
          <div className="w-full bg-white dark:bg-slate-500">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
