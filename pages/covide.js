import React,{useEffect} from 'react';
import Layouts from '../components/Layouts';


export default function CovidPage() {

    useEffect(() => {
        console.log("CovidPage")
    }, [])

    return (
        <Layouts>
            <p>this is Covid-19 Page</p>
        </Layouts>
    )
}
