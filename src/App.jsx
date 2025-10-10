import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { Home } from "./pages/Home";
import { WatchList } from "./pages/WatchList";
import { WatchListLayout } from "./layouts/WatchListLayout";
import { About } from "./pages/About";
import { ContactForm } from "./components/ContactForm";
import { ContactLayout } from "./layouts/ContactLayout";
import { NotFound } from "./components/NotFound";
import { SignUp } from "./pages/SignUp";
import { Login } from "./pages/Login";
import { ProtectedLayout } from "./layouts/ProtectedLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<SignUp />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />

        <Route element={<ProtectedLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<ContactLayout />}>
            <Route path="form" element={<ContactForm />} />
          </Route>
          <Route path="watchlist" element={<WatchListLayout />}>
            <Route index element={<WatchList />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
