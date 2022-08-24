import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import MovieList from "./components/MovieList";
import Movie from "./pages/movieDetail/Movie";
import Register from "./pages/signIn/Register";
import SignInCover from "./pages/signIn/SignInCover";
import AuthLayout from "./layout/AuthLayout";
import PublicLayout from "./layout/PublicLayout";
import SignIn from "./pages/signIn/SignIn";
import { AuthProvider } from "./contexts/AuthContext";
// import PrivateRoute from "./PrivateRoute";
import { Watchlist } from "./components/WatchList";
import { Add } from "./components/Add";
import { Watched } from "./components/Watched";
import {GlobalProvider} from "./contexts/GlobalState"

function App() {
  return (
    <div className="text-white">
      <GlobalProvider>
      <AuthProvider>
        <div className="w-full bg-headerMain">
          <div className="max-w-container m-auto">
            <Header />
          </div>
        </div>
        <Routes>
          {/* <Route
          path="/"
          element={
            <AuthLayout>
              <Test />
            </AuthLayout>
          }
        ></Route>
        <Route
          path="/sign"
          element={
            <PublicLayout>
              <Test />
            </PublicLayout>
          }
        ></Route> */}
          <Route
            path="/watchlist"
            element={
              <PublicLayout>           
                <Watchlist />
              </PublicLayout>
            }
          />

          <Route
            path="/add"
            element={
              <PublicLayout>
                <Add />
              </PublicLayout>
            }
          />

          <Route
            path="/watched"
            element={
              <PublicLayout>
                <Watched />
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
      </AuthProvider>
      </GlobalProvider>
    </div>
  );
}

export default App;
