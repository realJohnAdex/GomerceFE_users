import Navbar from './components/Navbar'
import SideNav from './components/SideNav'
import Footer from './components/Footer'
import SideContents from './components/SideContents'
import Slider from './components/Slider'
import SliderCard from './components/SliderCard'
import { Box, Grid } from '@mui/material'
import phone_1 from './Assets/Images/phone_1.jpg'
import phone_2 from './Assets/Images/phone_2.jpg'
import phone_3 from './Assets/Images/phone_3.jpg'
const cards = [
  { image: phone_1, name: 'phone A', price: '199.99' },
  { image: phone_2, name: 'phone B', price: '439.99' },
  { image: phone_3, name: 'phone C', price: '549.99' },
  { image: phone_1, name: 'phone D', price: '499.99' },
  { image: phone_2, name: 'phone E', price: '79.99' },
  { image: phone_3, name: 'phone F', price: '649.99' },
  { image: phone_1, name: 'phone G', price: '999.99' },
  { image: phone_2, name: 'phone H', price: '1499.99' },
  { image: phone_3, name: 'phone I', price: '349.99' },
  { image: phone_1, name: 'phone J', price: '999.99' },
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
