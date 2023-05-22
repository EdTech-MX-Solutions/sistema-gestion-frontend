import Card from "@/components/Card";
interface InterfaceMedicData {
  title: string;
  value: string;
  color?: string;
}

function DataMedicCard({ title, value, color }: InterfaceMedicData) {
    const className = `text-4xl font-bold pb-2 ${color}`;
  return (
    <>
      <div className="flex-grow border border-gray-300 rounded text-center py-8">
        <h2 className={className}>{value}</h2>
        <h4 className="inline text-gray-500 text-sm">{title}</h4>
      </div>
    </>
  );
}

export default DataMedicCard;
