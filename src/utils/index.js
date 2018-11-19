import axios from 'axios';
const $http = "https://fanyi.baidu.com"


export function getAxios(obj,cb){
	axios.get($http).then((res)=>{
		console.log(res);
		cb(res);
	});	
}
