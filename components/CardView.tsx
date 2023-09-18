interface CardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const CardView = ({ title, description, children }: CardProps) => {
  return (
    <>
      <div className="md:m-10 md:p-10">
        <div className="text-4xl font-semibold">
          <h1>{title}</h1>
        </div>
        <div className="mt-2">{description}</div>
        {children}
      </div>
    </>
  );
};

export default CardView;
