import { useState, useEffect } from "react";

export const useDebounce = (value, delay = 5000) => {
	const [debouncedValue, setDebounsedValue] = useState(value);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setDebounsedValue(value);
		}, delay);
		return () => clearTimeout(timeout);
	}, [value]);

	return debouncedValue;
};
