export function Details({details, setDetails}){
    const isClick = false;
    return (
        <>
            <h1>{details.title}</h1>
            <h4>{details.discriptions}</h4>
            <button onClick={() => setDetails(prev => {return {
                ...prev,
                title: prev.title + '...',
            }})}> {details.button}
            </button>
        </>
    )
}