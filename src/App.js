import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import Image from './components/image_list/ImageList';
import NewTrendingMovies from './components/image_list/NewTrendingMovies';
import TopRatedMovies from './components/image_list/TopRatedMovies';
// import TrendingMovies from './components/image_list/TrendingMovies';
import UpComingMovies from './components/image_list/UpcomingMovies';
import Footer from './components/layout/Footer';

// import './App.css';
import Header from './components/layout/Headeer';


function App() {
  return (
    <div className="App">
      <Header />
      <NewTrendingMovies />
      {/* <TrendingMovies /> */}
      <Image />
      <UpComingMovies />
      <TopRatedMovies />
      <Footer />
      
    </div>
  );
}

export default App;
