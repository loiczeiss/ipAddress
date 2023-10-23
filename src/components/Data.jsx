import '../App.css'

const Data = ({passedData})=> {
  return (
    <div className="bg-white h-full  w-5/6 translate-y-12 self-center rounded-md lg:flex">
      <section className="flex flex-col m-8 justify-center lg:w-1/4 lg:text-start">
        <p className="text-darkGrey text-xs text-center uppercase font-rubik font-medium lg:text-left ">
            ip address
        </p>
        <p className="font-rubik text-sm text-center font-medium lg:text-left">{passedData && passedData.ip ? passedData.ip : 'N/A'} </p>{" "}
      </section>
      <div className="vl"></div>
      <section className="flex flex-col m-8 justify-center lg:w-1/4 lg:justify-start">
        <p className="text-darkGrey text-xs text-center uppercase font-rubik font-medium lg:text-left ">
            location
        </p>
        <p className="font-rubik text-sm text-center font-medium lg:text-left">{passedData && passedData.location.city ? passedData.location.city :'N/A'}, {passedData && passedData.location.region} {passedData && passedData.location.geonameId} </p>{" "}
      </section>
      <div className="vl"></div>
      <section className="flex flex-col m-8 justify-center lg:w-1/4 lg:justify-start">
        <p className="text-darkGrey text-xs text-center uppercase font-rubik font-medium lg:text-left ">
            timezone
        </p>
        <p className="font-rubik text-sm text-center font-medium lg:text-left">UTC {passedData && passedData.location.timezone ? passedData.location.timezone: 'N/A'} </p>{" "}
      </section>
      <div className="vl"></div>
      <section className="flex flex-col m-8 justify-center lg:w-1/4 lg:justify-start">
        <p className="text-darkGrey text-xs text-center uppercase font-rubik font-medium lg:text-left ">
            isp
        </p>
        <p className="font-rubik text-sm text-center font-medium lg:text-left">{passedData && passedData.isp ? passedData.isp: 'N/A'} </p>{" "}
      </section>
    </div>
  );
}

export default Data