// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, activeThumbnail, getActiveThumbnail} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails

  const clickedImg = () => {
    getActiveThumbnail(id)
  }

  const imageStyles = activeThumbnail === id ? 'image_tab' : 'change_tab'

  return (
    <li>
      <button type="button" onClick={clickedImg} className="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={imageStyles}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
