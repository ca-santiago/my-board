import React from "react";

export interface useFetchProps<T extends {}> {
    url: string;
    params: T;
}

export interface useFetchReturn<T> {
    loading: boolean;
    error: boolean;
    data: T | null;
    refetch: () => void;
}

/**
 * @param T call params
 * @param T result options
 */
export function useFetch<T extends {}, D>(
    url: string,
    params?: D
): useFetchReturn<T> {
    const [data, setData] = React.useState<T | null>(null);
    const [serviceURL] = React.useState(url);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);

    const fetchData = React.useCallback(() => {
        setError(false);
        setLoading(true);
        fetch(serviceURL, {
            method: 'GET',
        })
            .then((data) => data.json())
            .then((res) => {
                setData(res);
            }).catch(e => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [serviceURL]);

    React.useEffect(() => {
        fetchData();
    }, [url]);

    return { data, loading, error, refetch: fetchData };
}