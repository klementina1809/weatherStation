import { useState, useEffect } from "react";

export const useDebounce = (value, delay = 500) => {
	const [debouncedValue, setDebounsedValue] = useState(value);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);
		return () => clearTimeout(timeout);
	}, [value]);
};
