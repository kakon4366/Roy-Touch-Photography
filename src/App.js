import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Checkout from "./Pages/Checkout/Checkout";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Services from "./Pages/Services/Services";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import NotFound from "./Pages/Shared/NotFound/NotFound";

function App() {
	return (
		<div>
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/home" element={<Home />}></Route>
				<Route path="/about" element={<About />}></Route>
				<Route path="/services" element={<Services />}></Route>
				<Route path="/checkout" element={<Checkout />}></Route>
				<Route path="/checkout/:checkoutId" element={<Checkout />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/register" element={<Register />}></Route>
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
			<Footer></Footer>
		</div>
	);
}

export default App;
