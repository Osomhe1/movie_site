import { Box, Container, ImageListItem } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";


function Item({ item }) {
  return (
    <div style={{ width: '100%' }}>
      <Box
      // sx={{ width: '100%', objectFit: 'cover' }}
      >
        <div className=' bg-no-repeat bg-center bg-cover w-[800px]  h-auto'>
          <ImageListItem
            className=' '
            key={item.img}
            // sx={{ width: '100%', objectFit: 'cover' }}
          >
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading='lazy'
              // className='object-cover  '
              className=' max-w-full h-auto object-center object-cover  '
            />
          </ImageListItem>
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
          className='h-[300px] md:h-[400px] max-w-full '
        >
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
        {items.map((item, i) => (
          <button
            onClick={() => setIndex(i)}
            style={{ background: i === index ? '#ccc' : '#fff' }}
          >
            {i}
          </button>
        ))}
      </Container>
    </div>
  )
}
