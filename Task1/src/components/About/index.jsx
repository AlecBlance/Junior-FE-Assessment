import { useState } from "react";

const About = () => {
  const [truncate, setTruncate] = useState(true);

  return (
    <div className="py-8 px-6 bg-white">
      <h1 className="text-center text-2xl text-custom-black font-black mb-5">
        About <span className="text-palette-red">Us</span>
      </h1>
      <p className={`${truncate ? "line-clamp-3" : "line-clamp-none"} `}>
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
        } bg-palette-red px-3 py-2 text-sm text-white-red rounded-3xl mt-5`}
      >
        Read More
      </button>
    </div>
  );
};
export default About;
