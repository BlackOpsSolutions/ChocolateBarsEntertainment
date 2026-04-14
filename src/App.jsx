import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Artists from './components/Artists';
import Releases from './components/Releases';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Bookings from './components/Bookings';
import Story from './components/Story';
import ArtistProfile from './components/ArtistProfile';
import SubmitMusic from './components/SubmitMusic';
import useRoute, { ARTIST_ROUTE_TO_SLUG } from './hooks/useRoute';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Artists />
      <Releases />
      <Contact />
    </>
  );
}

export default function App() {
  const route = useRoute();

  let page;
  if (route === 'book') page = <Bookings />;
  else if (route === 'story') page = <Story />;
  else if (route === 'submit') page = <SubmitMusic />;
  else if (ARTIST_ROUTE_TO_SLUG[route]) page = <ArtistProfile slug={ARTIST_ROUTE_TO_SLUG[route]} />;
  else page = <Home />;

  return (
    <>
      <Nav />
      {page}
      <Footer />
    </>
  );
}
