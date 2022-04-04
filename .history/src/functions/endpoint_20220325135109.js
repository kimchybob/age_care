class Endpoint{

    getData(date){
        var url = 'https://sa3ykxqpng.execute-api.us-east-2.amazonaws.com/getActivity?dateCond=' + date;
        // console.log('http://admin:admin@172.26.131.149:5984/aurin-geo/' + position);
        // var url = 'http://admin:admin@172.26.131.149:5984/aurin-geo/mel';
        axios.get(url)
        .then(
            response => {
                console.log(response);
            }
        );
    }
}

function searchDate(date){
    axios({
        method: 'get',
        url: 'https://sa3ykxqpng.execute-api.us-east-2.amazonaws.com/getActivity?dateCond=' + date,
        responseType: 'stream'
      })
        .then(function (response) {
            console.log(response);
        });
}