import React from 'react';
import { calculateZodiac, calculateAge } from '../utils';

const Result = ({ birthdate, name }) => {
    if (!birthdate || !name) return <div className="mt-8">Please submit your birth date first</div>;

    const zodiac = calculateZodiac(birthdate);
    const age = calculateAge(birthdate);

    return (
        <div className="mt-8 p-5 border-0 border-gray-300 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Hasil</h2>
            <p className="text-lg">Nama: {name}</p>
            <p className="text-lg">Zodiak: {zodiac}</p>
            <p className="text-lg">Umur: {age} tahun</p>
        </div>
    );
};

export default Result;
