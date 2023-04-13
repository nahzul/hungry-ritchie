import Icon from "./Icon";
import Label from "./Label";

function Capitalize(str){
  return str
    .split(' ')
    .map(word => word.replace(/^\w/, c => c.toUpperCase()))
    .join(' ');
}

function Card(props){

  const temp = props.temp;
  const temp_min = props.min;
  const temp_max = props.max
  const condition = Capitalize(props.condition);
  const icon = props.icon;
  const windSpeed = props.wind;
  const day = props.day;
  const humidity = props.hum
  const date = new Date();
  const hour = props.hour;
  const currentMonth = Capitalize(date.toLocaleString('pt-br', { month: 'short' }).split(' ')[0]).replace('.', '');

  return(
    <div id="weather-card" className="p-5 pt-6 w-[200px] h-[300px] bg-gray-50 border border-gray-200 flex flex-col rounded-2xl shadow-lg items-center text-gray-900 shrink-0">

      {/* All overlays ---*/}
      <div id="date-overlay" className="p-[3px] shadow-md bg-orange-400 absolute translate-y-[-16px] translate-x-[66px] rounded-md items-center content-center grid">
        <p className="text-white text-[14px] font-extrabold subpixel-antialiased">{day} {currentMonth}</p>
      </div>

      <div id="hour-overlay" className="absolute translate-y-[-15px] translate-x-[-68px] bg-gray-300 rounded-md px-1 shadow-sm">
        <p className="text-[14px] text-gray-600">{hour}</p>
      </div>

      {/* Card inside content ---*/}
      <div id="weather-card-icon" className="text-gray-700 mt-1">
        <Icon icon={icon}></Icon> 
        <p className="mt-3 font-bold text-xl text-gray-700 subpixel-antialiased">{temp}°C</p>
        <p className="text-sm">{condition}</p>
      </div>
      
      <div id="weather-temps" className="text-sm flex items-center gap-2 m-2">
        <p className="flex"><span className="material-symbols-outlined text-blue-400">expand_more</span>{temp_min}°C</p>
        <p className="text-gray-300 translate-y-[-3px]">|</p>
        <p className="flex">{temp_max}°C<span className="material-symbols-outlined text-red-400">expand_less</span></p>
      </div>

      <div id="weather-card-label" className="flex flex-row gap-4 font-medium">
        <Label icon='air' content={windSpeed} color='gray' />
        <Label icon='water_drop' content={humidity} color='blue' />
      </div>

    </div>
  )
}

export default Card;