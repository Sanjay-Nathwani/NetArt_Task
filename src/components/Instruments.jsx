const Instruments = () => {
  return (
    <div className="p-3 flex flex-col items-center justify-center">
      <img src="/3.png" alt="instruments" className="w-full sm:w-[80%]" />
      <p className="tracking-tight font-medium py-2">
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors
      </p>
      <hr className="border-[1.5px] border-[#e93136] w-full mb-3" />
      <p className="font-bold">
        C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
      </p>
      <div className="container1 mt-2">
        <ul className="text-[7px] sm:text-[8px] md:text-base">
          <li>CHEMICALS & PROCESS</li>
          <li>POWER</li>
          <li>WATER & WASTE WATER</li>
          <li>OILS & GAS</li>
          <li>PHARMA</li>
          <li>SUGARS & DISTILLERIES</li>
          <li>PAPER & PULP</li>
          <li>MARINE & DEFENCE</li>
          <li>METAL & MINING</li>
          <li>FOOD & BEVERAGE</li>
        </ul>
      </div>

      <div className="container1">
        <ul className="text-[7px] sm:text-[10px] md:text-base">
          <li>PETROCHEMICAL & REFINERIES</li>
          <li>SOLAR</li>
          <li>BUILDING</li>
          <li>HVAC</li>
          <li>FIRE FIGHTING</li>
          <li>AGRICULTURE & RESIDENTIAL</li>
        </ul>
      </div>
    </div>
  );
};

export default Instruments;
