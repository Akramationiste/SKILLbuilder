import i2 from '../../assets/i2.jpg';
import i3 from '../../assets/i3.jpg';
import i4 from '../../assets/i4.jpg';
import './carousel.css' ;


export default function Carousel() {
    return (
      <>
        <div className="carousel w-full">
  <div id="slide2" className="carousel-item relative w-full">
    <img src={i3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-info btn-circle">❮</a> 
      <h1 className="text-4xl text-white leading-10 mb-6 md:text-5xl md:leading-12 md:mb-8 absolute left-40 font-bold ">Lorem ipsum is placeholder text</h1>
      <p className='text-lg leading-7 mb-6 md:text-xl md:leading-8 md:mb-8 text-white absolute top-20 left-40'>Lorem ipsum is placeholder text Lorem ipsum is placeholder text Lorem ipsum is placeholder<br/> text Lorem ipsum is placeholder text</p>
      <button className="w-80 text-4xl font-mono btn btn-outline btn-info absolute top-40 left-40">Plus d'Info</button>
      <a href="#slide3" className="btn btn-info btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={i2} className="w-full" />
   
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-info btn-circle">❮</a> 
      <h1 className="text-4xl text-white leading-10 mb-6 md:text-5xl md:leading-12 md:mb-8 absolute left-40 font-bold ">Lorem ipsum is placeholder text</h1>
      <p className='text-lg leading-7 mb-6 md:text-xl md:leading-8 md:mb-8 text-white absolute top-20 left-40'>Lorem ipsum is placeholder text Lorem ipsum is placeholder text Lorem ipsum is placeholder<br/> text Lorem ipsum is placeholder text</p>
      <button className="w-80 text-4xl font-mono btn btn-outline btn-info absolute top-40 left-40">Plus d'Info</button>
      <a href="#slide4" className="btn btn-info btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={i4} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-info btn-circle">❮</a> 
      <h1 className="text-4xl text-white leading-10 mb-6 md:text-5xl md:leading-12 md:mb-8 absolute left-40 font-bold ">Lorem ipsum is placeholder text</h1>
      <p className='text-lg leading-7 mb-6 md:text-xl md:leading-8 md:mb-8 text-white absolute top-20 left-40'>Lorem ipsum is placeholder text Lorem ipsum is placeholder text Lorem ipsum is placeholder<br/> text Lorem ipsum is placeholder text</p>
      <button className="w-80 text-4xl font-mono btn btn-outline btn-info absolute top-40 left-40">Plus d'Info</button>
      <a href="#slide2" className="btn btn-info btn-circle">❯</a>
    </div>
  </div>
</div>
      </>
    )
  }