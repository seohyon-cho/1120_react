import './Button.scss';
import { useState } from 'react';

export default function Button() {
	const check = true;
	const [Btn, setBtn] = useState(check);

	return (
		<button
			className='Button'
			onClick={() => {
				setBtn(!check);
				console.log(Btn);
			}}
		>
			토글 open
		</button>
	);
}
