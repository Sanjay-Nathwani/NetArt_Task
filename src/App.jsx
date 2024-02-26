import Logo from "./components/Logo";
import Award from "./components/Award";
import Instruments from "./components/Instruments";

function App() {
  return (
    <div className="p-2 max-w-full min-h-screen bg-gradient-to-b from-[#FFFFFF] via-[#FFFCDE] to-[#FFF9B5] flex flex-col items-center gap-1">
      <Logo />
      <Award />
      <p className="tracking-wider font-semibold py-4">
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </p>
      <Instruments />
    </div>
  );
}

export default App;
