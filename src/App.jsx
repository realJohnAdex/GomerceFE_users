import Navbar from './components/Navbar'
import SideNav from './components/SideNav'
import Footer from './components/Footer'
import SideContents from './components/SideContents'
import Slider from './components/Slider'
import { Box, Grid } from '@mui/material'
import phone_1 from './Assets/Images/phone_1.jpg'
import phone_2 from './Assets/Images/phone_2.jpg'
import phone_3 from './Assets/Images/phone_3.jpg'
const cards = [
  { url: phone_1, name: 'phone A' },
  { url: phone_2, name: 'phone B' },
  { url: phone_3, name: 'phone C' },
  { url: phone_1, name: 'phone D' },
  { url: phone_2, name: 'phone E' },
  { url: phone_3, name: 'phone F' },
  { url: phone_1, name: 'phone G' },
  { url: phone_2, name: 'phone H' },
  { url: phone_3, name: 'phone I' },
  { url: phone_1, name: 'phone J' },
]
const App = () => {
  return (
    <main>
      <Navbar />
      <div className="wrapper">
        <Grid container direction="row" spacing={2} my={2}>
          <Grid item xs={4}>
            <Box sx={{ backgroundColor: 'yellow' }}>
              <SideNav />
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box sx={{ backgroundColor: 'pink' }}>
              <SideContents />
            </Box>
          </Grid>
        </Grid>
      </div>
      <Slider cards={cards} />
      <Footer />
    </main>
  )
}

export default App
