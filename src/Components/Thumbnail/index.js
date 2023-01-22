import './index.css'

const Thumbnail = props => {
  const {imageDet, logThumbnailId} = props
  const {id, thumbnailUrl} = imageDet
  const onClickThumb = () => {
    logThumbnailId(id)
  }
  return (
    <li className="thumbnail" key={thumbnailUrl}>
      <button type="button" className="thumbnail-button" onClick={onClickThumb}>
        <img src={thumbnailUrl} alt={thumbnailUrl} className="thumb-image" />
      </button>
    </li>
  )
}

export default Thumbnail
