

export default function ProcessCard({ title, description, Index }) {
  return (
    <div className=" p-6 rounded-lg  gap-2 flex flex-col text-white">
      <p className="text-5xl md:text-7xl font-bold opacity-30">{Index}</p>
      <h3 className="text-2xl md:text-4xl font-bold mb-2 tracking-tighter">{title}</h3>
      <p className="text-sm md:text-lg md:font-light">{description}</p>
    </div>
  );
}