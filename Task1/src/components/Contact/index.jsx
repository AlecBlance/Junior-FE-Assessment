const Contact = () => {
  return (
    <div className="py-16 px-6 md:py-8">
      <h1 className="text-center text-2xl text-custom-black font-black mb-7 md:text-4xl">
        Contact <span className="text-palette-red">Us</span>
      </h1>
      <form className="md:flex md:items-center md:flex-col">
        <div className="md:w-2/3">
          <label className="relative">
            <svg
              className="absolute w-4 h-4 top-1/2 transform -translate-y-1/2 left-3"
              viewBox="0 0 21 21"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5 0C7.44684 0 4.96289 2.48395 4.96289 5.53711C4.96289 8.59027 7.44684 11.0742 10.5 11.0742C13.5532 11.0742 16.0371 8.59027 16.0371 5.53711C16.0371 2.48395 13.5532 0 10.5 0ZM10.5 9.84375C8.12532 9.84375 6.19336 7.91179 6.19336 5.53711C6.19336 3.16243 8.12532 1.23047 10.5 1.23047C12.8747 1.23047 14.8066 3.16243 14.8066 5.53711C14.8066 7.91179 12.8747 9.84375 10.5 9.84375Z"
                fill="#A8A8A8"
              />
              <path
                d="M17.3892 14.6916C15.8733 13.1524 13.8637 12.3047 11.7305 12.3047H9.26953C7.13639 12.3047 5.12671 13.1524 3.61077 14.6916C2.10226 16.2233 1.27148 18.2451 1.27148 20.3848C1.27148 20.7245 1.54695 21 1.88672 21H19.1133C19.4531 21 19.7285 20.7245 19.7285 20.3848C19.7285 18.2451 18.8977 16.2233 17.3892 14.6916ZM2.52902 19.7695C2.83726 16.2797 5.74264 13.5352 9.26953 13.5352H11.7305C15.2574 13.5352 18.1627 16.2797 18.471 19.7695H2.52902Z"
                fill="#A8A8A8"
              />
            </svg>

            <input
              type="text"
              placeholder="Name"
              className="bg-slate-200 w-full py-2 px-9 rounded-xl"
            />
          </label>
        </div>
        <div className="md:w-2/3">
          <label className="relative">
            <svg
              className="absolute w-4 h-4 top-1/2 transform -translate-y-1/2 left-3"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.1543 3.11719H1.8457C0.825932 3.11719 0 3.94825 0 4.96289V16.0371C0 17.0578 0.832002 17.8828 1.8457 17.8828H19.1543C20.1655 17.8828 21 17.0613 21 16.0371V4.96289C21 3.95005 20.1773 3.11719 19.1543 3.11719ZM18.8958 4.34766C18.5187 4.72274 12.0292 11.1781 11.8051 11.401C11.4565 11.7496 10.993 11.9416 10.5 11.9416C10.007 11.9416 9.54352 11.7496 9.19373 11.3998C9.04304 11.2499 2.62512 4.86585 2.10418 4.34766H18.8958ZM1.23047 15.7867V5.21411L6.54765 10.5033L1.23047 15.7867ZM2.10496 16.6523L7.42005 11.371L8.32482 12.2711C8.90585 12.8521 9.67833 13.172 10.5 13.172C11.3217 13.172 12.0942 12.8521 12.674 12.2722L13.5799 11.371L18.895 16.6523H2.10496ZM19.7695 15.7867L14.4523 10.5033L19.7695 5.21411V15.7867Z"
                fill="#A8A8A8"
              />
            </svg>

            <input
              type="text"
              placeholder="Email"
              className="bg-slate-200 w-full py-2 px-9 mt-4 rounded-xl"
            />
          </label>
        </div>
        <textarea
          name="Message"
          id="message"
          cols="30"
          rows="10"
          className="bg-slate-200 w-full px-9 rounded-xl mt-5 py-5 md:w-2/3"
          placeholder="Message"
        ></textarea>
        <button className="w-full md:w-2/3 bg-palette-red px-3 py-3 text-sm text-white-red rounded-3xl mt-5">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
