import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountry, setVisitedCountry] = useState([]);
   
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then( res => res.json() )
            .then(data => setCountries(data) )
    }, []);

    const handleVisitedCountry = country => {
        const newVisitedCountry = [...visitedCountry, country]
        setVisitedCountry(newVisitedCountry)
    }

    return (
        <>
            <div className="lg:sticky lg:top-0 z-50 bg-white pb-3">
                <h1 className="text-3xl text-center py-5"> Visited Countries : {visitedCountry.length}</h1>
                <ul className="flex gap-5 justify-center flex-wrap">                    
                    {
                        visitedCountry.map(country => {
                            return(
                                <a key={country.cca3} href={`#${country.cca3}`} className="border-2 border-sky-100 py-1 px-4 rounded-md shadow-md flex justify-evenly items-center gap-2">
                                    <img className="w-10 rounded-md" src={country.flags.png}/>
                                    <span>{country?.name?.common}</span>
                                    {console.log(country)}
                                </a>
                            )
                        })
                    }
                </ul>
            </div>
            <h1 className="text-3xl text-center py-5"> All Countries : {countries.length}</h1>
            <div className="p-5 grid md:grid-cols-3 lg:grid-cols-4 gap-7">
                {
                    countries.map(country => <Country key={country.cca3} country={country} handleVisitedCountry={handleVisitedCountry}></Country>)
                }
            </div>
        </>
    );
};

export default Countries;

