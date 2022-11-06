import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import Image from './components/image_list/ImageList';
import TopRatedMovies from './components/image_list/TopRatedMovies';
import TreadingMovies from './components/image_list/TreadingMovies';
import UpComingMovies from './components/image_list/UpcomingMovies';
import Footer from './components/layout/Footer';

// import './App.css';
import Header from './components/layout/Headeer';


function App() {
  return (
    <div className="App">
      <Header />
      <TreadingMovies />
      <Image />
      <UpComingMovies />
      <TopRatedMovies />
      <Footer />
      
    </div>
  );
}

export default App;
