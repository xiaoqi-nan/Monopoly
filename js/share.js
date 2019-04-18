$(function () {
    if ($.isWeiXin()) {
        $.wxConfig({
            debug: false,
            shared: true,
            title: '给你一个“游览”澳大利亚的好机会',
            desc: '还等什么，快来一起探索吧',
            link: 'http://cx-event.com/July/share.html',
            imgUrl: 'http://cx-event.com/July/images/share.jpg',
            jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo"],
            name: '755d8e604b4788c7',
            code: 'a707d7bfbbe90dbe4d63109f5c8ff1c0',
        }, success_Function);
    }
    $(window).on('scroll.elasticity', function (e) {
        e.preventDefault();
    }).on('touchmove.elasticity', function (e) {
        e.preventDefault();
    });
})
function success_Function() {
}