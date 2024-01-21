import React, { useEffect } from "react";

import ArrowBack from "./images/arrow-back.svg";
import LogoIcon from "./images/logo-icon.svg";
import Share from "./Share";
import PostPic from "./images/post-pic.svg";
import { useNavigate } from "react-router-dom";

function BlogPost() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);

    // Additional cleanup or side effect code if needed
  }, []);
  return (
    <div>
      <div className="mt-10 flex flex-col items-center md:items-start px-5 sm:px-10 xl:px-20 pb-20">
        <div
          onClick={goBack}
          className="flex items-center gap-1 cursor-pointer w-[359px] min-[500px]:w-[485px] md:w-[678px]"
        >
          <img src={ArrowBack} alt="" className="w-[28px] lg:w-[32px]" />
          <p className="text-[1.1875rem] text-[#282D3A] font-Roboto lg:text-[1.4375rem]">
            Back
          </p>
        </div>
        {/* Blog header start */}
        <h1 className="w-[359px] min-[500px]:w-[485px] md:w-[678px] text-[1.75rem] text-[#282D3A] font-Roboto lg:text-[2.0625rem] mt-5">
          Property Data Collection: Everything You Need to Know
        </h1>
        {/* Blog header end */}
        {/* Blog logo and share start */}
        <div className="flex items-center gap-2 w-[359px] min-[500px]:w-[485px] md:w-[678px] justify-between mt-10">
          <div className="flex items-center gap-5">
            <img src={LogoIcon} alt="" className="" />
            <div className="mt-[-2px]">
              <p className="text-[0.875rem] text-[#282D3A] font-OpenSans">
                By:{" "}
                <span className="text-[1.03713rem] text-[#354764] font-Roboto">
                  Rentice
                </span>
              </p>
              <p className="text-[0.875rem] text-[#282D3A] font-OpenSans">
                April 5, 2024
              </p>
            </div>
          </div>
          <Share />
        </div>
        {/* Blog logo and share end */}
        {/* Blog image start */}
        <div className="mt-10">
          <img
            src={PostPic}
            alt=""
            className="w-[359px] h-[239.52px] min-[500px]:w-[485px] min-[500px]:h-[339.52px] md:w-[678px] md:h-[427px] object-cover"
          />
        </div>
        {/* Blog image end */}
        {/* Blog content start */}
        <div className="mt-10 flex flex-col items-center md:items-start">
          <p className="text-[1.125rem] text-[#282D3A] font-Roboto w-[359px] min-[500px]:w-[485px] md:w-[678px]">
            Whether you're a seasoned real estate agent looking for a new income
            stream or getting started in the industry, property data collection
            is a great way to make money. Property data collection is the
            process of collecting information about properties, such as their
            location, size, and condition. This information can be used by
            investors, developers, or other professionals who need to know more
            about a property before they buy it.
          </p>
          <h1 className="text-[2.5rem] text-[#282D3A] font-bold font-Roboto w-[359px] min-[500px]:w-[485px] md:w-[678px] mt-10">
            What is property data collection?
          </h1>
          <p className="text-[1.125rem] text-[#282D3A] font-Roboto w-[359px] min-[500px]:w-[485px] md:w-[678px]">
            Property data collection is a standardized process in which a
            trained third-party data collector gathers essential information and
            takes photos to document the property. Then, the data and
            photographs are drafted into a report and shared with the mortgage
            lender or a real estate appraiser to complete a desktop or hybrid
            appraisal.
          </p>
          <p className="text-[1.125rem] text-[#282D3A] font-Roboto w-[359px] min-[500px]:w-[485px] md:w-[678px] mt-10">
            So how did this come about?
            <br />
            <br />
            Prior to 2019, mortgage lenders could either require a comprehensive
            property appraisal to determine the accurate market value of a
            property, or they could waive it entirely. In all but extremely rare
            cases, they required the property appraisal to mitigate risk and
            ensure they were making a lending decision based on the property's
            fair market value. But around 2019, Fannie Mae and Freddie Mac found
            that delays in property appraisals were slowing down the loan
            origination cycle and needed a solution beyond a full appraisal or
            nothing at all. They created three new options to fill in the gaps:
          </p>
          <ul className="list-disc list-inside text-[1.125rem] text-[#282D3A] font-Roboto w-[359px] min-[500px]:w-[485px] md:w-[678px] mt-10">
            <li>Property inspection waiver (PIW)</li>
            <li>Desktop appraisal</li>
            <li>Hybrid appraisal</li>
          </ul>
          <h1 className="text-[2.5rem] text-[#282D3A] font-bold font-Roboto w-[359px] min-[500px]:w-[485px] md:w-[678px] mt-10">
            What does a property data collector do?
          </h1>
          <p className="text-[1.125rem] text-[#282D3A] font-Roboto w-[359px] min-[500px]:w-[485px] md:w-[678px]">
            A property data collector performs a physical inspection of a
            requested property, documenting information including:
          </p>
          <ul className="list-disc list-inside text-[1.125rem] text-[#282D3A] font-Roboto w-[359px] min-[500px]:w-[485px] md:w-[678px] mt-10">
            <li>
              Building materials used, such as the exterior cladding, type of
              flooring, or roofing
            </li>
            <li>Type of foundation</li>
            <li>
              Floor plan details like the number of bedrooms and bathrooms and
              measurements
            </li>
            <li>Additional property elements, such as outbuildings</li>
            <li>
              Utility connections such as whether the property relies on
              municipal water and sewage or a well and septic system
            </li>
            <li>
              Physical safety issues or structural integrity issues with the
              property
            </li>
          </ul>
          <p className="text-[1.125rem] text-[#282D3A] font-Roboto w-[359px] min-[500px]:w-[485px] md:w-[678px] mt-10">
            The data collector also takes photos of the property's exterior and
            interior, including any damage or safety issues. They also take
            photos of the street and neighborhood to provide context for the
            property's location.
          </p>
        </div>
        {/* Blog content end */}
        {/* Blog share start */}
        <div className="mt-20 w-[359px] min-[500px]:w-[485px] md:w-[678px]">
          <Share />
        </div>
        {/* Blog share end */}

        {/* Related post start */}
        <div className="mt-20 flex flex-col items-center md:items-start">
          <h1 className="text-[1.5rem] text-[#000000] font-bold font-OpenSans w-[359px] min-[500px]:w-[485px] md:w-[678px]">
            Related Posts
          </h1>
          {/* Line start */}
          <div className="w-[359px] min-[500px]:w-[485px] md:w-[678px] h-[2px] bg-[#CCCCCC] mt-2"></div>
          {/* Line end */}
          <div className="flex flex-col md:flex-row gap-3 w-[359px] min-[500px]:w-[485px] md:w-[678px]">
            <div className="flex items-center gap-3 cursor-pointer">
              <img src={PostPic} alt="" className="w-[65px] h-[43.33px] mt-5" />
              <p className="text-base text-[#F59233] font-Roboto w-[360px] md:w-[260px] mt-5">
                Difficult Real Estate Clients: How to Break Up with Them
              </p>
            </div>
            <div className="flex items-center gap-3 cursor-pointer">
              <img src={PostPic} alt="" className="w-[65px] h-[43.33px] mt-5" />
              <p className="text-base text-[#F59233] font-Roboto w-[360px] md:w-[260px] mt-5">
                Difficult Real Estate Clients: How to Break Up with Them
              </p>
            </div>
          </div>
        </div>
        {/* Related post end */}
      </div>
    </div>
  );
}

export default BlogPost;
