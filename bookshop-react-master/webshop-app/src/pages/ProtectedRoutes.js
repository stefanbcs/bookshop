import { Outlet } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

const useAuth = () => {
    let localStorageObj = localStorage.getItem("user_id");
    const user = { loggedIn: localStorageObj ? true : false };
    return user && user.loggedIn;
};

const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <NotFoundPage />;
};

export default ProtectedRoutes;
