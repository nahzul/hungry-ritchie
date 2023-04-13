import { useState } from 'react';
import Calendar from "./Calendar";import Sunset from "./svgs/Sunset.svg";import Sunny from "./svgs/Sunny.svg";import Cloudy from "./svgs/Cloudy.svg"
import Label from './Label';
import styled from 'styled-components';
import tw from 'twin.macro';
import Icon from './Icon';
import AreaChart from './AreaChart';
import '../index.css';

const ResponsiveDayContentBox = styled.main.attrs({
  className: "max-h-full h-full grow subpixel-antialiased",
})`
  & {
      #container {
          ${tw`flex flex-col grow h-full mt-4`}
      }
      #container-one { 
          ${tw`flex flex-col grow bg-white  shadow-lg p-4 gap-6`}
      }
      #container-two{
          ${tw`bg-white shadow-lg`}
      }
      #container-daybox {
          ${tw`flex flex-col text-start w-full gap-6 mt-2`}
      }
      #container-label{
          ${tw`flex flex-row content-center justify-between w-full mt-1 px-2 text-gray-700`}
          h1{
              ${tw`text-[32px]`}
          }
          #icon{
              ${tw`scale-[80%]`}
          }
      }
      #container-nextdays{
          ${tw`flex flex-col text-start px-10 mt-8`}
      }
      #container-title{
          ${tw`px-2`}
      }
  }
  
    @media (min-width: 540px) {
        ${tw`mx-2`}
            #container{
                ${tw`mt-4 mb-6 gap-4`}
            }
            #container-one{
                ${tw`rounded-[40px]`}
            }
            #container-two{
                ${tw`rounded-[40px]`}
            }
            #container-label{
                ${tw`px-4`}
                h1{
                    ${tw`text-[40px]`}
                }
                #icon{
                    ${tw`scale-[100%]`}
                }
            }
            #container-title{
                ${tw`px-6`}
            }
  }

    @media (min-width: 768px) {
        ${tw`my-5`}
            #container{
                ${tw`mt-[0px]`}
            }
            #container-two{
                ${tw`basis-[35%] hover:basis-1/2 transition-all hover:transition-all`}
            }
            #container-daybox {
                ${tw`px-6`}
            }
  }
  
    @media (min-width: 968px) {
        ${tw`my-6 mx-4`}
            #container{
                ${tw`flex flex-row`}
            }
            #container-two{
                ${tw`basis-2/5`}
            }

  }
  
  @media (min-width: 1180px) {
      ${tw`my-8 mx-6`}
            #container-one {
                ${tw`gap-x-12 p-8 gap-y-8`}
            }
            #container-two{
                ${tw`basis-[45%]`}
            }
  }
  

`

function CardList({data, isMobile}){
    
    const [showCalendar, setShowCalendar] = useState(false);
    
    const gradient = {
        'sunny': "bg-gradient-to-tl from-[#60a5fa] to-[#FBDA61]",
        'sunset': "bg-gradient-to-tl from-[#FF5ACD] to-[#FBDA61]",
        'cloudy': "bg-gradient-to-tl from-[#80D0C7] to-[#0093E9]",
        'purple': "bg-gradient-to-bl from-indigo-600 via-purple-600 to-pink-500"
    }
    
    const handleClick = () => {
        !showCalendar ? setShowCalendar(true) : setShowCalendar(false);
    }
    
    return (
        <ResponsiveDayContentBox>
            <div id="container">
            
                <div id="container-one">
                     
                    <div id="container-label">
                        <div className="flex flex-col text-start">
                            <h2 className={`font-bold`}>Today</h2>
                            <h1 className="font-light">São Paulo</h1>
                            <p className="text-gray-400">26 Jun</p>
                        </div>
                        <div className="flex flex-row gap-5 items-center">
                            <div id="icon">
                                <Icon icon="02d" h="9" w="9"></Icon>
                            </div>
                            <div className="flex flex-col text-end justify-end">
                                <h1 className="text-[40px]">26°</h1>
                                <p className="text-gray-400 font-light">Céu Limpo</p>
                            </div>
                           
                        </div>
                        
                    </div>
                
                    <div id="container-daybox">
                        
                        <p id="container-title" className="text-gray-700  text-[18px]"> Average temperature </p>
                        
                        <div className="px-2">
                            <AreaChart />
                        </div>
                        
                        <div className="flex justify-evenly w-full col-span-2">
                            <Label icon='air' text="19km/h" color='purple' />
                            <Label icon='water_drop' text="75%" color='purple' />
                            <Label icon='thermostat' text="33°C" color='purple' />
                            <Label icon='cloud' text="89%" color='purple' />
                        </div>
                        
                        
                        
                    </div>
                </div>
                <div id="container-two">
                    <div id="container-nextdays">
                        <p className="text-gray-700  text-[18px]"> Next days </p>
                    </div>
                </div>
            </div>
        </ResponsiveDayContentBox>

        
        // <div className="grid grid-cols-9 grid-rows-6 gap-10 w-full h-full p-6">
        //     <ResponsiveDayContentBox />
            
            // <div className={`bg-gray-50 rounded-3xl shadow-xl overflow-hidden relative row-span-2 col-span-4`}>
            //     <img src={Sunset} className="absolute"/>
                
            //     <div className="pt-20 z-10 grid grid-cols-2 relative h-full w-full">
            //         <div className=" items-center grid grid-rows-2">
            //             <p className={`font-bold text-[70px]`}>16:00</p>
            //             <div className="flex flex-col gap-1">
            //                 <p>Céu Limpo</p>
            //                 <p className="text-2xl">26°C</p>
            //             </div>
            //         </div>
            //         <div className="grid grid-rows-2 items-center">
            //             <div className="grid grid-cols-2 p-2 gap-x-2 mr-4 items-center">
            //                 <div id="weather-temps" className="text-md flex flex-col items-center gap-1 m-2">
            //                     <p className="flex"><span className="material-symbols-outlined text-red-400">expand_less</span>{data[0][0].main.temp_max}°C</p>
            //                     <p className="flex"><span className="material-symbols-outlined text-blue-400">expand_more</span>{data[0][0].main.temp_min}°C</p>
            //                     {/* <p className="text-gray-300 translate-y-[-3px]">|</p> */}
            //                 </div>
                            
            //                 <div id="weather-temps" className="text-md flex flex-col items-center gap-1 m-2">
            //                     <p className="flex"><span className="material-symbols-outlined text-red-400">expand_less</span>{data[0][0].main.temp_max}°C</p>
            //                     <p className="flex"><span className="material-symbols-outlined text-blue-400">expand_more</span>{data[0][0].main.temp_min}°C</p>
            //                 </div>
            //             </div>
            //             <div className="grid grid-cols-3 gap-2 p-2 pb-5 mr-4">
            //                 <Label icon='air' content="1.7" color='gray' />
            //                 <Label icon='water_drop' content="8.6" color='blue' />
            //                 <Label icon='thermostat' content="3.4" color='red' />
            //             </div>
            //         </div>
            //     </div>
            // </div>
            
            // <div className="grid grid-cols-2 gap-10 row-span-2 col-span-5">
            //     <div className="bg-gray-50 rounded-3xl shadow-xl overflow-hidden relative p-4">
            //         <div className="overflow-hidden rounded-3xl min-h-full h-full w-full">
            //         <iframe
            //             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
            //             frameBorder="0"
            //             style={{ border: 0 }}
            //             allowFullScreen=""
            //             aria-hidden="false"
            //             tabIndex="0"
            //             className="w-full h-full min-h-full rounded-3xl"
            //         />
            //         </div>
            //     </div>
                // <div className="bg-gray-50 rounded-3xl shadow-xl overflow-hidden relative p-4">
                //     <Calendar />
                // </div>
                
            // </div>
            
            
        //     {/* <button onClick={handleClick} class="material-symbols-outlined absolute text-3xl px-1 mr-4 text-orange-400 
        //                     border-2 border border-orange-400 rounded-md subpixel-antialiased
        //                         hover:bg-orange-400 hover:text-white -translate-y-10 -translate-x-0"
        //     >calendar_month</button>
        //     {showCalendar && <Calendar />}
        //     {data.map((day, index) => (
        //         <React.Fragment>
        //             <DateLabel day={day} isHalfSize={(day.length < 5) && true} />
        //             <DayCard day={day} />
        //             {(day.length > index++) && <div className="h-[1px] w-[100%] col-span-3 col-start-1 bg-gradient-to-r from-white via-gray-200 to-gray-300 flex justify-self-end"></div>}
        //         </React.Fragment>
        //     ))} */}
        // </div>
    )
}

export default CardList;