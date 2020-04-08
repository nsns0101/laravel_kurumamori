$(document).ready(function() {
    $.getJSON`https://maps.googleapis.com/maps/api/geocode/json?latlng=35.8963091,128.6198571&key=AIzaSyBmDNMJ1gbJusi6rqVoskubnytiXP0Rchc`,
        function(data) {
            console.log(data);
        };
});

// var axios = require("axios");
// var getAddressApi = async () => {
//     try {
//         return await axios.get(
//             `https://maps.googleapis.com/maps/api/geocode/json?latlng=35.8963091,128.6198571&key=AIzaSyBmDNMJ1gbJusi6rqVoskubnytiXP0Rchc`
//         );
//     } catch (error) {
//         return error;
//     }
// };
// console.log(getAddressApi());
