
function StatCard({ label, value, color }: { label: string, value: string | number, color: string }) {
  const colors: Record<string, string> = {
    blue: "text-blue-600",
    green: "text-emerald-600",
    purple: "text-purple-600",
  };

  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-center transition-all duration-300 hover:shadow-md hover:border-slate-300">
      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">{label}</span>
      <span className={`text-3xl font-black tracking-tight ${colors[color] || "text-slate-800"}`}>{value}</span>
    </div>
  );
}

export default StatCard;