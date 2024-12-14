function Gallery() {
  const images = [
    { id: 1, src: 'img/room.jpg', alt: 'Photo studio' },
    { id: 2, src: 'img/apartment-01.jpg', alt: 'Photo studio' },
    { id: 3, src: 'img/apartment-02.jpg', alt: 'Photo studio' },
    { id: 4, src: 'img/apartment-03.jpg', alt: 'Photo studio' },
    { id: 5, src: 'img/studio-01.jpg', alt: 'Photo studio' },
    { id: 6, src: 'img/apartment-01.jpg', alt: 'Photo studio' },
  ];
  return (
    <main className='page__main page__main--offer'>
      <section className='offer'>
        <div className='offer__gallery-container container'>
          <div className='offer__gallery'>
            {images.map((image) => (
              <div key={image.id} className='offer__image-wrapper'>
                <img className='offer__image' src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
export default Gallery;
