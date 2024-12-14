import AvisOffer from 'src/components/avis-offer/avisOffer';
import Header from 'src/components/header/header';
import MapOffer from 'src/components/map-offer/mapOffer';
import OfferStudio from 'src/components/offer/offer-studio';
import Gallery from 'src/components/photosoffer/gallery';


function Offer() {
  return (
    <div>
      <Header />
      <Gallery />
      <OfferStudio />
      <AvisOffer />
      <MapOffer />
    </div>
  );
}

export default Offer;
