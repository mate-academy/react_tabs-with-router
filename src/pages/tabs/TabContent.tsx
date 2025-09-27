import { useParams } from "react-router-dom"

export const TabContent: React.FC<{}> = () => {

    let tabId = useParams();
    console.log(tabId);

    return(
        <>
        <div className="block" data-cy="TabContent">
            {tabId}
        </div>
        </>
    )
}