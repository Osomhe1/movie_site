import React, { useEffect } from "react";
import { Box, Container, ImageListItem } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import './TrendingMovies.css'
import axios from 'axios'
import { useState } from "react";


function Item({ item }) {

  const [trends, setTrends] = useState(null)

  // var config = {
  //   method: 'get',
  //   url: 'https://api.themoviedb.org/3/trending/all/day?api_key=a0f1f6057234b63753542ad9f7ce93bb',
  //   headers: {},
  // }

  useEffect(() => {
 

    const fun = async () =>{
      try{

        const response = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=a0f1f6057234b63753542ad9f7ce93bb`)
        console.log(response?.data)
        setTrends(response?.data.results)
      }catch (error){
        console.log(error.message)
      }

    }

  fun()
  }, [])
  
  if(!trends) return null;
 const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";

  return (
    <div style={{ width: '100%' }}>
      <Box
      // sx={{ width: '100%', objectFit: 'cover' }}
      >
        <div className='  w-full  bg-slate-500 '>
          {/* h-[400px]  */}
          <div
            className=' movies_list bg-red-500 '
            key={item.img}
            // sx={{ width: '100%', objectFit: 'cover' }}
          >
            {/* <img
              // src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              src={item.img}
              // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading='lazy'
              // className='object-cover  '
              className=' object-cover h[400px]'
            /> */}
            <img
              key={item.img}
              id='movies'
              className=' h-[250px] md:h-[400px] object-cover object-center  '
              // src={item.img}
              // src={`${IMAGE_PATH}${trend.backdrop_path}`}
              src={IMAGE_PATH + trends.backdrop_path}
              // src={`https://image.tmdb.org/t/p/w185/${trend.poster_path}`}
              // absolute src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              // src='https://plus.unsplash.com/premium_photo-1661281434999-01f7de9098e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              alt=' description'
            />
          </div>
        </div>
      </Box>
      <div className='text-white'>{item.description}</div>
    </div>
  )
}

export default function TrendingMovies() {
  var items = [
    {
      name: 'Random Name #1',
      description: '1 - Probably the most random thing you have ever seen!',
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      name: 'Random Name #2',
      description: '2- Hello World!',
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      name: 'Random Name #3',
      description: '3 - Hello World!',
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
  ]

  const [index, setIndex] = React.useState(0)

  const handleChange = (cur, prev) => {
    setIndex(cur)
    console.log(cur, prev)
  }

  return (
    <div>
      <Container
        className='py-4 '
        maxWidth='xl'
        // maxHeight='sm'
        // height='50%'
        // sx={{ m: 'auto', maxHeight:'xs', maxWidth: 'lg' }}
      >
        <Carousel
          index={index}
          onChange={handleChange}
          interval={4000}
          animation='slide'
          indicators={false}
          stopAutoPlayOnHover
          swipe
          // height={300}
          // className='my-carousel xl:w-[1200px]  '
          // className='h-[300px] md:h-[600px]  '
        >
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
        {items.map((item, i) => (
          <button
            onClick={() => setIndex(i)}
            style={{ background: i === index ? '#ccc' : '#fff' }}
            // className='text-center'
          >
            {i}
          </button>
        ))}
      </Container>
    </div>
  )
}
