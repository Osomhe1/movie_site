import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Moment from 'react-moment'
// import { TiStarFullOutline } from 'react-icons/ti'
// import { Link } from 'react-router-dom'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { Container } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
// import { Theme } from '../Components/Theme'

const NewTrendingMovies = () => {


    
    const [popularMovies, setPopularMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentpage, setCurrentpage] = useState(1)
    const IMAGE_PATH = 'https://image.tmdb.org/t/p/w1280'

    useEffect(() => {
        const getPopularmovies = async () => {
          try {
            const response = await axios.get(
              `https://api.themoviedb.org/3/movie/popular?api_key=a0f1f6057234b63753542ad9f7ce93bb&language=en-US&page=${currentpage}`
            )
            setPopularMovies(response.data.results)
            console.log(response.data.results, 'popular')
            setLoading(true)
          } catch (err) {
            alert(err.message)
          }
        }
      getPopularmovies()
    })



  return (
    <Container maxWidth='xl'>
      <div className='container mx-auto pt-10 sm:pt-14 '>
        <h1 className=' text-center text-lg  font-semibold md:font-bold md:text-2xl mx-3 sm:mx-6 '>
          Trending Movies
        </h1>
        <Carousel
          interval={4000}
          animation='slide'
          stopAutoPlayOnHover
          swipe
        //   className='hidden md:inline'
          options={{
            perPage: 2,
            page: 1,
            // arrows: true,
            pagination: false,
            drag: 'free',
            gap: '3rem',
            autoplay: true,
            rewind: true,
          }}
        >
          {loading &&
            popularMovies.map((movieslist) => (
              <SplideSlide key={movieslist.id} className='    '>
                {/* <Link to={'/movie/' + movieslist.id}> */}
                <img
                  className='rounded-2xl w-full mt-6  md:max-h-[250px] lg:max-h-[300px] lg:w-fit lg:mx-auto cover'
                  src={IMAGE_PATH + movieslist.backdrop_path}
                  alt={movieslist.title}
                />
                <div className=' text-center text-xs mt-2  font-semibold'>
                  <h1 className='text-xl lg:text-2xl font-bold sm:mt-1 md:mt-2 mt-2 mx-1'>
                    {movieslist.title}
                  </h1>
                  <h1 className=' mt-1'>
                    <Moment format='yyyy'>{movieslist.release_date}</Moment>
                  </h1>
                </div>
                {/* </Link> */}
              </SplideSlide>
            ))}
        </Carousel>

      </div>
    </Container>
  )
}

export default NewTrendingMovies
