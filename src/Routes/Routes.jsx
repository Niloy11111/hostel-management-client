import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Pages/Home/Home";
import Login from "../Layout/Pages/JoinUs/Login";
import Register from "../Layout/Pages/JoinUs/Register";
import Dashboard from "../Layout/Pages/Dashboard/Dashboard";
import AdminProfile from "../Layout/Pages/Dashboard/AdminProfile/AdminProfile";
import ManageUsers from "../Layout/Pages/Dashboard/ManageUsers/ManageUsers";
import AddMeal from "../Layout/Pages/Dashboard/AddMeal/AddMeal";
import AllMeals from "../Layout/Pages/Dashboard/AllMeals/AllMeals";
import AllReviews from "../Layout/Pages/Dashboard/AllReviews/AllReviews";
import UserProfile from "../Layout/Pages/Dashboard/UserProfile/UserProfile";
import RequestedMeals from "../Layout/Pages/Dashboard/RequestedMeals/RequestedMeals";
import UserReviews from "../Layout/Pages/Dashboard/UserReviews/UserReviews";
import ServeMeals from "../Layout/Pages/Dashboard/ServeMeals/ServeMeals";
import UpcomingMeals from "../Layout/Pages/Dashboard/UpcomingMeals/UpcomingMeals";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main> ,
      children : [
       {
        path : '/',
        element : <Home></Home>
       },
       {
        path : '/login',
        element : <Login></Login>
       },
       {
        path : '/register',
        element : <Register></Register>
       }
      ]
    },

    {
      path : 'dashboard',
      element :<PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>,
      children : [
        // admin routes
        {
          path : 'adminProfile',
          element : <AdminProfile></AdminProfile>
        },
        {
          path : 'manageUsers',
          element : <AdminRoute> <ManageUsers></ManageUsers></AdminRoute>
        },
        {
          path : 'addMeal',
          element : <AddMeal></AddMeal>
        },
        {
          path : 'allMeals',
          element : <AllMeals></AllMeals>
        },
        {
          path : 'allReviews',
          element : <AllReviews></AllReviews>
        },
        {
          path : 'serveMeals',
          element : <ServeMeals></ServeMeals>
        },
        {
          path : 'upcomingMeals',
          element : <UpcomingMeals></UpcomingMeals>
        },

        // user routes
        {
          path : 'userProfile',
          element : <UserProfile></UserProfile>
        },
        {
          path : 'requestedMeals',
          element : <RequestedMeals></RequestedMeals>
        },
        {
          path : 'userReviews',
          element : <UserReviews></UserReviews>
        },

      ]
    }
    
    // {
    //   path : 'dashboard',
    //   element : <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    //   children : [
    //     {
    //       path : 'userHome',
    //       element : <UserHome></UserHome>
    //     },
    //     {
    //       path : 'cart',
    //       element : <Cart></Cart>
    //     },
    //     {
    //       path : 'payment',
    //       element : <Payment></Payment>
    //     },
    //     {
    //       path : 'paymentHistory',
    //       element : <PaymentHistory></PaymentHistory>
    //     },
    //     //admin only routes
    //     {
    //       path : 'adminHome',
    //       element : <AdminRoute><AdminHome></AdminHome></AdminRoute>
    //     },
    //     {
    //       path : 'addItems',
    //       element : <AdminRoute><AddItems></AddItems></AdminRoute>
    //     },
    //     {
    //       path : 'manageItems',
    //       element : <AdminRoute> <ManageItems></ManageItems> </AdminRoute>
    //     },
    //     {
    //       path : 'updateItem/:id',
    //       element : <AdminRoute> <UpdateItem></UpdateItem> </AdminRoute>,
    //       loader : ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
    //     },
    //     {
    //       path : 'allUsers',
    //       element : <AdminRoute><AllUsers></AllUsers></AdminRoute>
    //     },
    //   ]
    // }
   
  ]);