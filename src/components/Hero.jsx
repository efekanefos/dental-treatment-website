import heroImg from "../assets/images/heroImages/smilingWoman-transformed.png";
import heroButtonEffect from "../assets/images/heroImages/heroButtonEffect.png";
import contactArrow from "../assets/images/headerImages/headerContactArrow.png";

import freeConsultation from "../assets/images/heroImages/freeConsultation.png";
import expertDentist from "../assets/images/heroImages/expertDentist.png";
import highUserRating from "../assets/images/heroImages/highUserRating.png";
import bestEquipment from "../assets/images/heroImages/bestEquipment.png";

import "../assets/styles/hero.css";

const Hero = () => {
  return (
    <>
      <section className="heroContent max-w-[1200px] mx-auto px-3 flex justify-between items-start relative min-h-[70vh] max-lg:min-h-[100%] max-[850px]:flex-col max-[850px]:justify-center max-[850px]:items-center">
        <div className="heroInfoContent w-full max-w-[669px] z-10">
          <h1
            className="heroTitle text-[50px] font-bold pt-10 
          max-lg:text-[40px] max-lg:max-w-[500px] max-[850px]:text-center 
          max-[850px]:max-w-full
          max-[850px]:text-[30px]
          max-md:pt-0
          "
          >
            Dental Excellence Starts Here: Your Guide to a Brighter, Healthier
            <br /> Smile
          </h1>
          <div className="bookingButtonContent max-[850px]:flex max-[850px]:justify-center max-[850px]:items-center">
            <button className="bookingButton bg-secondary flex items-center gap-2 px-5 py-2 rounded-[30px] font-semibold h-[50px] mt-5 relative">
              Booking Now
              <div className="bookingButtonImgContent max-w-[13px] flex items-center justify-center">
                <img src={contactArrow} alt="Arrow" className="bookingButtonImg w-full" />
              </div>
              <div className="bookingButtonEffectImgContent  absolute max-w-[80px] right-[-15px] z-[-1]">
                <img src={heroButtonEffect} alt="Arrow" className="bookingButtonEffectImg w-full" />
              </div>
            </button>
          </div>
        </div>
        <div className="heroImgContent w-full max-w-[630px] absolute bottom-30 right-0 max-lg:max-w-[500px] max-[850px]:relative">
          <img src={heroImg} alt="Smiling Woman" className="heroImg w-full" />
        </div>
      </section>
      <section className="qualityContent max-w-[1200px] mx-auto px-3 max-lg:pt-[100px] max-[850px]:pt-[0px] max-[850px]:mt-[-50px]">
        <div className="qualityBoxes z-10 relative flex flex-wrap items-start justify-center gap-5">
          {/* Free Consultation */}
          <div className="qualityBox">
            <div className="qualityBoxImgContent">
              <img src={freeConsultation} alt="Free Consultation" className="qualityBoxImg" />
            </div>
            <h3 className="qualityBoxTitle">Free Consultation</h3>
            <p className="qualityBoxDesc">We offer flexible appointment scheduling and free to accommodate your busy life</p>
          </div>
          {/* Expert Dentist */}
          <div className="qualityBox">
            <div className="qualityBoxImgContent">
              <img src={expertDentist} alt="Expert Dentist" className="qualityBoxImg" />
            </div>
            <h3 className="qualityBoxTitle">Expert Dentist</h3>
            <p className="qualityBoxDesc">Our team of experienced dentists and dental professionals boasts years of expertise in various areas of dentistry</p>
          </div>
          {/* High User Rating */}
          <div className="qualityBox">
            <div className="qualityBoxImgContent">
              <img src={highUserRating} alt="High User Rating" className="qualityBoxImg" />
            </div>
            <h3 className="qualityBoxTitle">High User Rating</h3>
            <p className="qualityBoxDesc">We offer flexible appointment scheduling and free to accommodate your busy life</p>
          </div>
          {/* Best Equipment */}
          <div className="qualityBox">
            <div className="qualityBoxImgContent">
              <img src={bestEquipment} alt="Best Equipment" className="qualityBoxImg" />
            </div>
            <h3 className="qualityBoxTitle">Best Equipment</h3>
            <p className="qualityBoxDesc">Our compassionate team is dedicated to making your dental experience as comfortable and stress-free as possible</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
