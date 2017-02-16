import axios from 'axios'

axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response)
  })
  .catch(function (error) {
    console.log(error);
  })

axios({
    method: 'post',
    url: '/user/12345',
    data: {
        firstName: 'Fred',
        lastName: 'Flintstone'
    }
})

