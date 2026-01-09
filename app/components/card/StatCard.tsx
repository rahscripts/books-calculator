
function StatCard({ label, value, color }: { label: string, value: string | number, color: string }) {
  const colors: Record<string, string> = {
    blue: "text-blue-600 bg-white border-blue-50 hover:border-blue-100",
    green: "text-emerald-600 bg-white border-emerald-50 hover:border-emerald-100",
    purple: "text-purple-600 bg-white border-purple-50 hover:border-purple-100",
  };

  return (
    <div className={`p-5 rounded-3xl border shadow-[0_2px_8px_-2px_rgba(0,0,0,0.02)] flex flex-col justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${colors[color] || "bg-white border-slate-100"}`}>
      <span className="text-[10px] font-extrabold uppercase tracking-widest opacity-60 mb-2">{label}</span>
      <span className="text-3xl font-black tracking-tight">{value}</span>
    </div>
  );
}

export default StatCard;