import Card from "@/components/Card";
interface InterfaceMedicData {
  children?: React.ReactNode | string;
  title: string;
  value: string;
  color?: string;
}

function DataMedicCard({children, title, value, color }: InterfaceMedicData) {
    const className = `text-4xl font-bold pb-2 ${color}`;
  return (
    <>
      <div className="relative flex-grow border border-gray-300 rounded text-center py-8">
        <h2 className={className}>{value}</h2>
        <h4 className="inline text-gray-500 text-sm">{title}</h4>
        {children}
      </div>
    </>
  );
}

export default DataMedicCard;
