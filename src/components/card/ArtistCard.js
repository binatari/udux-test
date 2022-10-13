import React from 'react'

const ArtistCard = ({image, header, body}) => {
  return (
    <div className="music-card">
    <img src={image} />
    <p>
      {header}
      <span>{body}</span>
    </p>
  </div>
  )
}

export default ArtistCard