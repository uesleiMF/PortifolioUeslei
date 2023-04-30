import './home.css';
import img from '../props/img3.jpg';


function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>


        <img src={img} alt='' />
     
     
     
     
      </div>

   
    </div>   
    
    
  );
}

export default Home;
