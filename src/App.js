
import Header from './Header/Header';
import s from './App.module.css'
import Section1 from './Section/section1';
import Section2 from './Section/section2';
import Section3 from './Section/section3';
import Footer from './Footer/footer';


function App() {
	return (
		<div className={s.app}>
			<Header />
			<Section1 />
			<Section2 />
			<Section3 />
			<Footer />
		</div>
	);
}

export default App;
