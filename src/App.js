import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './components/HomePage/homepage';
import CTFBlog from './components/CTFBlog/CTFBlog';
import Login2 from './components/Login2/Login2';
import Signup2 from './components/Signup2/Signup2';
import Landing from './landing';
import RouteMe from './routeme';
import FlagQues from './components/FlagQues/FlagQues';
import Signin from './components/Signin/Signin';
import Crypto from './components/card/Crypto';
import OSINT from './components/card/OSINT';
import Wireshark from './components/card/Wireshark';
import BA from './components/card/BA';
import Steganography from './components/card/Steganography';
import SQLi from './components/card/SQLi';
import XSS from './components/card/XSS';
import BAC from './components/card/BAC';
import SDE from './components/card/SDE';
import Miscellaneous from './components/card/Miscellaneous';
import Quiz from './components/card/Quiz';
import ForgotPassword from './components/forgotpass/ForgotPassword';
import Aboutus from './components/Aboutus/Aboutus';

//import "./db/conn";

// import Rules from './components/rules/Rules';
// import Nav from './components/Nav/Nav';
// import DateTime from './components/time/DateTime';
// import Card from './components/card/Card';
// import Cards from './components/card/Cards';
// import RulePage from './RulePage';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				{/* <Nav/> */}
				<Switch>
					<Route path="/" exact>
						<Homepage />
					</Route>
					<Route path="/Signin">
						<Signin />
					</Route>
					<Route path="/routeme">
						<RouteMe />
					</Route>
					<Route path="/blog">
						<CTFBlog />
					</Route>
					<Route path="/login2">
						<Login2 />
					</Route>
					<Route path="/signup2">
						<Signup2 />
					</Route>
					<Route path="/ctf/Cryptography/:id">
						<FlagQues />
					</Route>
					<Route path="/ctf/Cryptography">
						<Crypto />
					</Route>

					<Route path="/ctf/OSINT/:id">
						<FlagQues />
					</Route>
					<Route path="/ctf/OSINT">
						<OSINT />
					</Route>

					<Route path="/ctf/Wireshark/:id">
						<FlagQues />
					</Route>
					<Route path="/ctf/Wireshark">
						<Wireshark />
					</Route>

					<Route path="/ctf/BA/:id">
						<FlagQues />
					</Route>
					<Route path="/ctf/BA">
						<BA />
					</Route>

					<Route path="/ctf/Steganography/:id">
						<FlagQues />
					</Route>
					<Route path="/ctf/Steganography">
						<Steganography />
					</Route>

					<Route path="/ctf/SQLi/:id">
						<FlagQues />
					</Route>
					<Route path="/ctf/SQLi">
						<SQLi />
					</Route>

					<Route path="/ctf/XSS/:id">
						<FlagQues />
					</Route>
					<Route path="/ctf/XSS">
						<XSS />
					</Route>

					<Route path="/ctf/BAC/:id">
						<FlagQues />
					</Route>
					<Route path="/ctf/BAC">
						<BAC />
					</Route>

					<Route path="/ctf/SDE/:id">
						<FlagQues />
					</Route>
					<Route path="/ctf/SDE">
						<SDE />
					</Route>

					<Route path="/ctf/Miscellaneous/:id">
						<FlagQues />
					</Route>
					<Route path="/ctf/Miscellaneous">
						<Miscellaneous />
					</Route>

					<Route path="/ctf/Quiz/:id">
						<FlagQues />
					</Route>
					<Route path="/ctf/Quiz">
						<Quiz />
					</Route>

					<Route path="/AboutUs">
						<Aboutus />
					</Route>

					{/* <Route exact path='/'>{auth? contest : <landing/>}</Route> */}
					<Route path="/ctf">
						<Landing />
					</Route>
					<Route path="/forgot">
						<ForgotPassword />
					</Route>
					{/* <Route path='/rules'><RulePage/></Route> */}
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
