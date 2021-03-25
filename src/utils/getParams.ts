interface paramsType {
	[pair: string]: string,
	code: string
}

const getParams = (url: string): paramsType => {
	const params: paramsType = { code: ''}
	const parser: HTMLAnchorElement = document.createElement('a');
	parser.href = url;
	let query: string = parser.search.substring(1);
	let vars: Array<string> = query.split('&');
	for (let i = 0; i < vars.length; i++) {
		let pair: Array<string> = vars[i].split('=');
		params[pair[0]] = decodeURIComponent(pair[1]);
	}
	return params;
};

export default getParams;