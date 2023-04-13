import FadeInFromRight from "./transitions/FadeInFromRight";
import React from 'react';
import Card from './Card';

function DayCard(props) {
    const day = props.day;

    return(
        <div className="grid grid-cols-4 col-span-2 col-start-2 gap-10">
            {day?.map((card, index) => (
                <FadeInFromRight>
                    <Card
                        key={index}
                        temp={card.main.feels_like}
                        min={card.main.temp_min}
                        max={card.main.temp_max}
                        condition={card.weather[0].description}
                        icon={card.weather[0].icon}
                        wind={card.wind.speed}
                        hum={card.main.humidity}
                        hour={card.dt_txt.split(' ')[1].substring(0, 5)}
                        day={card.dt_txt.split(' ')[0].split('-')[2]}
                    ></Card>
                </FadeInFromRight>
            ))}
        </div>
    )
}

export default DayCard;
