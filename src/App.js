import { Route, Redirect, Switch } from "react-router-dom";
import Movies from "./components/movies";
import Customer from "./components/customer";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/navbar";
import MovieForm from './components/movieForm';
import "./App.css";

function App() {
  return (
    <>
    <NavBar />
    <main className="container">
      <Switch>
        <Route path="/movies/:id" component={MovieForm} />
        <Route path="/movies" component={Movies} />
        <Route path="/customers" component={Customer} />
        <Route path="/rentals" component={Rentals} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exact to="/movies" />
        <Redirect to="/not-found" />
      </Switch>
    </main></>
  );
}

export default App;
