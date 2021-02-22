$(function () {

    var $username = $("#uesrname_input");

    $username.change(function () {

        var username = $username.val().trim();

        if (username.length) {
            // 将用户名发送给服务器进行预校验
            $.getJSON('/axf/checkuser/', {'username': username}, function (data) {

                console.log(data);

                var $username_info = $("#username_info");

                if (data['status'] === "200") {
                    $username_info.html("用户名可用").css("color", "green");
                } else if (data['status'] === "901") {
                    $username_info.html("用户已存在").css("color", "red");
                }
            })
        }
    })
})

$(function () {

    var $email = $("#email_input");

    $email.change(function () {

        var email = $email.val().trim();

        if (email.length) {
            // 将用户名发送给服务器进行预校验
            $.getJSON('/axf/checkuser/', {'email': email}, function (data) {

                console.log(data);

                var $email_info = $("#email_info");

                if (data['status'] === "200") {
                    $email_info.html("邮箱可用").css("color", "green");
                } else if (data['status'] === "902") {
                    $email_info.html("邮箱已存在").css("color", "red");
                }
            })
        }
    })
})

function check() {
    var $username = $("#uesrname_input");

    var username = $username.val().trim();

    if (!username) {
        return false
    }

    var info_color = $("#username_info").css("color");

    console.log(info_color);

    if (info_color == "rgb(255, 0, 0)") {
        return false
    }

    var $password = $("#password_input");

    var password = $password.val();

    var $password_confirm_input = $("#password_confirm_input");

    var password_confirm_input = $password_confirm_input.val();

    if (password !== password_confirm_input) {
        return false
    }

    var $password_input = $("#password_input");

    var password = $password_input.val().trim();

    $password_input.val(md5(password));

    return true
}