import React from 'react';
import Search from '../../customers/searchFilter/search';
import initialDetails from '../../../dta/initiialDetails';

function History() {
    return (
        <>
            <div className="tc bg-green ma0 pa4 min-vh-100">
                <Search details={initialDetails} />
            </div>
        </>

    );
}

export default History;