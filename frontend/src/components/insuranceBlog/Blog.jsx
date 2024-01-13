import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Section from "./Section";
import HouseInsuranceHero from "../houseInsurance/HouseInsuranceHero";

function Blog() {
  return (
    <div>
      <div className="bg-[#EAEAEA]">
        <Header />
        <HouseInsuranceHero />
        <div className=" py-3">
          <Section
            color="bg-white"
            title="What is Home Insurance?"
            paragraph1="At its core, insurance is a financial safety net that provides protection against unexpected events. Whether it's health, life, property, or business-related, insurance serves as a safeguard, offering peace of mind and financial security."
          />
          <Section
            title="The Importance of Insurance:"
            paragraph1="1. Financial Security: Insurance acts as a safety net, ensuring that you won't be left shouldering the entire financial burden in times of crisis."
            paragraph2="2. Risk Mitigation: Life is unpredictable, and insurance helps mitigate risks by providing coverage for various unforeseen events, reducing the impact on individuals and businesses."
            paragraph3="3. Legal Requirements:** In many cases, insurance is a legal requirement. For instance, auto insurance is mandatory in most places, emphasizing its significance in daily life."
          />
          <Section
            color="bg-white"
            title="Getting Started with Insurance:"
            subtitle="Embarking on the insurance journey might seem daunting, but it's a crucial step toward securing your future. Here's a simplified guide:"
            paragraph1="1. Assess Your Needs: Identify the areas of your life or business that require protection. This could include health, property, life, or specialized coverage for specific risks."
            paragraph2="2. Research and Compare: Explore different insurance providers, comparing coverage, premiums, and customer reviews. This step is vital in finding the right fit for your unique requirements."
            paragraph3="3. Customizing Your Plan: Tailor your insurance plan to meet your specific needs. Whether you need comprehensive coverage or a more focused policy, customization ensures you get exactly what you need."
          />
          <Section
            title="Rentice: Your Trusted Insurance Partner"
            subtitle="Now, why choose Rentice as your insurance provider?"
            paragraph1="1. Comprehensive Coverage: Our packages offer extensive coverage across various insurance categories, ensuring you're protected in every aspect of life."
            paragraph2="2. Competitive Premiums: We understand the importance of affordability. Rentice provides competitive premiums without compromising on the quality of coverage."
            paragraph3="3. Customer-Centric Approach: At Rentice, customer satisfaction is our priority. Our dedicated team is always ready to assist you, providing a seamless and supportive experience."
            paragraph4="4. Innovative Solutions: We stay ahead of the curve, offering innovative insurance solutions that adapt to the evolving needs of our clients."
          />
        </div>

        <div className="p-4 flex flex-col items-center bg-white lg:pb-10">
          <p className="text-[0.8125rem] font-bold md:text-base lg:text-[1.1875rem] text-[#282D3A] font-Roboto pt-1 w-[366px] md:w-[726px] lg:w-[1000px] xl:w-[1270px]">
            In conclusion, insurance is not just a financial product; it's a
            commitment to safeguarding your future. As you embark on your
            insurance journey, consider Rentice as your reliable partner,
            providing unparalleled coverage and peace of mind in an
            unpredictable world.
          </p>
          <div className="flex justify-end pt-[20px] lg:pt-[10px] w-[366px] md:w-[726px] lg:w-[1000px] xl:w-[1270px]">
            <button
              className={`bg-[#035FCE] text-[#FFFFFF] text-[0.43713rem] lg:text-sm font-Roboto py-2 px-5 rounded-[5px] mt-[0px] lg:mt-[10px] text-center font-semibold hover:scale-110`}
            >
              Buy Now
            </button>
          </div>
        </div>
        <div className="mt-10">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Blog;
