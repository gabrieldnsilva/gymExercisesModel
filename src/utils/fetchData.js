export const exerciseOptions = {
	method: "GET",
	headers: {
		"x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
		"x-rapidapi-host": "exercisedb.p.rapidapi.com",
	},
};

export const fetchData = async (baseUrl, options, limit = 10, offset = 0) => {
	const url = new URL(baseUrl);
	url.searchParams.append("limit", limit);
	url.searchParams.append("offset", offset);

	const response = await fetch(url, options);
	const data = await response.json();

	return data;
};
