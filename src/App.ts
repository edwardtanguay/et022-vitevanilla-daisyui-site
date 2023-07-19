import './styles/main.scss';
import { getMenu, getCurrentPage } from './Router';

document.querySelector<HTMLDivElement>('#app')!.innerHTML =/* html */`
<main class="container p-6">
	<header>
		<h1 class="text-yellow-500 text-4xl">Info Site</h1>
		${getMenu()}
	</header>
	${getCurrentPage()}
</main>
`;