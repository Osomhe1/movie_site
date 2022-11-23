
import  React, { useEffect, useState } from 'react'
import { Box, Container, Typography } from '@mui/material'
import Search from './SearchMovies'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import ListSubheader from '@mui/material/ListSubheader'
import IconButton from '@mui/material/IconButton'
import InfoIcon from '@mui/icons-material/Info'
import axios from 'axios'
import Moment from 'react-moment'

export default function Image() {

   const [movies, setMovies] = useState([])
   const [loading, setLoading] = useState(false)
   const [currentpage, setCurrentpage] = useState(1)
   const IMAGE_PATH = 'https://image.tmdb.org/t/p/w1280'

      useEffect(() => {
        const getAllMovies = async () => {
          try {
            const response = await axios
              .get(
              `https://api.themoviedb.org/3/movie/now_playing?api_key=a0f1f6057234b63753542ad9f7ce93bb&language=en-US&page=${currentpage}`
              )
            setMovies(response.data.results)
            console.log(response.data.results, 'now playinf')
            setLoading(true)
          } catch (err) {
            alert(err.message)
          }
        }
        getAllMovies()
      },[])

      if (!movies) return null


  return (
    <Container maxWidth='xl'>
      <Search />
      <ImageList sx={{ width: '100%', objectFit: 'cover' }}>
        {/* sx={{ width: 500, height: 450 }} */}
        <ImageListItem key='Subheader' cols={5}>
          <ListSubheader component='div'>Now Playing</ListSubheader>
        </ImageListItem>
        {loading &&
          movies.map((item) => (
            <ImageListItem key={item?.id}>
              <img
                src={IMAGE_PATH + item?.poster_path}
                srcSet={`${item?.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item?.title}
                loading='lazy'
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.title}`}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
              <div className='flex justify-between text-xs mt-2 mx-1 font-semibold'>
                {item?.vote_average > 5 ? (
                  <h1 className='flex text-gray-300 font-bold'>
                    <span className='text-green-600'>
                      Rating: {item?.vote_average}
                    </span>
                  </h1>
                ) : (
                  <h1 className='flex text-gray-300 font-bold'>
                    <span className='text-red-600'>
                      Rating: {item?.vote_average}
                    </span>
                  </h1>
                )}

                <h1>
                  <Moment format='yyyy'>{item?.release_date}</Moment>
                </h1>
              </div>
            </ImageListItem>
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
  )
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    cols: 2,
  },
]

