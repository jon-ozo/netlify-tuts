interface Svgprops {
	svgProps: object;
	children: React.ReactNode;
}

export default function Svg({ svgProps, children }: Svgprops) {
	return (
		<svg
			aria-hidden='true'
			{...svgProps}
		>
			{children}
		</svg>
	);
}
