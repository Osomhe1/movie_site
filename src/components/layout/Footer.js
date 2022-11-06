// import { Image } from "@mui/icons-material";
import { Box, Container, Paper, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Paper>
      <Container maxWidth='lg' className='py-4' >

        <Box
         
          className='fixed bottom-0 text-center left-0  p-4 w-full bg-[#004455] border-t
           border-gray-200 shadow 
            dark:bg-gray-800 dark:border-gray-600'
        >
         
          <footer>
            <Typography class='text-sm lg:text-md text-white text-center dark:text-gray-400'>
              Copyright ©2022. [] Limited
            </Typography>
          </footer>
        </Box>
      </Container>
    </Paper>
  )
}
