

export const GifItem = ({url, title}) => {
    console.log({title, url})
  return (
    <div className="card">
        <img src={ url } alt='imagen' />
        <p> { title }</p>
    </div>
  )
}
// <li key={id}> {title}         </li>