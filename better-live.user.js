function replaceGoogleLogo() {
    // 创建正则表达式
    var pattern = new RegExp("^(https?:\/\/)?(www\.)?google\.[a-z]+\/search\?");

    var currentUrl = window.location.href;
    // 测试字符串
    console.log(currentUrl);
    if (pattern.test(currentUrl)) {
        console.log("URL 匹配成功");
    } else {
        console.log("URL 匹配失败");
    }




    // 检测是主页面还是搜索结果界面
    var main_page_classname = "lnXdpd";
    var search_page_classname = "jfN4p";

    var baidu_logo = "https://www.baidu.com/img/pcdoodle_2a77789e1a67227122be09c5be16fe46.png";


    var pattern = /^(https?:\/\/)?(www\.)?google\.[a-z]+\/search\?/;
    console.log(currentUrl);
    if (pattern.test(currentUrl)) {
        // 搜索页
        console.log("search page");
        var logoImg = document.getElementsByClassName(search_page_classname).item(0);
        var newLogoImg = document.createElement('img');
        newLogoImg.src = baidu_logo;
        newLogoImg.width = 92;
        newLogoImg.height = 30;
        logoImg.parentNode.removeChild(logoImg.parentNode.firstChild);
        logoImg.parentNode.replaceChild(newLogoImg, logoImg);
    } else {



        // 主页
        var logoImg = document.getElementsByClassName(main_page_classname).item(0);
        var newLogoImg = document.createElement('img');
        newLogoImg.src = baidu_logo;
        newLogoImg.width = 272;
        logoImg.parentNode.removeChild(logoImg.parentNode.firstChild);
        logoImg.parentNode.replaceChild(newLogoImg, logoImg);

        // 修改下方的小字
        var searchGoogle = document.getElementsByClassName("gNO89b");
        searchGoogle[0].value = "百度一下";
        console.log(searchGoogle[0].parentNode);
        searchGoogle[0].dispatchEvent(new CustomEvent('change'));
        //
        var element = document.querySelector("gNO89b");
        element.parentNode.removeChild(element);

        element = document.querySelector("SIvCob");
        element.parentNode.removeChild(element);

        // var googleSupport = document.getElementsByClassName("SIvCob");
        // googleSupport[0].innerHTML = "百度提供";
        // console.log(googleSupport[0]);
        // 

        // 修改底部的小字
        var aboutGoogle = document.getElementsByClassName("pHiOh");
        console.log(aboutGoogle);
        aboutGoogle[0].innerHTML = "关于百度";
        aboutGoogle[3].innerHTML = "百度搜索的运作方式";
    }

};
function replaceYoutubeLogo() {

}
function helloWorld() {
    console.log("hello world");
}

export { replaceGoogleLogo, replaceYoutubeLogo, helloWorld };