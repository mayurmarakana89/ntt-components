// import * as Button from './components/Button';
// import * as List from './components/List';

// export default {
//     Button,
//     List
// };



import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import * as Components from 'ntt-components';
import VerticalTabs from './components/VerticalTabs';

import Step1 from './pages/Step1';
import Step2 from './pages/Step2';
import Step3 from './pages/Step3';

const App = () => {
    const [page, setPage] = useState(0);
    const tabs = [
        {
            page: 0,
            key: 'step1',
            label: 'DHTI Management',
            content: <Step1 page={page} setPage={setPage} />
        },
        {
            page: 1,
            key: 'step2',
            label: 'Scanning',
            content: <Step2 page={page} setPage={setPage} />
        },
        {
            page: 2,
            key: 'step3',
            label: 'Historical Scans',
            content: <Step3 />
        }
    ];

    return (
        <div>
            <h1>Vaccination Verification</h1>
            <VerticalTabs tabs={tabs} page={page} setPage={setPage} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"))