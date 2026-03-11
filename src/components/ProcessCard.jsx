

export default function ProcessCard({ title, description, Index }) {
  return (
    <div className="bg-(--background-color) p-6 rounded-lg shadow-lg gap-2 flex flex-col text-(--text-color)">
      <p className="text-5xl font-bold opacity-30">{Index}</p>
      <h3 className="text-2xl font-bold text-(--primary-color) mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
}