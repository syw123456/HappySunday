/**
 * Created by syw on 2017/6/19.
 */
export default (type='GET' ,url='' ,data ={}, async=true)=>{
  //定义一个Promise
   return new Promise((resolve,reject)=>{
     type= type.toUpperCase();
     let requestObj;
     //兼容处理
     if(window.XMLHttpRequest){
       requestObj = new XMLHttpRequest();
     }else{
       requestObj = new ActiveObject;
     }
     if(type == "GET"){
       //数据拼接字符窜
       let datastr ='';
       Object.keys(data).forEach( key=>{
         dataStr += key + '=' + data[key] +"&";
       })
       dataStr = dataStr.substr(0,dataStr.lastIndexOf("&"));
       url = url +"?" +dataStr;
       requestObj.open(type,url,async);
       requestObj.setRequestHeader("Content-type","application/x-www-form-urlencoded");
       requestObj.send();
    }else if(type == "POST"){
      requestObj.open(type,url,async);
      requestObj.setRequestHeader('Content-type',"application/x-www-form-urlencoded");
      requestObj.send(JOSN.stingify(data))
    }else{
      reject('error type');
    }
    requestObj.onreadystateChange = () =>{
      if(requestObj.readyState == 4){
         if(request.status == 200){
            let obj = requestObj.response;
            if(typeof obj !== 'object'){
               obj= JSON.parse(obj);
            }
            resolve(obj);
         }else{
            reject(requsetObj);
         }
      }
    }
})
}
















