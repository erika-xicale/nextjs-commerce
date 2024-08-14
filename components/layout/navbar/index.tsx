import DesktopNavbar from './reposive/desktop';
/*import MobileNavbar from './reposive/mobile';
import TabletNavbar from './reposive/tablet';
*/
export default async function Navbar() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopNavbar />
      </div>


    </>
  );
}
