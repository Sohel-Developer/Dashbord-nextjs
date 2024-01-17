import React from 'react';
import MatchesRowData from './MatchesRowData';

const LatestMatches = () => {
    return (
        <div className=''>
            <div className='flex pb-5 justify-between text-white '>
                <h2>Latest Matches</h2>
                <div className='flex justify-between '>
                    <span>Filter:</span>
                    <select className='bg-black'>
                        <option value="Football">Football</option>
                        <option value="Cricket">Cricket</option>
                    </select>

                    <select className='bg-black'>
                        <option value="Football">Anyhare</option>
                        <option value="Cricket">Cricket</option>
                    </select>

                </div>
                <button>ViewAll</button>
            </div>


            <div className='space-y-5 '>
                <MatchesRowData />
                <MatchesRowData />
                <MatchesRowData />
                <MatchesRowData />
                <MatchesRowData />
            </div>

        </div>
    );
};

export default LatestMatches;