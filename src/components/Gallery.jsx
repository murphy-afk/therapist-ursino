import { useEffect, useState } from 'react'

const base = import.meta.env.BASE_URL

// Simple image grid with a keyboard controlled lightbox
export default function Gallery({ images }) {
  const [index, setIndex] = useState(null)

  useEffect(() => {
    if (index === null) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIndex(null)
      if (event.key === 'ArrowRight') setIndex((i) => (i + 1) % images.length)
      if (event.key === 'ArrowLeft') setIndex((i) => (i - 1 + images.length) % images.length)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [index, images.length])

  if (images.length === 0) return null

  const close = () => setIndex(null)
  const prev = (event) => {
    event.stopPropagation()
    setIndex((index - 1 + images.length) % images.length)
  }
  const next = (event) => {
    event.stopPropagation()
    setIndex((index + 1) % images.length)
  }

  return (
    <div>
      <div className="gallery">
        {images.map((image, i) => (
          <button key={image} className="gallery-thumb" onClick={() => setIndex(i)}>
            <img src={`${base}${image}`} alt={`Foto dello studio ${i + 1}`} />
          </button>
        ))}
      </div>
      {index !== null && (
        <div className="lightbox" onClick={close}>
          <button className="lightbox-close" onClick={close}>Chiudi</button>
          <img
            className="lightbox-image"
            src={`${base}${images[index]}`}
            alt="Foto dello studio ingrandita"
            onClick={(event) => event.stopPropagation()}
          />
          <button className="lightbox-prev" onClick={prev}>Precedente</button>
          <button className="lightbox-next" onClick={next}>Successiva</button>
        </div>
      )}
    </div>
  )
}
