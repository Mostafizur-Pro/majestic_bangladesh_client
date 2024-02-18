import { AiOutlineUser } from "react-icons/ai";
import Dropdown from "./Dropdown";
import Link from "next/link";

const DesktopView = () => {
  const logo = (
    <svg
      width="148"
      height="35"
      viewBox="0 0 148 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_842_2073)">
        <path
          d="M148 33.8032C148 46.0733 138.786 48 136.082 48H112.406C111.342 48 110.479 47.1294 110.479 46.0571V2.41858C110.479 1.3383 111.342 0.467623 112.406 0.467623H130.115C130.115 0.467623 142.433 -0.30631 142.433 12.3991C142.433 12.3991 142.777 17.5828 139.626 20.8479C139.402 21.0817 139.162 21.2993 138.906 21.5089C138.618 21.7427 138.306 21.9604 137.97 22.1619C137.97 22.1619 138.434 22.2829 139.162 22.565C139.186 22.5731 139.218 22.5892 139.242 22.5973C141.945 23.6614 148 26.8297 148 33.8032Z"
          fill="url(#paint0_linear_842_2073)"
        />
        <path
          d="M148 33.8032C148 46.0733 138.786 48 136.082 48H112.406C111.342 48 110.479 47.1294 110.479 46.0571V2.41858C110.479 1.3383 111.342 0.467623 112.406 0.467623H130.115C130.115 0.467623 142.433 -0.30631 142.433 12.3991C142.433 12.3991 142.777 17.5828 139.626 20.8479C139.402 21.0817 139.162 21.2993 138.906 21.5089C138.618 21.7427 138.306 21.9604 137.97 22.1619C137.97 22.1619 138.434 22.2829 139.162 22.565C139.186 22.5731 139.218 22.5892 139.242 22.5973C141.945 23.6614 148 26.8297 148 33.8032Z"
          fill="url(#paint1_linear_842_2073)"
        />
        <path
          d="M80.7708 21.5331C81.0828 23.7017 81.5307 25.3383 80.4109 27.3295C79.0751 29.6916 75.8916 30.5301 73.62 28.9097C70.9644 27.0232 71.1404 22.8311 70.8684 19.9207C70.7484 18.6147 70.8524 20.0014 70.7884 19.2355C70.7404 18.6873 70.7004 18.131 70.6604 17.5748C70.5165 15.7044 70.3645 13.8421 70.2205 11.9718C69.9805 8.88413 69.7326 5.79645 69.4926 2.70878C69.2127 -0.886785 63.6056 -0.919032 63.8935 2.70878C64.2535 7.27176 64.6054 11.8267 64.9654 16.3897C65.2533 20.1142 65.1573 23.5324 66.2691 27.3054C68.0289 33.2872 74.0359 37.044 80.1389 34.7142C86.5619 32.2634 87.0098 25.8139 86.1779 20.0336C85.65 16.4542 80.2589 17.9698 80.7708 21.5331Z"
          fill="#1D91CC"
        />
        <path
          d="M65.6222 24.2982C65.9101 28.4823 61.0789 31.7634 57.7834 28.4339C55.3838 26.0154 56.0397 21.9603 55.4478 18.8968C54.7599 15.3335 49.3608 16.841 50.0487 20.3963C50.0807 20.5817 50.0487 20.4688 50.1047 21.0735C50.1607 21.7184 50.1927 22.3714 50.2567 23.0164C50.4086 24.4756 50.5926 25.9509 51.0165 27.3617C52.0164 30.6993 54.12 33.5451 57.4715 34.7221C64.3584 37.1326 71.7332 31.7796 71.2213 24.2901C70.9733 20.7026 65.3742 20.6704 65.6222 24.2982Z"
          fill="#1D91CC"
        />
        <path
          d="M50.2392 24.2496C50.4951 28.5949 45.008 31.8116 41.8805 28.2402C39.7049 25.7571 40.3208 21.9197 39.7369 18.9046C39.049 15.3413 33.6499 16.8488 34.3378 20.4041C34.3618 20.517 34.4497 22.0084 34.5217 22.7904C34.6657 24.3302 34.8577 25.8942 35.3056 27.3776C36.2734 30.6023 38.2731 33.3917 41.4646 34.6251C48.3515 37.2855 56.2782 31.8922 55.8303 24.2496C55.6303 20.6379 50.0312 20.6137 50.2392 24.2496Z"
          fill="#1D91CC"
        />
        <path
          d="M34.5858 23.3792C33.6339 28.3936 26.0671 29.4175 21.6999 29.6513C17.7805 29.8609 12.4374 30.3446 8.70196 28.708C7.97408 28.3936 7.95008 27.8132 7.8541 27.2811C7.90209 27.5552 7.76611 25.7332 7.79811 25.2576C7.8781 24.0161 8.07007 22.4763 8.86994 21.4685C10.0217 20.0255 12.4774 19.3966 14.0291 20.5414C15.6208 21.7104 15.8528 24.7658 15.9808 26.5394C16.2367 29.9818 16.1967 34.0691 14.365 37.1165C11.9254 41.1716 6.98224 41.8004 2.68694 41.8891C-0.912479 41.9616 -0.920478 47.6049 2.68694 47.5324C12.5333 47.3389 20.3081 42.8888 21.4599 32.4487C22.3557 24.3224 19.8522 11.0769 8.68596 14.9304C3.00689 16.8894 1.11119 24.0886 2.65494 29.4658C4.7586 36.8021 16.7007 35.6331 22.3318 35.2542C28.8907 34.8108 38.4891 32.6986 39.9769 24.8867C40.6648 21.3315 35.2657 19.8078 34.5858 23.3792Z"
          fill="#1D91CC"
        />
        <path
          d="M94.313 17.7684C94.761 20.711 97.1126 27.6361 93.6011 29.45C90.7376 30.9334 87.8101 28.5632 86.9862 25.9673C86.3223 23.8793 86.4823 21.6865 86.0664 19.5581C85.3705 15.9948 79.9713 17.5024 80.6672 21.0576C80.6752 21.0818 80.7152 21.6542 80.7712 22.2669C80.8432 23.1779 80.9392 24.0969 81.0752 24.9999C81.3711 26.9266 81.891 28.8453 82.8989 30.5303C85.3305 34.5934 90.6496 36.3428 95.0889 34.8917C103.064 32.2877 100.648 22.404 99.7122 16.2689C99.1682 12.6975 93.7771 14.2132 94.313 17.7684Z"
          fill="#1D91CC"
        />
        <path
          d="M94.0405 47.5241C97.6399 47.5241 97.6479 41.8809 94.0405 41.8809C90.441 41.8809 90.433 47.5241 94.0405 47.5241Z"
          fill="#1D91CC"
        />
        <path
          d="M72.2358 47.4519C76.3871 47.605 80.5384 47.6373 84.6897 47.5406C88.2892 47.4599 88.2972 41.8167 84.6897 41.8973C80.5384 41.994 76.3871 41.9618 72.2358 41.8086C68.6284 41.6716 68.6363 47.3148 72.2358 47.4519Z"
          fill="#1D91CC"
        />
        <path
          d="M38.1537 47.4516C42.649 47.6048 47.1443 47.637 51.6395 47.5403C55.239 47.4677 55.247 41.8245 51.6395 41.897C47.1443 41.9938 42.649 41.9615 38.1537 41.8083C34.5463 41.6793 34.5543 47.3226 38.1537 47.4516Z"
          fill="#1D91CC"
        />
        <path
          d="M20.2681 6.15914C26.4671 6.31232 32.674 6.34456 38.873 6.24782C42.4725 6.19139 42.4805 0.548125 38.873 0.604558C32.666 0.7013 26.4671 0.669052 20.2681 0.515878C16.6606 0.419136 16.6606 6.0624 20.2681 6.15914Z"
          fill="#1D91CC"
        />
        <path
          d="M139.161 22.5653L134.258 23.0974L137.073 31.5543L134.746 31.6591L129.546 24.2583C129.546 24.2583 128.81 23.1136 127.499 22.9604C126.387 22.8394 123.419 22.9281 122.515 22.9443C122.324 22.9604 122.132 22.912 121.956 22.8153C121.588 22.6057 121.012 22.1945 121.012 21.5899C121.012 20.8724 121.764 20.429 122.14 20.2516C122.26 20.1871 122.396 20.1629 122.531 20.1629L127.315 20.0984C127.955 20.0662 128.547 19.7357 128.914 19.2116L134.817 10.787L136.777 10.5049L134.082 19.8001C134.082 19.8001 137.033 20.3887 139.625 20.8482C139.401 21.082 139.161 21.2996 138.905 21.5093C138.617 21.743 138.305 21.9607 137.969 22.1623C137.969 22.1623 138.433 22.2832 139.161 22.5653Z"
          fill="white"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_842_2073"
          x1="110.481"
          y1="24.2304"
          x2="148.003"
          y2="24.2304"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#1D91CC" />
          <stop offset="0.7728" stop-color="#5091FD" />
          <stop offset="1" stop-color="#6894FD" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_842_2073"
          x1="110.481"
          y1="24.2304"
          x2="148.003"
          y2="24.2304"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#1D91CC" />
          <stop offset="0.0001" stop-color="#1D91CC" />
          <stop offset="0.71875" stop-color="#50B2E4" />
          <stop offset="1" stop-color="#53A2FF" />
        </linearGradient>
        <clipPath id="clip0_842_2073">
          <rect width="148" height="48" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  const visaMenu = [
    {
      name: "Visa Application",
      path: "visa-applications",
    },
    {
      name: "Visa Guide",
      path: "visa-guide",
    },
  ];

  const loginMenu = [
    {
      name: "Sign in",
      path: "signin",
    },
    {
      name: "Sign up",
      path: "signup",
    },
  ];

  const otherMenu = [
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Bilito",
      path: "/bilito",
    },
    {
      name: "Why Bilito?",
      path: "/whybilito",
    },
    {
      name: "Travel Guide",
      path: "/travelguide",
    },
    {
      name: "News",
      path: "/news",
    },
    {
      name: "FAQ & Support",
      path: "/faq",
    },
  ];
  return (
    <>
      <nav className="py-3 flex justify-between items-center">
        <Link href={`/`}>{logo}</Link>

        <ul className="flex items-center gap-6 text-sm">
          <li>Hotel</li>
          <li>Flight</li>
          <li>Holiday</li>
          <li>
            <Dropdown menu={visaMenu} icon={true}>
              Visa
            </Dropdown>
          </li>
          <li>Medical</li>
          <li>Promotional</li>

          <li>
            <Dropdown menu={otherMenu} icon={true}>
              Others
            </Dropdown>
          </li>
        </ul>
        <button className="bg-[#1D91CC] p-2 hover:bg-[#167db1] duration-300 rounded-full flex justify-center items-center gap-2">
          <Dropdown menu={loginMenu} icon={false} width={"w-fit"}>
            <AiOutlineUser className="text-2xl text-white" />
          </Dropdown>
        </button>
      </nav>
    </>
  );
};

export default DesktopView;
