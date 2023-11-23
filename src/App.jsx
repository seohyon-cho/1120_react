import { useState } from 'react';
import Modal from './modal/Modal';
import './App.scss';

export default function App() {
	const [Open, setOpen] = useState(false);

	return (
		<>
			<h1>Parent</h1>
			<button onClick={() => setOpen(true)}>open</button>
			{Open && <Modal setOpen={setOpen} />}
		</>
	);
}
