import React from "react";

const places = [
  {
    id: 1,
    name: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    price: 120,
    image: 'img/apartment-01.jpg',
    isPremium: true,
    rating: 80,
  },
  {
    id: 2,
    name: 'Wood and stone place',
    type: 'Room',
    price: 80,
    image: 'img/room.jpg',
    isPremium: false,
    rating: 80,
  },
  {
    id: 3,
    name: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 132,
    image: 'img/apartment-02.jpg',
    isPremium: false,
    rating: 80,
  },
  {
    id: 4,
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: 180,
    image: 'img/apartment-03.jpg',
    isPremium: true,
    rating: 100,
  },
  {
    id: 5,
    name: 'Wood and stone place',
    type: 'Room',
    price: 80,
    image: 'img/room.jpg',
    isPremium: false,
    rating: 80,
  },
];

function Cities() {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">312 places to stay in Amsterdam</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex={0}>
              Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex={0}>
                Popular
              </li>
              <li className="places__option" tabIndex={0}>
                Price: low to high
              </li>
              <li className="places__option" tabIndex={0}>
                Price: high to low
              </li>
              <li className="places__option" tabIndex={0}>
                Top rated first
              </li>
            </ul>
          </form>
          <div className="cities__places-list places__list tabs__content">
            {places.map((place) => (
              <article key={place.id} className="cities__card place-card">
                {place.isPremium && (
                  <div className="place-card__mark">
                    <span>Premium</span>
                  </div>
                )}
                <div className="cities__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img
                      className="place-card__image"
                      src={place.image}
                      width="260"
                      height="200"
                      alt="Place image"
                    />
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">&euro;{place.price}</b>
                      <span className="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button
                      className="place-card__bookmark-button button"
                      type="button"
                    >
                      <svg
                        className="place-card__bookmark-icon"
                        width="18"
                        height="19"
                      >
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      <span className="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{ width: `${place.rating}%` }}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">{place.name}</a>
                  </h2>
                  <p className="place-card__type">{place.type}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Cities;
