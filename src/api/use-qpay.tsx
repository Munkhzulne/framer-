import axios from 'axios';

const qpay = axios.create({
    baseURL: 'https://api.qpay.mn/v1',
});

const config = {
    headers: {
        'Content-Type': 'application/json',
        Authorization:
            '',
    },
};

const res = {
    qrImage: 'https://qpay.mn/q/?q=7729010213265371506212313318160980'
}

export const useQPay = () => {

    const createPayment = (data) => {
        const { amount, bill_no } = data;
        const date = Date.now().toString;
        const body = {
            template_id: 'TEST_INVOICE',
            merchant_id: 'TEST_MERCHANT',
            branch_id: '1',
            pos_id: '1',
            receiver: {
                id: 'CUST_001',
                register_no: 'ddf',
                name: 'Central brnach',
                email: 'info@info.mn',
                phone_number: '99888899',
                note: 'davaa',
            },
            bill_no: '165465112kjh;0jlklj;kl3212121',
            date: "",
            description: 'dafdafasd',
            amount: 1000,
            btuk_code: '',
            vat_flag: '0',
        };

        return qpay
            .post('/bill/create', body, config)
            .then((response) => res)
            .catch((error) => res);
    };

    const checkPayment = (data) => {
        const { bill_no } = data;
        const date = Date.now().toString;
        const body = {
            merchant_id: 'TEST_MERCHANT',
            bill_no: bill_no || '165465112kjh;0jlklj;kl3212121',
        };

        return qpay
            .post('/bill/check', body, config)
            .then((response) => response.data)
            .catch((error) => error.response.data);
    };
    return { createPayment, checkPayment }
};
