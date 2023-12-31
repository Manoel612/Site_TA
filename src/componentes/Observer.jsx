import { useEffect, useRef, useState, useContext } from "react";
import ScrollContext from "../contexto/scrollContext";

const Observer = () => {
    const observedRef = useRef(null);
    const [numPosts, setNumPosts ] = useContext(ScrollContext);
    const [pode, setPode ] = useState(false);
    
    useEffect(() => {
        const iObserv = new IntersectionObserver(([entry]) => {
            const ratio = entry.intersectionRatio;

            setPode(state=>{
                if(ratio > 0 && state)  {
                    setNumPosts((values) =>  { return values + 1});
                }
                return true;
            })

        });

        if (observedRef.current){
            iObserv.observe(observedRef.current);
        }

        return () => iObserv.disconnect();
    },[]);


    return(
    <>
        <div ref={observedRef} id="sentinela" style={{ display:"block", height:"200px"}}></div>
    </>
    );
}

export default Observer;