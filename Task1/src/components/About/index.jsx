import { useState } from "react";

const About = () => {
  const [truncate, setTruncate] = useState(true);

  return (
    <div
      id="about"
      className="relative py-16 px-6 lg:px-32 lg:py-32 xl:py-48 xl:px-60 2xl:px-96 bg-white"
    >
      <svg
        className="w-6/12 absolute lg:top-[-15rem] lg:right-[-25rem] 2xl:top-[-30rem] 2xl:right-[-40rem]"
        viewBox="0 0 561 561"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M377.553 115.566C415.14 133.798 460.301 142.213 488.911 168.019C517.523 193.825 529.584 237.303 512.193 270.682C495.083 304.062 448.8 327.343 424.957 361.564C401.396 395.785 399.993 440.665 379.797 456.373C359.601 472.081 320.051 458.617 277.695 463.666C235.339 468.435 190.179 491.716 161.288 481.057C132.116 470.398 119.213 425.799 96.492 386.809C73.7715 347.539 41.2335 314.16 45.1605 282.744C49.0875 251.608 89.4795 222.436 117.249 192.142C145.019 161.848 160.166 130.432 185.411 104.907C210.656 79.662 245.438 60.588 277.976 65.076C310.233 69.564 340.246 97.614 377.553 115.566Z"
          fill="#F96666"
        />
      </svg>

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
        } mt-7 transition duration-300 ease-in-out hover:scale-110 bg-palette-red text-white-red px-4 py-3 rounded-3xl text-sm font-semibold`}
      >
        Read More
      </button>
      <svg
        className="w-2/6 absolute lg:bottom-[-10rem] lg:left-[-12rem] 2xl:bottom-[-20rem] 2xl:left-[-20rem] z-10"
        viewBox="0 0 409 409"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M287.936 54.1926C309.817 72.8021 323.314 100.41 341.924 126.995C360.329 153.58 384.051 179.142 377.302 200.615C370.554 222.087 333.539 239.879 313.089 262.987C292.435 286.3 288.754 314.93 273.416 334.562C258.079 354.399 231.289 365.033 201.023 370.963C170.757 376.894 137.219 378.121 119.019 360.125C100.818 342.129 98.16 304.91 90.5934 275.666C83.0269 246.423 70.5525 225.564 63.395 200.206C56.033 175.052 53.988 145.809 62.986 119.224C72.1885 92.843 92.6385 69.5301 117.996 52.7611C143.559 35.9921 174.029 25.767 204.5 25.767C235.175 25.5625 265.85 35.3786 287.936 54.1926Z"
          fill="#F96666"
        />
      </svg>
    </div>
  );
};
export default About;
