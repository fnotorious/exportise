const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/api/data', async (req, res) => {
    const cmdCodes = [
        '27','39','40','28','29','30','31','32','33','34','35','36','37','38','86','87','88','89',
        '72','73','74','75','76','78','79','80','81','82','83','84','85','68','69','70','71','16',
        '17','18','19','20','21','22','23','24','01','02','03','04','05','44','45','46','47','48',
        '49','90','91','92','93','94','95','96','97','98','99','25','26','06','07','08','09','10',
        '11','12','13','14','15','50','51','52','53','54','55','56','57','58','59','60','61','62',
        '63','41','42','43'
    ]

    try {
        const params = {
            reporterCode: req.query.country,
            period: req.query.year,
            flowCode: req.query.flow,
            breakdownMode: 'classic',
            includeDesc: false,
        }

        const headers = {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': process.env.SUB_KEY
        }

        if (req.query.cMode === 'true') {
            delete params.partnerCode;
            params.cmdCode = 'total'
        }

        else {
            params.partnerCode = '0';
            params.cmdCode = cmdCodes.join(',')
        }

        const response = await axios.get('https://comtradeapi.un.org/data/v1/get/C/A/HS', { params, headers });

        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
