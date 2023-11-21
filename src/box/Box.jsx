import './Box.scss';

export default function Box() {
	const changeBg = (e, bg) => {
		e.target.style.backgroundColor = bg;
	};
	return (
		<>
			<div className='Box' onClick={(e) => changeBg(e, 'pink')}>
				Box
			</div>
			<div className='Box' onClick={(e) => changeBg(e, 'skyblue')}>
				Box
			</div>
			<div className='Box' onClick={(e) => changeBg(e, 'black')}>
				Box
			</div>
		</>
	);
}
