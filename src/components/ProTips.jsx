


export default function ProTips({ text }) {
  return(
    <div className="flex items-center gap-2">
      <div className="bg-(--primary-color) h-2 w-2 rounded-xs"></div>
      <p className="text-sm text-(--text-color) w-full">{text}</p>
    </div>
  )
}