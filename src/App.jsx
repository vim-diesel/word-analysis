import Container from './Container';
import Footer from './Footer';
import Header from './Header';
import { Toaster } from 'react-hot-toast';

// TODO:
// 1. Add media queries to make the app responsive.

function App() {
  return (
    <>
      <Header />
      <Container />
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
