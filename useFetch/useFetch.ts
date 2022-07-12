import { useEffect, useState } from 'react';

export const useFetch = <T>(url: string): { data: T | null, isLoading: boolean, hasError: boolean } => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false
    })

    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true,
            hasError: false
        });

        try {
            const response = await fetch(url);
            const data =  await response.json();

            console.log(data);

            setState({
                data,
                isLoading: false,
                hasError: false
            });
        } catch (error) {
            setState({
                data: null,
                isLoading: false,
                hasError: true
            });
        }
        
    }

    useEffect(() => {
        getFetch();
    }, [url])
    
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };
}