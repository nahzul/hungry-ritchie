import DateLabel_Separator from "./subcomponents/DateLabel_Separator";

const convertDate = (str) => {
  return str.split("-").reverse().join(" ");
};

const DateLabel = (props) => {
  const day = props.day;
  const isHalfSize = props.isHalfSize;

  if (isHalfSize) {
    return (
      <div
        id="daycard-label"
        className="flex flex-col-reverse h-[100%] items-center justify-center gap-16"
      >
        <DateLabel_Separator />
        <DateLabel_Separator />
        <div className="ml-auto flex items-center justify-end w-[100%]">
            <div 
                className=" font-semibold subpixel-antialiased p-2 bg-white 
                                text-orange-400 items-center text-center justify-center rounded-lg
                                    shadow-md border-2 border-orange-400
                            hover:bg-orange-400 hover:text-white active:bg-orange-600 active:text-white"
            >{convertDate(day[0].dt_txt.split(" ")[0])}</div>
            <div className="w-[60%] h-[2px] rounded-xl bg-gradient-to-l from-white via-gray-300 to-white"></div>
        </div>
        <DateLabel_Separator />
        <DateLabel_Separator />
      </div>
    );
  }

  return (
    <div
      id="daycard-label"
      className="font-medium subpixel-antialiased flex flex-col-reverse h-[100%] items-center justify-center gap-16"
    >
      <DateLabel_Separator />
      <DateLabel_Separator />
      <DateLabel_Separator />
      <DateLabel_Separator />
      <div className="ml-auto flex items-center justify-end w-[100%]">
        <div 
            className=" font-semibold subpixel-antialiased p-2 bg-white 
                            text-orange-400 items-center text-center justify-center rounded-lg
                                shadow-md border-2 border-orange-400
                        hover:bg-orange-400 hover:text-white active:bg-orange-600 active:text-white"
        >{convertDate(day[0].dt_txt.split(" ")[0])}</div>
        <div className="w-[60%] h-[2px] rounded-xl bg-gradient-to-l from-white via-gray-300 to-white"></div>
      </div>
      <DateLabel_Separator />
      <DateLabel_Separator />
      <DateLabel_Separator />
      <DateLabel_Separator />
    </div>
  );
};

export default DateLabel;
