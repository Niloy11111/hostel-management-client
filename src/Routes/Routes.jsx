import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Pages/Home/Home";
import Login from "../Layout/Pages/JoinUs/Login";
import Register from "../Layout/Pages/JoinUs/Register";


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