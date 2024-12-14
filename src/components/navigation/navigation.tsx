

function Navigation() {
  const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
  const activeCity = 'Amsterdam'; // Vous pouvez changer cela dynamiquement selon l'état

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((city) => (
              <li key={city} className="locations__item">
                <a
                  className={`locations__item-link tabs__item ${
                    city === activeCity ? 'tabs__item--active' : ''
                  }`}
                  href="#"
                >
                  <span>{city}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Navigation;
