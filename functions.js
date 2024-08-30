// criar uma função para parametrizar os responses
function response(sts,msg,aftrows,data=null)
{
    return{
        status:sts,
        message:msg,
        afected_rows:aftrows
        data: data,
        timestamp:new Date().getTime
    }
}
mudule.exports = {
    response
}