import DesktopView from "../NavComponents/DesktopView";
import MobileView from "../NavComponents/MobileView";

const Navbar = () => {
  return (
    <>
      <div className="desktop_container md:block hidden">
        <DesktopView />
      </div>
      <div className="md:hidden block mx-auto">
        <MobileView />
      </div>
    </>
  );
};

export default Navbar;
