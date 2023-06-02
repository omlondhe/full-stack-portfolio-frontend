import "@/styles/components/navbar/ToggleButton.css";
import { ToggleButtonType } from "@/types/components/navbar/types";

function ToggleButton({
  navbarIsOpen,
  setNavbarIsOpen,
  inView,
}: ToggleButtonType) {
  return (
    <div
      className={`toggleButton flex flex-col justify-around align-middle w-[30px] h-[30px] fixed bottom-4 ${
        inView ? "toggleButton-in-view" : "toggleButton-not-in-view"
      } ${navbarIsOpen ? "toggleButton-is-open" : "toggleButton-is-close"}`}
      onClick={() => setNavbarIsOpen(!navbarIsOpen)}
    >
      <div
        className={`toggleButton-row w-full h-[3px] rounded-full ${
          navbarIsOpen ? "bg-red-500" : "bg-white"
        } ${
          navbarIsOpen
            ? "toggleButton-row-is-open"
            : "toggleButton-row-is-close"
        }`}
      ></div>
      <div
        className={`toggleButton-row w-full h-[3px] rounded-full ${
          navbarIsOpen ? "bg-red-500" : "bg-white"
        } ${
          navbarIsOpen
            ? "toggleButton-row-is-open"
            : "toggleButton-row-is-close"
        }`}
      ></div>
      <div
        className={`toggleButton-row w-full h-[3px] rounded-full ${
          navbarIsOpen ? "bg-red-500" : "bg-white"
        } ${
          navbarIsOpen
            ? "toggleButton-row-is-open"
            : "toggleButton-row-is-close"
        }`}
      ></div>
    </div>
  );
}

export default ToggleButton;
