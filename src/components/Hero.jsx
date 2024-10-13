import { Link } from 'react-router-dom';
import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.webp';

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <div className='grid lg:grid-cols-2 gap-8 items-center'>
      {/* Carousel Section */}
      <div className='hidden lg:flex h-[28rem] carousel carousel-right p-6 space-x-6 bg-secondary rounded-lg shadow-lg'>
        {carouselImages.map((image) => {
          return (
            <div key={image} className='carousel-item'>
              <img
                src={image}
                className='rounded-lg h-full w-80 object-cover shadow-lg'
                alt='carousel item'
              />
            </div>
          );
        })}
      </div>
      {/* Text Section */}
      <div className='space-y-6'>
        <h1 className='max-w-2xl text-5xl font-extrabold leading-tight tracking-wide sm:text-7xl'>
          Taskr, Get it done
        </h1>
        <p className='max-w-xl text-lg leading-relaxed tracking-normal text-gray-600'>
          Qualified, on time, and helpful day and night
        </p>
        <div className='mt-8 '>
          <Link to='/products' className='btn btn-primary px-6 py-3 text-lg font-semibold'>
            Our Services
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Hero;
