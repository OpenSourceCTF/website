export default () => {
	const testEl = document.querySelector('.js-test')

	if (!testEl) return

	testEl.textContent = 'Frontend JS loaded.'
}
