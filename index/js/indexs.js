/**
 * @author YuTao
 * @description 用开方类型 城市id 服务类型id 结算方式四个参数请求数据
 * @param {number} type 开方类型
 * @param {number} city 城市id
 * @param {number} service 服务类型id
 * @param {number} online 结算方式
 */
function getData(type, city, service, online) {
    $.ajax({
        type: "get",
        url: "http://192.168.5.209/doctor_ajax.php?do=recipecity",
        data: {
            "type": type,
            "city": city,
            "service": service,
            "online": online
        },
        dataType: "json",
        success: function(data) {
            console.log(data)
        },
        error: function(err) {
            console.log(err)
        }
    });
}