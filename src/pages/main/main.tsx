import Navigation from 'src/components/navigation/navigation';
import Header from '../../components/header/header';
import Cities from 'src/components/cities/cities';
import Map from 'src/components/map/map';

function Main() {
  return (
    <div>
      <Header />
      <Navigation />
      <Cities />
      <Map/>
    </div>
  );
}

export default Main;
