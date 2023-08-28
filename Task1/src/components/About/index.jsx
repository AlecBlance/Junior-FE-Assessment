import { useState } from "react";

const About = () => {
  const [truncate, setTruncate] = useState(true);

  return (
    <div
      id="about"
      className="py-16 px-6 lg:px-32 lg:py-32 xl:py-48 xl:px-60 2xl:px-96 bg-white"
    >
      <h1 className="text-center text-2xl text-custom-black font-black mb-5 md:text-4xl md:mb-10">
        About <span className="text-palette-red">Us</span>
      </h1>
      <p
        className={`${
          truncate ? "line-clamp-3" : "line-clamp-none"
        } lg:leading-8`}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et turpis
        massa. Sed massa dui, imperdiet ac malesuada sit amet, suscipit sed
        neque. Mauris imperdiet urna hendrerit dui lobortis sodales. Mauris
        facilisis nulla sit amet felis malesuada viverra. Sed quis molestie
        nulla, ac vulputate leo. Nullam posuere dui vitae venenatis finibus.
        Praesent sodales sagittis varius. Aliquam sed enim neque. Aliquam
        aliquet velit eget massa tristique, vel molestie nibh fermentum. Nulla
        eget mi efficitur, feugiat est eget, eleifend ipsum. In eget erat non
        eros dapibus rutrum ac vel turpis. In hac habitasse platea dictumst.
        Aliquam non laoreet neque, a maximus est. Donec nec placerat ex. Vivamus
        pellentesque, justo a bibendum euismod, enim lacus vulputate orci, sit
        amet rhoncus elit justo sed quam.
      </p>
      <button
        onClick={() => setTruncate(!truncate)}
        className={`${
          !truncate ? "hidden" : "block"
        } mt-7 bg-palette-red text-white-red px-4 py-3 rounded-3xl text-sm font-semibold`}
      >
        Read More
      </button>
    </div>
  );
};
export default About;
