import moment from 'moment';

export const formatDate = date => moment(date).format('YYYY-MM-DD');

export const formatShowDate = date => moment(date).format('DD-MM-YYYY, h:mm:ss a');