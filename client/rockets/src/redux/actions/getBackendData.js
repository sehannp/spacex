import { useState,useEffect }  from 'react';

const useFetch = (url, shouldFetch, setShouldFetch, setMessage) => {
    const [state, setState] = useState({});
    useEffect(() => {
        if (shouldFetch) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                   setState(data);
                   setMessage(data);
                   setShouldFetch(false) // avoid infinite calls
                }) 
        }
    });
    return [state];
}

export default useFetch;
