import logo4 from "../images/logo4.png";

export const Contact = () => {
  return (
    <>
      <footer>
        <div className="block sm:flex">
          <div className="sm:w-1/2 sm:m-10">
            <div className="flex justify-center items-center">
              <img src={logo4} alt="" className="w-20 sm:w-40" />
              <p className="text-center text-lg  sm:text-4xl text-yellow-600 font-extrabold">
                Springdale<span className="text-indigo-600"> Public </span>
                School
              </p>
            </div>
            <div className="flex flex-col mt-auto sm:w-full w-[79%] text-center ml-[60px]">
              <p className="sm:ml-12 text-indigo-600 font-semibold sm:text-2xl text-xs">
                Springdale Public School, 123 Education Lane, Cityville, State,
                ZIP Code
              </p>
              <hr className="border-solid border-1 border-yellow-600 m-3 font-semibold sm:border-2" />
              <p className="sm:ml-12 text-indigo-600 font-semibold sm:text-2xl text-xs">
                info@springdale.edu
              </p>
              <hr className="border-solid border-1 border-yellow-600 m-3 sm:border-2" />
              <p className="sm:ml-12 text-indigo-600 font-semibold sm:text-2xl text-xs">
                +1 (123)456-7890{" "}
              </p>
            </div>
          </div>

          <div>
            <iframe
              className="m-4 ml-20 sm:mt-20 sm:w-full sm:h-[300px] h-[150px] "
              // width="100%"
              // height="300"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=1%20Graf123%20Education%20Lane,%20Cityville,%20State,%20ZIP%20Codeton%20Street,%20Dublin,%20Ireland+(Springdale%20Public%20School)&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps trackers</a>
            </iframe>
          </div>
        </div>
      </footer>
      <br />
      <br />
    </>
  );
};
