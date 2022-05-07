import Nav from './components/Nav/Nav';
import Cards from './components/card/Cards';

export default function Landing() {
	return (
		<div className="bg">
			<Nav />
			{/* <DateTime/> */}
			<Cards />
		</div>
	);
}
