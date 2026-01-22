import "./App.css";
import Card from "./components/Card";
function App() {
  return (
    <>
    <div className="parent">
      <Card user = 'Virat Kohli' age = {37} img = 'https://imageio.forbes.com/specials-images/imageserve/5ecebee7938ec500060ab34f/0x0.jpg?format=jpg&crop=2336,2337,x1064,y702,safe&height=416&width=416&fit=bounds' />
      <Card  user = 'MS Dhoni' age = {45} img = 'https://tsl-blog-images.s3.us-east-1.amazonaws.com/TSL/blog-image/Resized/800*600/0.909120177867577.jpg'/>
    </div>
    
    </>
  );
}

export default App;
