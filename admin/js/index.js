$(function () {
    //1.立即向服务器发送请求
    $.ajax({
        type: 'get',
        // url: 'http://localhost:8080/api/v1/admin/user/info',
        url:  BigNew.user_info,
        headers:{'Authorization':window.localStorage.getItem('token')},
        success: function (res) {
            // console.log(res);
            //2.将请求回来的数据渲染到界面上 
            if (res.code===200) {
                $('.user_info span').html(`欢迎&nbsp;&nbsp;${res.data.nickname}`)
                $('.user_info img').attr('src',res.data.userPic)
                $('.user_center_link img').attr('src',res.data.userPic)

            }
        }
    })
    // var xhr = new XMLHttpRequest()
    // xhr.open('get', 'http://localhost:8080/api/v1/admin/user/info')
    // xhr.setRequestHeader('Authorization', 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiYWRtaW4iLCJleHAiOjIxOTQ0MTI0NzksImlhdCI6MTU4OTYxMjQ3OX0.seydIl-pmZ7lqR0iDrvYDUeItd8KC1Bi3DfZR-IDr92CcPEYJmhSBFB3muVfsqqKPd6UpAEDQWK4EVlIhgGYeptAbMAijlL-y1sOZblvhkWTLRQdqWwGqn7iRaLRWwBhzhbbeKq4sssLjh195e2dvjd-8nuM8asTCSHx0qwCwkY')
    // xhr.send(null)
    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState == 4 && xhr.status == 200) {
    //         console.log(xhr.responseText);
    //     }
    // }

    //3.退出功能
    //3.1给退出按钮添加事件
    $('.logout').on('click',function(){
    //3.2删除token
    localStorage.removeItem('token')
    //3.3回到login.html
    location.href='./login.html'
    })

   
})