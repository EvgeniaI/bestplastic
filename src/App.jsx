import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Slider from './components/Slider';
import CardItem from './components/cart/CardItem';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [product, setProduct] = useState([])

  useEffect(() =>{
    async function axiosData(){
      const productData = await axios.get('https://64664f8dba7110b6639d7b48.mockapi.io/product')
      setProduct(productData.data)
    }
    axiosData();

},[])

  return (
    <div>
      <Header></Header>
      <Slider></Slider>
      <CardItem item={product}/>
      <Footer/>
    </div>
  );
}

export default App;
