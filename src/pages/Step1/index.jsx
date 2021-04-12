import React from 'react';
import Typography from '@material-ui/core/Typography';
import ActionButton from '../../components/ActionButton';
import BusinessCard from '../../components/BusinessCard';

const Step1 = ({ page, setPage }) => {
    return <>
        <Typography m={3}>{"Use this management page to update your information, view historical scans or to start scanning verified credentials."}</Typography>
        <BusinessCard />
        <div>
            <ActionButton align={"left"} color={"primary"} buttonText={"Start Scanning"} onClick={() => setPage(1)} />
            <ActionButton align={"right"} color={"primary"} buttonText={"View Historical Scans"} onClick={() => setPage(2)} />
        </div>
    </>;
};

export default Step1;