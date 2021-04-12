import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import ActionButton from '../../components/ActionButton';
import CheckboxList from '../../components/CheckboxList';
import qrcode from '../../assets/qr_code.png';

import QrReader from 'react-qr-reader'

const useStyles = makeStyles({
    formLabel: {
        fontWeight: 'bold',
        color: '#036'
    },
    formHelperText: {
        color: '#036'
    },
    qrImage: {
        width: 200,
        height: 200,
        padding: '24px 0'
    }
});

const Step2 = ({ page, setPage }) => {
    const classes = useStyles();
    const [saved, setSaved] = useState(false);
    const [displayScanner, setScanner] = useState(false);
    const [qrResult, setQRResult] = useState('no result');

    const openQRScanner = () => {
        setScanner(true);
    };

    const closeQRScanner = () => {
        setScanner(false);
    };

    const handleScan = data => {
        if (data) {
          setQRResult(data);
          // TODO: data to be matched with the list of information selected for verification
        }
    };

    const handleError = err => {
        console.error(err);
    };

    return <>
        {saved ?
            <div>
                <FormLabel component="label" className={classes.formLabel}>Scan Verifiable Credential</FormLabel>
                <FormHelperText className={classes.formHelperText}>Scan the users phone to access their verifiable credentials.</FormHelperText>
                <img className={classes.qrImage} width={200} height={200} src={qrcode} />
                <ActionButton
                    align={"left"}
                    color={"primary"}
                    buttonText={"Scan Verifiable Credentials"}
                    onClick={() => {
                        openQRScanner();
                    }}
                />
            </div> :
            <div>
                <CheckboxList />
                <ActionButton align={"left"} buttonText={"Back"} onClick={() => setPage(0)} />
                <ActionButton
                    align={"right"}
                    color={"primary"}
                    buttonText={"Save and continue"}
                    onClick={() => {
                        setSaved(true);
                    }}
                />
            </div>
        }

        {displayScanner && 
            <div>
                <br />
                <br />
                <QrReader
                    delay={300}
                    onError={handleError}
                    onScan={handleScan}
                    style={{ width: '100%' }}
                />
                <br />
                <ActionButton
                    align={"right"}
                    color={"primary"}
                    buttonText={"Close"}
                    onClick={() => {
                        closeQRScanner();
                    }}
                />
                <br />
                <p><strong>QR Code Result</strong></p>
                <p>{qrResult}</p>
            </div>
        }
    </>
};

export default Step2;