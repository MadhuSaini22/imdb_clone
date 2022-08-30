import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import MovieList from "./components/MovieList";
import Movie from "./pages/Movie";
import Register from "./pages/signIn/Register";
import SignInCover from "./pages/signIn/SignInCover";
import AuthLayout from "./layout/AuthLayout";
import PublicLayout from "./layout/PublicLayout";
import SignIn from "./pages/signIn/SignIn";
import { AuthProvider } from "./contexts/AuthContext";
// import PrivateRoute from "./PrivateRoute";
import { Watchlist } from "./pages/WatchList";
// import { Add } from "./components/Add";
import { GlobalProvider } from "./contexts/GlobalState";
import Footer from "./components/Footer";
import Menu from "./pages/Menu";

function App() {
  return (
    <AuthProvider>
      <GlobalProvider>
        <div className="text-white">
          <div className="w-full bg-headerMain">
            <div className="container">
              <Header />
            </div>
          </div>
          <Routes>
            <Route
              path="/watchlist"
              element={
                <PublicLayout>
                  <Watchlist />
                </PublicLayout>
              }
            />
            <Route
              path="/menu"
              element={
                <PublicLayout>
                  <Menu />
                </PublicLayout>
              }
            />

            <Route
              index
              element={
                <PublicLayout>
                  <Home />
                </PublicLayout>
              }
            ></Route>
            <Route
              path="signIn"
              element={
                <AuthLayout>
                  <SignIn />
                </AuthLayout>
              }
            ></Route>
            <Route
              path="signInCover"
              element={
                <AuthLayout>
                  <SignInCover />
                </AuthLayout>
              }
            ></Route>
            <Route
              path="register"
              element={
                <AuthLayout>
                  <Register />
                </AuthLayout>
              }
            ></Route>
            <Route
              path="movie/:id"
              element={
                <PublicLayout>
                  <Movie />
                </PublicLayout>
              }
            ></Route>
            <Route
              path="movies/:type"
              element={
                <PublicLayout>
                  <MovieList />
                </PublicLayout>
              }
            ></Route>
            <Route
              path="/*"
              element={
                <PublicLayout>
                  <h1>404 Error</h1>
                </PublicLayout>
              }
            ></Route>
          </Routes>
          <div className="w-full bg-black">
            <div className="container">
              <Footer />
            </div>
          </div>
        </div>
      </GlobalProvider>
    </AuthProvider>
  );
}

export default App;
