import  React, {useEffect, useState} from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import { Box, Container, Typography } from '@mui/material'
// import Pagination from '@mui/material/Pagination'
// import Search from './SearchMovies'
import axios from 'axios'
import Moment from 'react-moment'

export default function UpComingMovies() {


  

  
  const [upcomingMovies, setUpcomingMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentpage, setCurrentpage] = useState(1)
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/w1280'
  
        useEffect(() => {

          const getUpcomingmovies = async () => {
            try {
              const response = await axios.get(
                `https://api.themoviedb.org/3/movie/upcoming?api_key=a0f1f6057234b63753542ad9f7ce93bb&language=en-US&page=${currentpage}`
              )
              setUpcomingMovies(response.data.results)
              console.log(response.data.results, 'upcoming')
              setLoading(true)
            } catch (err) {
              alert(err.message)                                                            
            }
          }
          getUpcomingmovies()

        })


  if (!upcomingMovies) return null

  


  return (
    <>
      <Box>
        <h2 className='text-center text-lg font-bold border-b-2 '>
          Up Coming Movies
        </h2>
      </Box>
      <Container maxWidth='xl' className='p-5'>
        <ImageList sx={{ width: '100%', objectFit: 'cover' }} cols={5}>
          {loading &&
            upcomingMovies.map((movieslist) => (
              <Box>
                <ImageListItem key={movieslist?.id}>
                  <img
                    src={IMAGE_PATH + movieslist?.poster_path}
                    srcSet={`${movieslist?.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={movieslist?.title}
                    loading='lazy'
                  />
                  <div className='flex justify-between text-xs mt-2 mx-1 font-semibold'>
                    {movieslist?.vote_average > 5 ? (
                      <h1 className='flex text-gray-300 font-bold'>
                        <span className='text-green-600'>
                          Rating: {movieslist?.vote_average}
                        </span>
                      </h1>
                    ) : (
                      <h1 className='flex text-gray-300 font-bold'>
                        <span className='text-red-600'>
                          Rating: {movieslist?.vote_average}
                        </span>
                      </h1>
                    )}

                    <h1>
                      <Moment format='yyyy'>{movieslist?.release_date}</Moment>
                    </h1>
                  </div>
                  <h1 className='text-xs font-bold sm:mt-1 md:mt-2 mt-2 mx-1'>
                    {movieslist?.title}
                  </h1>
                </ImageListItem>
              </Box>
            ))}
        </ImageList>
        <Box className='py-6 w-[500px] m-auto '>
         {/* page button */}
          <div className='flex  justify-center mt-4  space-x-4 pb-10'>
            <button
              onClick={() => {
                if (currentpage === 1) {
                  return
                } else {
                  setCurrentpage(currentpage - 1)
                }
              }}
            >
              
              <span class='sr-only'>Previous</span>
              <svg
                aria-hidden='true'
                class='w-5 h-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </button>
            <Typography
              variant='h6'
              component='h6'
              className='bg-purple-700 text-white p-2 h-[40px] w-[40px] text-center rounded-[50%]'
            >
              {currentpage}
            </Typography>

            <button onClick={() => setCurrentpage(currentpage + 1)}>
              <span class='sr-only'>Next</span>
              <svg
                aria-hidden='true'
                class='w-5 h-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </button>
          </div>
        </Box>
      </Container>
    </>
  )
}

