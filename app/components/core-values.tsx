import type { ReactNode } from 'react';

interface componentProps {
	svg: ReactNode;
	h3: string;
	paragraph: string;
}

export default function CoreValues({ svg, h3, paragraph }: componentProps) {
	return (
		<li>
			{svg}
			<h3>{h3}</h3>
			<p>{paragraph}</p>
		</li>
	);
}
