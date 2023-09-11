import { useState } from "react";

const Country = ({ country, handleVisitedCountry }) => {
    // console.log(country);
    const { name, flags, cca2, cca3 } = country;

    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited)
    }
    
    return (
        <div id={cca3} className={`card bg-base-100 shadow-xl border-2 border-sky-100 py-10 px-2 ${visited ? 'bg-sky-100' : ''}`}>
            <figure><img className="h-32 max-w-full" src={flags.png} /></figure>
            <div className="card-body">
                <h2 className="card-title pb-3 justify-center">Name : {name?.common}</h2>
                <p className="text-center pb-3">Code : {cca2}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary" onClick={() => { handleVisited(); handleVisitedCountry(country) }}>{visited ? 'Visited' : 'Going'}</button>
                </div>
            </div>
        </div>
    );
};

export default Country;

