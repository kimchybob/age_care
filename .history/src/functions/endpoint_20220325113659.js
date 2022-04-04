class Endpoint{
    searchDate(date){
        axios({
            method: 'get',
            url: 'https://sa3ykxqpng.execute-api.us-east-2.amazonaws.com/getActivity?dateCond=' + date,
            responseType: 'stream'
          })
            .then(function (response) {
                console.log(response);
            });
    }
}