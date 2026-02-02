import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({ info }){
    const INIT_URL="https://images.unsplash.com/photo-1627891858448-0b99239685fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvdWR5JTIwd2VhdGhlciUyMGltYWdlfGVufDB8fDB8fHww"
    const HOT_URL="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    const RAIN_URL="https://media.istockphoto.com/id/498063665/photo/rainy-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=hOE6L7f7OoSKUW1Q4tR27GoEkOU_ywKJGCvSO77SeZg="
    // let info ={
    //     city:"Lucknow",
    //     feelsLike: 36.63,
    //     humidity : 74,
    //     temp: 30.22,
    //     tempMax: 30.22,
    //     tempMin: 30.22,
    //     weather : "overcast clouds",
    // }
    return(
        <div className="InfoBox">
            {/* <h1>WeatherInfo- {info.weather}</h1> */}

            <div className='cardContainer'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity > 80
          ?RAIN_URL
          :info.temp > 15
          ?HOT_URL
          :COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
            info.humidity > 80
          ?<ThunderstormIcon/>
          :info.temp > 15
          ?<SunnyIcon/>
          :<AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary'}} component="span">
          
           <p>Temperature = {info.temp}&deg;C</p> 
           <p> Humidity = {info.humidity}</p>
          <p> Min Temp = {info.tempMin}&deg;C</p>
          <p> Max Temp = {info.tempMax}&deg;C</p>
          <p> The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card></div></div>
    )
}