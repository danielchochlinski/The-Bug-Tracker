import MainNavigation from "./MainNavigation"
import Topbar from "./Topbar"
const Layout = (props) => {
    return (
        <div>
            <MainNavigation />
            <Topbar />
            <main>{props.children}</main>

        </div>
    )
}

export default Layout

