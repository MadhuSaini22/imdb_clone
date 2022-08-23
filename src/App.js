import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import MovieList from "./components/MovieList";
import Movie from "./pages/movieDetail/Movie";
import Register from "./pages/signIn/Register";
import SignInCover from "./pages/signIn/SignInCover";
import AuthLayout from "./layout/AuthLayout";
import PublicLayout from "./layout/PublicLayout";
import Test from "./Test";
import SignIn from "./pages/signIn/SignIn";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        <div className="container">
          <Header />
        </div>
      </div>
      <AuthProvider>
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

        <Route index element={<PublicLayout><Home /> </PublicLayout>}></Route>
        <Route path="signIn" element={<AuthLayout><SignIn /></AuthLayout>}></Route>
        <Route path="signInCover" element={<AuthLayout><SignInCover /></AuthLayout>}></Route>
        <Route path="register" element={<AuthLayout><Register /></AuthLayout>}></Route>
        <Route path="movie/:id" element={<PublicLayout><Movie /></PublicLayout>}></Route>
        <Route path="movies/:type" element={<PublicLayout><MovieList /></PublicLayout>}></Route>
        <Route path="/*" element={<PublicLayout><h1>404 Error</h1></PublicLayout>}></Route>
      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
