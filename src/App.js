import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import SignIn from "./pages/signIn/SignIn";
import MovieList from "./components/MovieList";
import Movie from "./pages/movieDetail/Movie";
import Register from "./pages/signIn/Register";
import SignInCover from "./pages/signIn/SignInCover";

// const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) => (
//       <Layout>
//         <Component {...props}></Component>
//       </Layout>
//     )}
//   ></Route>
// );
// <AppRoute path="/" layout={AuthLayout} component={SignIn1} />

function App() {
  return (
    <div className="App">
      <Router>
        <div className="mainContainer">
          <div className="container">
            <Header />            
          </div>
        </div>
        {/* <div className="downContainerMain">
          <div className="downContainer" > */}
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="signIn" element={<SignIn />}></Route>
            <Route path="signInCover" element={<SignInCover />}></Route>
            <Route path="register" element={<Register/>}></Route>
            <Route path="movie/:id" element={<Movie />}></Route>
            <Route path="movies/:type" element={<MovieList />}></Route>
            <Route path="/*" element={<h1>404 Error</h1>}></Route>
          </Routes>
        {/* </div>
        </div> */}
      </Router>
    </div>
  );
}

export default App;
