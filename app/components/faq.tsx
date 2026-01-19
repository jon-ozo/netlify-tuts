export default function Faq({
	faqContents,
}: {
	faqContents: Array<{ id: number; question: string; answer: string }>;
}) {
	return (
		<ul className='flex-display_faq'>
			{faqContents.map(
				(content: { id: number; question: string; answer: string }) => (
					<li key={content.id}>
						<details>
							<summary>{content.question}</summary>
							<p className='details-paragraph slide-up'>{content.answer}</p>
						</details>
					</li>
				)
			)}
		</ul>
	);
}
