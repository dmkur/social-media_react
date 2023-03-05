import {Home, Login, Profile, Register} from "./pages";
import {createBrowserRouter, Navigate, Outlet, RouterProvider,} from "react-router-dom"
import {NavBar} from "./components/navbar/NavBar";
import {LeftBar} from "./components/leftBar/LeftBar";
import {RightBar} from "./components/rightBar/RightBar";



const App = () => {
    const currentUser = true

    const Layout = () => {
        return (
            <div>
                <NavBar/>
                <div style={{display: 'flex'}}>
                    <LeftBar/>
                    <Outlet/>
                    <RightBar/>
                </div>
            </div>
        )
    }

    const ProtectedRoute = ({children}) => {
        if(!currentUser){
            return <Navigate to={'/login'}/>
        }

        return children
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <ProtectedRoute><Layout/></ProtectedRoute>,
            children: [
                {
                    path: '/',
                    element: <Home/>
                },
                {
                    path: '/profile/:id',
                    element: <Profile/>
                },
            ]
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/register",
            element: <Register/>
        },
    ]);

    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    )
};

export {App};
