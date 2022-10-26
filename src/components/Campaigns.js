import React,{useState,useEffect} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banners from 'api/banners.json'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

function NextButton ({ onClick, className }) {
	return (
		<button className={` text-brand-color absolute top-1/2 -right-6 -translate-y-1/2`} onClick={onClick}>
			<IoIosArrowForward size={22} />
		</button>
	)
}
function PrevButton ({ onClick, className }) {
	return (
		<button className={`text-brand-color absolute top-1/2 -left-6 -translate-y-1/2`} onClick={onClick}>
			<IoIosArrowBack size={22} />
		</button>
	)
}

export default function Campaigns() {
const[banners,setBanners]=useState([]);

useEffect(()=>{
setBanners(Banners)

},[])


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: "linear",
    nextArrow: <NextButton />,
		prevArrow: <PrevButton />
  };
  return (
    <div className='container mx-auto py-8'>
      
      <h3 className="text-sm font-semibold mb-3">Kampanyalar</h3>
      <Slider {...settings} className="-mx-2">
     {banners.length && banners.map((banner) =>(
      <div key={banner.id}>
        <picture className='px-2 block'>
        <img src={banner.image} className="rounded-lg"  />
        </picture>
      </div>


     ))}
      </Slider>
      
      
      
      
      
    </div>
  )
}
