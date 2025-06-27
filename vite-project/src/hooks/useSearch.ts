import { useState } from 'react';

export default function useSearch() {
  const [searchParamsState, setSearchParamsState] = useState(
    () => new URLSearchParams(window.location.search)
  );

  const setSearchParams = (params: Record<string, string | null>) => {
    const searchParams = new URLSearchParams(window.location.search);

    for (const [key, value] of Object.entries(params)) {
      if (!value) {
        searchParams.delete(key);
      } else {
        searchParams.set(key, value);
      }
    }

    const newUrl = [window.location.pathname, searchParams.toString()]
      .filter(Boolean)
      .join('?');

    window.history.pushState({}, '', newUrl);

    setSearchParamsState(searchParams);
  };

  return [searchParamsState, setSearchParams];
}
