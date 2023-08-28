/* eslint-disable react/prop-types */
const Product = ({ name, price, image, first }) => {
  return (
    <div
      className={`${
        first && "md:shadow-yellow-300"
      } flex shadow-lg rounded-lg items-center py-3 mt-5 md:first:row-span-2 md:flex-col md:hover:shadow-2xl md:cursor-pointer `}
    >
      <img
        src={image}
        alt={name}
        className={`w-24 mb-3 ${
          first ? "md:w-[250px] md:top-[-100px]" : "md:w-32"
        }`}
      />
      <div className={`md:justify-center md:items-center md:text-center mt-2`}>
        <h1
          className={`font-black text-custom-black ${first && "md:text-2xl"}`}
        >
          {name}
        </h1>
        <p
          className={`font-black text-palette-red text-lg ${
            first && "md:text-2xl md:mt-5"
          }`}
        >
          Php {price}
        </p>
      </div>
      <div
        className={`hidden ${
          first && "md:flex"
        } w-full flex justify-evenly mx-10 mt-10`}
      >
        <svg
          className="w-6 h-6"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="M34.071 12.5185L23.3114 10.8749L18.4887 0.602412C18.1285 -0.164671 16.87 -0.164671 16.5098 0.602412L11.6885 10.8749L0.928932 12.5185C0.0451818 12.6541 -0.307735 13.7289 0.312057 14.3632L8.12872 22.3753L6.28102 33.7022C6.13372 34.602 7.09477 35.2772 7.88956 34.8353L17.5 29.5241L27.1104 34.8368C27.8979 35.2743 28.8677 34.6122 28.7189 33.7037L26.8712 22.3768L34.6879 14.3647C35.3077 13.7289 34.9533 12.6541 34.071 12.5185Z"
              fill="#FFB100"
            />
          </g>
          <defs>
            <clipPath id="clip0_15_151">
              <rect width="35" height="35" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <svg
          className="w-6 h-6"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="M34.071 12.5185L23.3114 10.8749L18.4887 0.602412C18.1285 -0.164671 16.87 -0.164671 16.5098 0.602412L11.6885 10.8749L0.928932 12.5185C0.0451818 12.6541 -0.307735 13.7289 0.312057 14.3632L8.12872 22.3753L6.28102 33.7022C6.13372 34.602 7.09477 35.2772 7.88956 34.8353L17.5 29.5241L27.1104 34.8368C27.8979 35.2743 28.8677 34.6122 28.7189 33.7037L26.8712 22.3768L34.6879 14.3647C35.3077 13.7289 34.9533 12.6541 34.071 12.5185Z"
              fill="#FFB100"
            />
          </g>
          <defs>
            <clipPath id="clip0_15_151">
              <rect width="35" height="35" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <svg
          className="w-6 h-6"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="M34.071 12.5185L23.3114 10.8749L18.4887 0.602412C18.1285 -0.164671 16.87 -0.164671 16.5098 0.602412L11.6885 10.8749L0.928932 12.5185C0.0451818 12.6541 -0.307735 13.7289 0.312057 14.3632L8.12872 22.3753L6.28102 33.7022C6.13372 34.602 7.09477 35.2772 7.88956 34.8353L17.5 29.5241L27.1104 34.8368C27.8979 35.2743 28.8677 34.6122 28.7189 33.7037L26.8712 22.3768L34.6879 14.3647C35.3077 13.7289 34.9533 12.6541 34.071 12.5185Z"
              fill="#FFB100"
            />
          </g>
          <defs>
            <clipPath id="clip0_15_151">
              <rect width="35" height="35" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <svg
          className="w-6 h-6"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="M34.071 12.5185L23.3114 10.8749L18.4887 0.602412C18.1285 -0.164671 16.87 -0.164671 16.5098 0.602412L11.6885 10.8749L0.928932 12.5185C0.0451818 12.6541 -0.307735 13.7289 0.312057 14.3632L8.12872 22.3753L6.28102 33.7022C6.13372 34.602 7.09477 35.2772 7.88956 34.8353L17.5 29.5241L27.1104 34.8368C27.8979 35.2743 28.8677 34.6122 28.7189 33.7037L26.8712 22.3768L34.6879 14.3647C35.3077 13.7289 34.9533 12.6541 34.071 12.5185Z"
              fill="#FFB100"
            />
          </g>
          <defs>
            <clipPath id="clip0_15_151">
              <rect width="35" height="35" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <svg
          className="w-6 h-6"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="M34.071 12.5185L23.3114 10.8749L18.4887 0.602412C18.1285 -0.164671 16.87 -0.164671 16.5098 0.602412L11.6885 10.8749L0.928932 12.5185C0.0451818 12.6541 -0.307735 13.7289 0.312057 14.3632L8.12872 22.3753L6.28102 33.7022C6.13372 34.602 7.09477 35.2772 7.88956 34.8353L17.5 29.5241L27.1104 34.8368C27.8979 35.2743 28.8677 34.6122 28.7189 33.7037L26.8712 22.3768L34.6879 14.3647C35.3077 13.7289 34.9533 12.6541 34.071 12.5185Z"
              fill="#FFB100"
            />
          </g>
          <defs>
            <clipPath id="clip0_15_151">
              <rect width="35" height="35" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};
export default Product;
