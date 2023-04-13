import { useState } from 'react';
import FadeInFromTop from './transitions/FadeInFromTop';
import styled from 'styled-components';
import tw from 'twin.macro';

const ResponsiveNavTopBar = styled.main.attrs({
    className: "",
})``;

const NavTopBar = ({ isPanelActive, setIsPanelActive }) => {
    
    const [showSuggestion, setShowSuggestion] = useState(false);
    
    function handleInputChange() {
        setShowSuggestion(true)
    }
    
    function handleClick() {
        setIsPanelActive(!isPanelActive)
    }
    
    return (
        <div className="mt-4 ml-5 w-full h-20 flex items-center px-6">
            
            <button 
                onClick={handleClick}
                className=" material-symbols-outlined text-1xl p-[6px] mr-4 text-purple-500 
                            border-2 border border-purple-500 rounded-[100%] subpixel-antialiased
                                hover:bg-purple-500 hover:text-white transition-all hover:transition-all
                                    active:bg-purple-600 active:border-purple-600"
            >menu</button>
            
            <div className="inline-block relative ml-2">
                <input
                    onChange={handleInputChange}
                    list="suggestions"
                    className=" bg-gray-50 shadow-sm content-center min-w-[250px] w-[30vw]
                                    outline outline-1 outline-gray-50 max-w-[400px] h-[40px]
                                        rounded-[100px] text-gray-600 text-md p-4 focus:outline-purple-400 
                                            hover:outline-gray-200 active:outline-purple-400 transition-all 
                                                focus:transition-all active:transition-all"
                    placeholder="Ex.: São Paulo, SP"
                ></input>
            
                {showSuggestion && 
                    <div className="absolute z-10 w-full ">
                        <FadeInFromTop duration={200}>
                            <ul className=" bg-white text-gray-700 overflow-hidden shadow w-full rounded-xl 
                                                mt-2 opacity-70 hover:opacity-100 transition-all hover:transition-all 
                                                    text-start">
                                <li className=" px-4 py-2 text-gray-600 text-sm subpixel-antialiased hover:bg-purple-300 
                                                    hover:text-white">
                                    Tuts
                                </li>
                                                                <li className=" px-4 py-2 text-gray-600 text-sm subpixel-antialiased hover:bg-purple-300 
                                                    hover:text-white">
                                    Tuts
                                </li>
                                                                <li className=" px-4 py-2 text-gray-600 text-sm subpixel-antialiased hover:bg-purple-300 
                                                    hover:text-white">
                                    Tuts
                                </li>
                            </ul>
                        </FadeInFromTop>
                    </div>
                }
            </div>


        </div>
    )
}

export default NavTopBar;