

export default function ServiceDetails( header, body) {
  return(
    <div className="flex flex-col gap-2 md-gap-4">
          <h2>{header}</h2>
          <p>{body}</p>
    </div>
  )
}