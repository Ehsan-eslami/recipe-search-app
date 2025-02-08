type ImageType = {
  className: string
  src: string
  alt: string
}

export const Image = ({className, src, alt}: ImageType ) => {
  return (
    <img className={className}  src={src} alt={alt} />
  )
}
