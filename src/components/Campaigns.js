import React,{useState,useEffect} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banners from 'api/banners.json'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useWindowWidth } from "@react-hook/window-size";


function NextButton ({ onClick, className }) {
	return (
		<button className={` text-brand-color absolute top-1/2 -right-6 -translate-y-1/2`} onClick={onClick}>
			<IoIosArrowForward size={22} />
		</button>
	)
}
function PrevButton ({ onClick, className }) {
  const windowWidth = useWindowWidth();

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
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: "linear",
    arrows:true,
    nextArrow: <NextButton />,
		prevArrow: <PrevButton />,
    responsive: [
      {
				breakpoint: 1280,
				settings: {
					slidesToShow: 3,
          arrows:false,
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
          arrows:false,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
          arrows:false,
				}
			}
		]
    
  };
  return (
    <div className='container mx-auto md:pt-8 '>
      <div className='hidden md:block'>
      <h3 className="text-sm font-semibold mb-3 px-6 md:px-0">Kampanyalar</h3>
      </div>
      <Slider {...settings} className="md:-mx-2">
     {banners.length && banners.map((banner) =>(
      <div key={banner.id}>
        <picture className='md:px-2 block'>
        <img src={banner.image} className="md:rounded-lg "  />
        </picture>
      </div>


     ))}
      </Slider>
      
      
      
      
      
    </div>
  )
}
