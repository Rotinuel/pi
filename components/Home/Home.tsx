"use client"
import React, { useEffect } from 'react'
import Hero from "./Hero/Hero"
import ApartmentType from './ApartmentType/ApartmentType'
import Properties from './Properties/Properties'
import CityProperties from './CityProperties/CityProperties'
import BuildingFeature from './BuildingFeature/BuildingFeature'
import OurReview from './OurReview/OurReview'
import Blog from './Blog/Blog'
import * as AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(() =>{
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom"
      });
    };
    initAOS();
  }, [])
  return (
    <div className='overflow-hidden'>
        <Hero />
        <ApartmentType />
        <Properties />
        <CityProperties />
        <BuildingFeature />
        <OurReview />
        <Blog />
    </div>
  )
}

export default Home