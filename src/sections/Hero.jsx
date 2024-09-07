import React from 'react'
import Button from '../Components/Button'
import {arrowRight} from "../assets/icons"
import {shoes, statistics} from "../constants"
import { bigShoe1, bigShoe2, bigShoe3 } from '../assets/images'
import ShoeCard from '../Components/Shoecard'
import { useState } from 'react'

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col lg:justify-center xl:justify-start  min-h-screen gap-10 max-container '
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-coral-red'>
          Our Summer collections
        </p>

        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold lg:z-10'>
          <span className='xl:whitespace-nowrap relative lg:z-10 pr-10'>
            The New Arrival
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3 z-10'>Nike</span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm xl:z-10'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button label='Shop now' iconURL={arrowRight} />

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className=' relative rounded-full lg:absolute lg:left-[40%] xl:top-[20%]  bg-coral-red '>
         <img
          src={bigShoeImg}
          alt='shoe colletion'
          width={510}
          height={502}
          className='object-contain '
        />
        <div className='flex md:flex-col md:left-[70%] md:bottom-[1%] sm:gap-6 gap-4 absolute bottom-[5%]  sm:bottom-[50%] lg:-bottom-[5%] sm:left-[2%] max-sm:px-6 rounded-full'>
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div> 
    


     
        
    </section>
  );
};

export default Hero;