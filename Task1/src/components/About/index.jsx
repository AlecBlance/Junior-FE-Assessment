import { useState } from "react";

const About = () => {
  const [truncate, setTruncate] = useState(true);

  return (
    <div className="py-16 px-6 lg:px-32 lg:py-32 bg-white">
      <h1 className="text-center text-2xl text-custom-black font-black mb-5 md:text-4xl md:mb-10">
        About <span className="text-palette-red">Us</span>
      </h1>
      <p
        className={`${
          truncate ? "line-clamp-3" : "line-clamp-none"
        } lg:leading-8`}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        vulputate pretium augue. In interdum eleifend maximus. In hac habitasse
        platea dictumst. Nulla facilisis hendrerit metus at imperdiet. Nam
        eleifend nisl quis arcu hendrerit imperdiet. Nunc luctus enim non magna
        ultrices finibus. Aenean faucibus posuere metus, sit amet tincidunt
        sapien lacinia a. Pellentesque vitae venenatis ante. Proin porta tellus
        at dui consectetur vulputate. Pellentesque imperdiet sapien et purus
        porta vehicula. Integer pharetra mi in volutpat vehicula.
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
