import request from '../../shared/lib/request'

function get(number) {
  return request({
    url:    `/numberToEnglishWords/${number}`,
    method: 'GET',
  });
}

const NumberToEnglishWords = {
    get
};

export default NumberToEnglishWords;
