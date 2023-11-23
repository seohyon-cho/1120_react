import './Modal.scss';

export default function Modal({ setOpen }) {
	return (
		<aside className='Modal'>
			<h1>Modal</h1>
			<button onClick={() => setOpen(false)}>close</button>
		</aside>
	);
}
