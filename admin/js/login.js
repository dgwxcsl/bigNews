//1.入口函数
$(function () {
    //2.给登录按钮注册事件
    $('.input_sub').on('click', function (e) {
        e.preventDefault()//阻止默认行为
        //3.获取登录的数据
        var username = $('.input_txt').val()//获取用户名或手机号的值
        var password = $('.input_pass').val()
        //4.判断用户名和密码是否为空
        if ($.trim(username) === '' || $.trim(password) === '') {
            alert('输入的用户名或密码不能为空')
            return//阻止代码的向下执行
        }
        //5.若数据无问题，则发送请求;反之不能发送
        $.ajax({
            type:'post',
            url:'http://localhost:8080/api/v1/admin/user/login',
            data:{username:username,password:password},
            success:function(res){
                if (res.code==200) {
                    alert('登陆成功···')
                    window.location.href='./index.html'
                }else{
                    alert(res.msg)
                }
            }
        })
        //6.请求发送成功后，提爱哦转到主页面  
    })

})