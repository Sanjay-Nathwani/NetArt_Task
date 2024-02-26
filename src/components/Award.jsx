const Award = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 justify-between mt-3">
      <img src="/1.png" alt="award" className="h-[22rem] sm:h-[26rem] md:h-[48rem]" />

      <div>
        <p className="font-semibold text-xl">
          C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
          4th time.
        </p>
        <div className="p-3">
          <p className="font-medium text-xl">
            <span className="text-4xl">•</span> C.R.I.&apos;s energy efficient
            products are well recognized by various Government Institutions, as
            trustworthy products for various projects across the globe to save
            energy.
          </p>
          <p className="font-medium text-xl">
            <span className="text-4xl">•</span> C.R.I. is the highest
            contributor in the country for the projects of EESL (Energy
            Efficiency Services Limited) to replace the old inefficient pumps
            with 5 Star rated energy efficient smart pumps with IoT enabled
            control panel.
          </p>
          <img src="/2.png" alt="award-giving" className="w-[95%] mt-3" />
          <p className="text-xl font-medium">
            Government of India has awarded the &quot;National Energy
            Conservation Award 2018&quot;. Mr. G. Selvaraj, Joint Managing
            Director of C.R.I. Group received the award from Smt. Sumitra
            Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable
            Minister of State.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Award