export default function App() {
	const changeButton = (e, txt) => {
		e.target.innerText = txt;
	};

	return (
		<>
			<section>
				<button onClick={(e) => changeButton(e, '버튼2')}>버튼</button>
			</section>
		</>
	);
}
