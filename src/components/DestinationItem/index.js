import './index.css'

const DestinationItem = prop => {
  const {imageDetails} = prop
  const {imgUrl, name} = imageDetails
  return (
    <li className="image-container">
      <img className="img-size" src={imgUrl} alt="Destination" />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
