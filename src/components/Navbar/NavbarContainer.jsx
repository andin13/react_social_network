import Navbar from "./Navbar";
import StoreContext from "../../StoreContext";

const NavbarContainer = (props) => {
    return <StoreContext.Consumer>
        {
            store => {
                let state = store.getState();
                let NavbarItems = state.sidebar.NavbarItems;
                let FriendsList = state.sidebar.FriendsList;
                return <Navbar NavbarItems={NavbarItems}
                               FriendsList={FriendsList}
                />
            }
        }
    </StoreContext.Consumer>
}

export default NavbarContainer;