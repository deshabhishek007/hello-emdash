import { definePlugin } from "emdash";
import type { PluginContext } from "emdash";

const QUOTES: Array<{ text: string; author: string }> = [
	{ text: "The question of whether a computer can think is no more interesting than the question of whether a submarine can swim.", author: "Edsger W. Dijkstra" },
	{ text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
	{ text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
	{ text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
	{ text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
	{ text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
	{ text: "The most disastrous thing that you can ever learn is your first programming language.", author: "Alan Kay" },
	{ text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
	{ text: "It's not a bug — it's an undocumented feature.", author: "Anonymous" },
	{ text: "The web is more a social creation than a technical one.", author: "Tim Berners-Lee" },
	{ text: "The computer was born to solve problems that did not exist before.", author: "Bill Gates" },
	{ text: "One machine can do the work of fifty ordinary humans. No machine can do the work of one extraordinary human.", author: "Elbert Hubbard" },
	{ text: "The most important property of a program is whether it accomplishes the intention of its user.", author: "C.A.R. Hoare" },
	{ text: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.", author: "Bill Gates" },
	{ text: "Software is a great combination between artistry and engineering.", author: "Bill Gates" },
	{ text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
	{ text: "The function of good software is to make the complex appear to be simple.", author: "Grady Booch" },
	{ text: "There are only two hard things in computer science: cache invalidation and naming things.", author: "Phil Karlton" },
	{ text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
	{ text: "The trouble with programmers is that you can never tell what a programmer is doing until it's too late.", author: "Seymour Cray" },
	{ text: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.", author: "John Woods" },
	{ text: "The Internet is the world's largest library. It's just that all the books are on the floor.", author: "John Allen Paulos" },
	{ text: "Humanity is still writing the code that will determine our future.", author: "Anonymous" },
	{ text: "Learning to write programs stretches your mind, and helps you think better.", author: "Bill Gates" },
	{ text: "Before software can be reusable it first has to be usable.", author: "Ralph Johnson" },
];

function pickQuote(seed?: number): { text: string; author: string } {
	const index = seed !== undefined
		? seed % QUOTES.length
		: Math.floor(Math.random() * QUOTES.length);
	return QUOTES[index]!;
}

function buildWidget(quote: { text: string; author: string }) {
	return {
		blocks: [
			{
				type: "section",
				text: `"${quote.text}"`,
			},
			{
				type: "context",
				text: `— ${quote.author}`,
			},
			{
				type: "actions",
				elements: [
					{
						type: "button",
						text: "Next Quote",
						action_id: "next_quote",
					},
				],
			},
		],
	};
}

export default definePlugin({
	routes: {
		admin: {
			handler: async (routeCtx: { input: unknown }, _ctx: PluginContext) => {
				const interaction = routeCtx.input as {
					type: string;
					action_id?: string;
				};

				if (
					interaction.type === "page_load" ||
					(interaction.type === "block_action" && interaction.action_id === "next_quote")
				) {
					return buildWidget(pickQuote());
				}

				return { blocks: [] };
			},
		},
	},
});
