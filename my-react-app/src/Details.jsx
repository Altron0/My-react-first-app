import { memo, useMemo } from "react";

function InitialDetails({details, handleLoading}){
    const isClick = false;

    return (
        <>
            <h1>{details.title}</h1>
            <h4>{details.discriptions}</h4>
            <button onClick={handleLoading}>
                {details.button}
            </button>
        </>
    )

}

export const Details = memo(InitialDetails)