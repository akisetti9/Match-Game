import './index.css'

const MainImage = props => {
  const {imageDetails} = props
  const {imageUrl} = imageDetails
  return (
    <div className="main-image-container">
      <img
        src={imageUrl}
        alt="match"
        className="main-image-size"
        key={imageUrl}
      />
    </div>
  )
}

export default MainImage
