import Container from './Container';
import Footer from './Footer';
import Header from './Header';
import { Toaster } from 'react-hot-toast';

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
