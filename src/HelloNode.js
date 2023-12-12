var _ = require('lodash')
import http from 'k6/http';


export default function () {
    const arr = [1, 2, 3, 4]
    console.log(_.dropRight(arr))

    http.get('http://test.k6.io');
}
