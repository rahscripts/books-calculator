

function StatCard({ label, value, color }: { label: string, value: string | number, color: string }) {
  const colors: Record<string, string> = {
    blue: "text-blue-600 bg-blue-50",
    green: "text-emerald-600 bg-emerald-50",
    purple: "text-purple-600 bg-purple-50",
  };

  return (
    <div className={`p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-center ${colors[color] || "bg-white"}`}>
      <span className="text-xs font-bold uppercase opacity-70 mb-1">{label}</span>
      <span className="text-3xl font-extrabold">{value}</span>
    </div>
  );
}

export default StatCard;