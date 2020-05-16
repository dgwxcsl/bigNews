//1.入口函数
$(function () {
    //2.给登录按钮注册事件
    $('.login_form').on('submit', function (e) {
        e.preventDefault() //阻止默认行为
        //5.若数据无问题，则发送请求;反之不能发送
        $.ajax({
            type: 'post',
            // url: 'http://localhost:8080/api/v1/admin/user/login',
            url: BigNew.user_login,
            //3.获取登录的数据
            data: $(this).serialize(), //将所有有name属性的input和select标签拼接成字符串
            //4.判断用户名和密码是否为空
            beforeSend: function () {
                var flag = false;

                $('.login_form input[name]').each(function (index, ele) { //所有有name属性的form中的input标签用jquery中each方法循环
                    if ($.trim($(ele).val()) == '') {
                        flag = true
                    }
                })
                if (flag == true) {
                    // alert('用户名或密码不能为空')
                    $('.modal-body').text('用户名或密码不能为空').parent().parent().parent().modal()
                    return false
                }
            },
            //6.请求发送成功后，跳转到主页面  
            success: function (res) {
                
                $('.modal-body').text(res.msg).parent().parent().parent().modal()
                if (res.code == 200) {
                    //此事件在模态框被隐藏（并且同时在 CSS 过渡效果完成）之后被触发。(模态框被隐藏即点击确定按钮后跳转)

                    $('.modal').on('hidden.bs.modal', function () {
                        window.localStorage.setItem('token', res.token)
                        window.location.href = './index.html'
                    })
                }
                // alert(res.msg)


            }
        })

    })

})