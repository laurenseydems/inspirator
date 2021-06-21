const button = document.getElementById('btn');
const colorName = document.getElementById('color-name');
const inspirationalQuote = document.getElementById('quote');

let valueforChangecolor = 'Value';
const changeColor = function() {
	const rgb1 = Math.floor(Math.random() * 255 + 1);
	const rgb2 = Math.floor(Math.random() * 255 + 1);
	const rgb3 = Math.floor(Math.random() * 255 + 1);
	valueforChangecolor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
	return;
};

button.addEventListener('click', function() {
	changeColor();
	document.body.style.background = valueforChangecolor;
	colorName.textContent = valueforChangecolor;
	inspirationalQuote.style.color = valueforChangecolor;
	quote.innerHTML = showQuote();
});

const showQuote = function() {
	const number1 = Math.floor(Math.random() * inspirationalQuotesArr.length);
	return inspirationalQuotesArr[number1];
};

const inspirationalQuotesArr = [
	'There will be a day when I no longer can do this. THAT DAY IS NOT TODAY.',
	'Your friends should motivate and inspire you. Your circle should be well rounded and supportive. Keep it tight. Quality over quantity, always.',
	'Don’t make change too complicated. Just begin.',
	'YOU are the creator of your own destiny.',
	'If you don’t go after what you want, you’ll never have it. If you don’t ask, the answer is always no. If you don’t step forward, you’re always in the same place. ~Nora Roberts',
	'This is the start of something beautiful.',
	'The most important kind of freedom is to be what you really are. You trade in your reality for a role. You trade in your sense for an act. You give up your ability to feel, and in exchange, put on a mask. There can’t be any large-scale revolution until there’s a personal revolution, on an individual level. It’s got to happen inside first. ~Jim Morrison',
	'Don’t let small minds convince you that your dreams are too big.',
	'The temptation to quit will be greatest just before you are about to succeed.',
	'Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway. ~Earl Nightingale',
	'Ask yourself if what you’re doing today is getting you closer to where you want to be tomorrow.',
	'The greatest pleasure in life is doing what people say you cannot do.',
	'I Choose… to be motivated, not manipulated to live by choice, not by chanceto make changes, not excuses to be useful, not used',
	'I don’t stop when I’m tired. I stop when I’m done.',
	'I am a fighter, not a quitter.',
	'You have the patience, the strength and the passion to achieve your ambitions, your goals and your dreams. All you need to do now is TRY.',
	'Sometimes it’s not how good you are, but how bad you want it. ~fitneco.com',
	'For a seed to achieve its greatest expression, it must come completely undone. The shell cracks, its insides come out and everything changes. To someone who doesn’t understand growth, it would look like complete destruction. Cynthia Occelli',
	'Life is Wonderful. Enjoy it.',
	'No IFS, ANDS, or BUTS ~ just DO it.',
	'Sometimes we’re tested. Not to show our weaknesses, but to discover our strengths'
];
