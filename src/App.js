import { useEffect, useState } from "react";
import CardList from "./components/CardList";
import ApiCaller from "./utils/ApiCaller";
import GetDays from "./utils/GetDays";
import "typeface-roboto";
import NavTopBar from "./components/NavTopbar";
import PanelLeft from "./components/PanelLeft";
import { isMobile } from "react-device-detect";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await ApiCaller();
      const days = await GetDays(response.list);
      setData(days);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const [isPanelActive, setIsPanelActive] = useState(true);

  useEffect(() => {
    isMobile && setIsPanelActive(false);
  }, []);

  const handleToTheTop = () => {
    window.location.href = "#";
  };

  if (isLoading) {
    return (
      <div className="cursor-progress text-2xl flex flex-col h-screen justify-center text-center font-bold text-gray-700">
        Loading...
      </div>
    );
  }

  return (
    // Main div
    <div className="App flex flex-row subpixel-antialiased min-h-[100vh] max-h-[100vh]">
      {/* Start */}
      <div id="container-start">
        <PanelLeft isPanelActive={isPanelActive} />
      </div>

      {/* Middle */}
      <div id="container-mid" className="flex flex-col grow">
        <NavTopBar
          isPanelActive={isPanelActive}
          setIsPanelActive={setIsPanelActive}
        />
        <CardList data={data} isMobile={isMobile} />
      </div>

      <button
        onClick={handleToTheTop}
        id="to-the-top"
        className=" flex flex-row justify-end items-center fixed z-9999 
                            overflow-hidden bg-purple-500 w-[45px] h-[45px] rounded-full
                              hover:w-[100px] transition-all hover:transition-all bottom-10
                                right-10 text-white subpixel-antialiased active:transition-all
                                  hover:bg-purple-500 active:bg-purple-600"
      >
        <p className="mr-1">Next</p>
        <span className="flex items-center material-symbols-outlined text-[41px] h-full">
          chevron_right
        </span>
      </button>
    </div>
  );
}

export default App;
