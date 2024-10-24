import React from "react";

function Footer() {
  return (
    <>
      <section className="w-[100%] bg-black sm:py-[0px] py-[50px] text-white">
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="max-w-[700px] sm:px-[10px] px-[40px] mx-auto mt-[30px]">
          <form
            action=""
            className="grid sm:grid-cols-[70%_auto] grid-cols-1 gap-[20px] "
          >
            <input
              type="text"
              className="border-[1px] border-[green] bg-[transparent] h-[50px] pl-[20px]"
              placeholder="Email Address"
            />
            <button className="bg-[red] text-white rounded-[5px] p-[5px] py-[7px] hover:bg-[rgb(193,17,35)] duration-300 text-[20px]">
              Get Started{" "}
            </button>
          </form>
        </div>
        <div className="max-w-[900px] mx-auto text-[#989696] text-start py-[50px] sm:px-[0px] px-[100px] ">
          <h3>
            Question? Call{" "}
            <a href="#" className="underline ">
              000-800-919-1664
            </a>
          </h3>
          <div className="grid sm:grid-cols-4 gap-3 py-[40px]">
            <a href="#" className="underline active:text-[red] ">
              FAQ
            </a>
            <a href="#" className="underline active:text-[red] ">
              Account
            </a>
            <a href="#" className="underline active:text-[red] ">
              Investor Relations
            </a>
            <a href="#" className="underline active:text-[red]">
              Ways To Watch
            </a>
            <a href="#" className="underline active:text-[red]">
              Privacy
            </a>
            <a href="#" className="underline active:text-[red] ">
              Coporate Information
            </a>
            <a href="#" className="underline active:text-[red]">
              Speed Test
            </a>
            <a href="#" className="underline active:text-[red]">
              Only on Netflix
            </a>
            <a href="#" className="underline active:text-[red]">
              Help Centre
            </a>
            <a href="#" className="underline active:text-[red]">
              Media Centre
            </a>
            <a href="#" className="underline active:text-[red]">
              Jobs
            </a>

            <a href="#" className="underline active:text-[red]">
              Terms of Use
            </a>

            <a href="#" className="underline active:text-[red]">
              Cookie Preferences
            </a>

            <a href="#" className="underline active:text-[red]">
              Contact Us
            </a>
            <a href="#" className="underline active:text-[red] ">
              Legal Notices
            </a>
           
          </div>
          <div className="flex justify-start gap-[10px]">
                <div className="relative">
                  <svg
                    className="text-white absolute top-[10px] left-[5px]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    role="img"
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    data-icon="LanguagesSmall"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <select
                    name=""
                    id=""
                    className="bg-black text-white border-[1px] border-[#747272]
                    sm:p-[5px_25px] p-[5px_20px] rounded-[5px]"
                  >
                    <option value="">English</option>
                    <option value="">Hindi</option>
                  </select>
                </div>
                </div>
                <h6 className="py-[30px]">Netflix India</h6>
        </div>
      </section>
    </>
  );
}

export default Footer;