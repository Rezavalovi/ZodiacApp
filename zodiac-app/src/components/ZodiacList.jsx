import React from 'react';

const zodiacs = [
    { startDate: "21 Maret", endDate: "19 April", zodiacDate: "Aries" },
    { startDate: "20 April", endDate: "20 Mei", zodiacDate: "Taurus" },
    { startDate: "21 Mei", endDate: "20 Juni", zodiacDate: "Gemini" },
    { startDate: "21 Juni", endDate: "22 Juli", zodiacDate: "Cancer" },
    { startDate: "23 Juli", endDate: "22 Agustus", zodiacDate: "Leo" },
    { startDate: "23 Agustus", endDate: "22 September", zodiacDate: "Virgo" },
    { startDate: "23 September", endDate: "22 Oktober", zodiacDate: "Libra" },
    { startDate: "23 Oktober", endDate: "21 November", zodiacDate: "Scorpio" },
    { startDate: "22 November", endDate: "21 Desember", zodiacDate: "Sagittarius" },
    { startDate: "22 Desember", endDate: "19 Januari", zodiacDate: "Capricorn" },
    { startDate: "20 Januari", endDate: "18 Februari", zodiacDate: "Aquarius" },
    { startDate: "19 Februari", endDate: "20 Maret", zodiacDate: "Pisces" }
];

const ZodiacList = () => (
    <div className="my-8">
        <h2 className="text-2xl font-bold mb-4">Daftar Zodiak</h2>
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden justify-center">
            <thead className="bg-gray-200">
                <tr>
                    <th className="py-2 px-4">Start Date</th>
                    <th className="py-2 px-4">End Date</th>
                    <th className="py-2 px-4">Zodiac Date</th>
                </tr>
            </thead>
            <tbody>
                {zodiacs.map((zodiac, index) => (
                    <tr key={index} className="border-b">
                        <td className="py-2 px-4">{zodiac.startDate}</td>
                        <td className="py-2 px-4">{zodiac.endDate}</td>
                        <td className="py-2 px-4">{zodiac.zodiacDate}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default ZodiacList;
    