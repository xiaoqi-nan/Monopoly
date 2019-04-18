var Total = 0, Numb = 0, DiceTotal = 0, State = 0;
var NoWalk = [];
var Schedule = 0;  //进度
var NoArrival = -1;  //未到景点
var ListIndex = 0;
var Next = 0; //到下一城市是否摇过筛子
var Frequency = 0;
var Card = 3, CardState = 1;  //Card 澳秘卡的次数  CardState 澳秘卡的状态
var Subscript = -1; //下标
var SubArray = [], SubArray2 = [];
var Accelerate = 1;  //加速
var isIndex = false;
var List = [
    [2, 1, 1, '戴恩树热带雨林', '欢迎来到戴恩树热带雨林！快来这里体验雨林版的《神奇动物在哪里》， 近距离接触麝袋鼠，鹤鸵等“土著”动物， 或乘船观看水中闭目养神的鳄鱼。', '想要和神奇的雨林动物拍照，返回戴恩树热带雨林，来一张难忘的合影吧。'],
    [5, 1, 1, '大堡礁潜水', '欢迎来到大堡礁！穿戴好您的潜水装备，潜入碧蓝的海洋中， 便可以欣赏缤纷多彩的珊瑚礁， 探寻大海深处的秘密。', '想要再次穿上装备，潜入蔚蓝海底，和各种海洋生物一起游泳。快到大堡礁， 进行潜水体验吧。'],
    [6, 2],
    [8, 1, 2, '黄金海岸冲浪', '欢迎来到黄金海岸！这里是冲浪者的天堂， 让您体验刺激的冲浪和多趣的潜水活动， 或在沙粒细腻的海滩上小憩， 享受灿烂的阳光。', '对刺激的冲浪意犹未尽， 想念柔软细腻的沙滩？回到黄金海岸， 再次和大海尽情玩耍吧。'],
    [11, 1, 2, '故事桥爬桥欣赏城市全景', '欢迎来到布里斯班的故事桥！想要从“一览众山小”的高度，惬意地欣赏布里斯班的美丽风景？那么，这里就是一个不错的选择。', '布里斯班即将举行烟花表演，返回布里斯班故事桥，尽情欣赏美丽的烟花吧。'],
    [13, 2],
    [15, 1, 3, '塔隆加动物园与动物亲密接触', '欢迎来到塔隆加动物园！这里是动物们的水滨之家，憨态可掬的树袋熊和鸭嘴兽，妙趣横生的鹦鹉表演，威武的豹子和老虎， 这里就是小朋友和动物爱好者的天堂。', '塔隆加动物园迎来了一批新的澳洲本土小动物， 更有精彩的动物表演。 返回塔隆加动物园， 去看看吧。'],
    [18, 1, 3, '悉尼歌剧院欣赏音乐', '欢迎来到悉尼歌剧院！徜徉在音乐和艺术的世界中， 欣赏来自世界各地的交响乐或歌剧演出， 如果您是一位音乐爱好者， 当然不能错过。', '欢迎来到悉尼歌剧院！徜徉在音乐和艺术的世界中， 欣赏来自世界各地的交响乐或歌剧演出， 如果您是一位音乐爱好者， 当然不能错过。'],
    [21, 2],
    [23, 1, 3, '游览蓝山文化遗产中心', '欢迎看到蓝山遗产文化中心！走进茂密的原始森林， 欣赏大自然鬼斧神工的悬崖和瀑布， 探索幽深神秘的珍罗兰山洞， 热爱自然的您一定不能错过这里。', '在原始森林中漫步，欣赏世外桃源般的壮丽景色，来到蓝山文化遗产中心， 感受大自然的魅力吧。'],
    [25, 2],
    [26, 1, 4, '墨尔本寻找“最美赛车场地”', '欢迎来到墨尔本！这里有被称为“世界上最美的赛车场地”的阿尔伯特公园。在非比赛时段，您也可以驾车飞驰在环湖赛道上，一边欣赏沿途风景，一边感受速度带来的热血澎湃。', '想要在“世界上最美的F1赛道”合照，在阿尔伯特公园悠闲散步， 快来到墨尔本F1赛道， 留下美好记忆吧。'],
    [29, 1, 4, '墨尔本菲利普岛邂逅可爱的小企鹅', '欢迎来到菲利普岛！想要和可爱的小企鹅们邂逅， 或与考拉等众多神奇的澳大利亚本土动物亲密接触？那您一定不要错过这里的独特体验。', '菲利普岛正在进行关于小企鹅的调查研究， 身为动物爱好者的您， 快返回菲利普岛， 协助进行研究吧。'],
    [33, 2],
    [34, 1, 4, '大洋路欣赏海岸风景，寻找十二门徒岩', '欢迎来到大洋路！这里与南太平洋毗邻， 您可以驾车沿着碧蓝的海岸线兜风，还可以乘坐直升飞机，从空中俯瞰奇特壮丽的十二门徒岩。', '沿着海岸公路， 吹着舒服的海风，欣赏旅途中的美景，快回到大洋路， 感受迷人的海岸风情吧。'],
    [36, 2],
    [37, 1, 5, '阿德莱德逛中央市场', '欢迎来到中央市场！花一天时间在这里逛逛， 丰富的当地特产会让您满载而归， 更有妙趣横生的厨艺表演和音乐演出令您大饱眼福。', '您获得了一张直飞阿德莱德的机票，快来领取，到阿德莱德中央市场品尝当地美食吧。'],
    [40, 1, 5, '在宁静优美的阿德莱德品尝当地红酒', '欢迎来到阿德莱德的芭萝莎！您可以在这里体验酿酒师们悠闲的乡村生活，亲口品尝色泽诱人、香气幽微的芭萝莎葡萄酒，并佐以当地人自制的面包、熏肉等传统美食。', '正是葡萄成熟的季节，回到阿德莱德的芭萝沙，快去品尝香醇的葡萄酒吧。'],
    [41, 2],
    [44, 2],
    [46, 1, 6, '宁加洛海洋公园和热带鱼游泳', '欢迎来到宁加洛海洋公园！这里有千奇百怪的海洋动物， 让您惊叹海洋的浩瀚与神秘。 纵身跃入水中，您不仅可以欣赏色彩斑斓的珊瑚， 还有机会和身躯庞大的鲸鲨一起畅游。', '想要再次潜入大海，与各类海洋生物翩翩起舞，不要犹豫， 回到宁加洛海洋公园， 快去体验吧。'],
    [47, 2],
    [48, 1, 6, '寻找美丽的粉色盐湖', '欢迎来到粉色盐湖！登上弗林德斯峰， 您可以俯瞰色彩奇妙的粉色盐湖以及围绕四周的千层树林， 感受大自然的浪漫与神奇。', '惊叹大自然的神奇，想要再次欣赏独特的粉色湖水，返回粉色盐湖， 留下浪漫的回忆吧。', ],
    [49, 2],
    [51, 1, 6, '世界上最大的城市公园国王公园', '欢迎来到国王公园！这里是世界上最大的城市公园， 您可以在丛林和花园中漫步，欣赏天鹅河的美丽景色，探寻达令山脉的迷人风光。', '想要俯瞰珀斯的全貌，将美景尽收眼底，快返回国王公园， 尽情领略珀斯的美好吧。]']];
var viewport = document.getElementById("metav");
var ua = window.navigator.userAgent;
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
    //Begin();
    //重新开始
    $('.BtnAgain').click(function () {
        PopHideAni('SuccessPop');
        $('.Plan').attr('class', 'Plan');
        $('.ZheZhao').hide();
        GetUserRecords();
        $('.Plan').addClass('Plan_' + Schedule);
    });

    
    var w = window.innerWidth, h = window.innerHeight;
    if (w > h) {
        if (ua.toUpperCase().indexOf('IPHONE') > -1 || ua.toUpperCase().indexOf('IPOD') > -1) {
            document.documentElement.style.fontSize = 37.5 * (document.documentElement.clientHeight / 375) + 5 + 'px';
        } else {
            document.documentElement.style.fontSize = 37.5 * (document.documentElement.clientHeight / 375) + 7 + 'px';
        }

        $('.MapImg').css({ 'width': '100%', 'height': 'auto' });
        $('.FillSmallTitle').css({ 'margin': '0.05rem 0 0.1rem 0' });
        $('#Map').css('overflow', 'auto');
    } else {
        document.documentElement.style.fontSize = 37.5 * (document.documentElement.clientWidth / 375) + 'px';
    }
    $('.BtnBegin').click(function () {
        if ($('.Icon').hasClass('Checked')) {
            //GetUserRecords();
            $('.Plan').addClass('Plan_' + Schedule);
            var w = window.innerWidth, h = window.innerHeight;
            if (w < h) {
                $('#Map').show();
                if ($('#Map').css('display') == 'block') {
                    $('#Heng').show();
                }
            }
            else {
                $('.Page').hide();
                $('#Map').show();
            }
        }
    });

    window.addEventListener('orientationchange', function (event) {
        if (window.orientation == 180 || window.orientation == 0) {
            if ($('#Map').css('display') == 'block') {
                $('#Heng').show();
            }
        }
        if (window.orientation == 90 || window.orientation == -90) {
            if ($('#Map').css('display') == 'block') {
                $('.Page').hide();
                $('#Map').show();
                $('#Map').css('overflow', 'auto');
                $('.MapImg').css({ 'width': '100%', 'height': 'auto' });
                $('.FillItem .Input').css({ 'width': '4.85rem', 'padding': '0.10rem' });
            }

        }
    });
    $('.ActiveItem').click(function () {
        if ($(this).children('.Icon').attr('class').indexOf('Unchecked') > -1) {
            $(this).children('.Icon').removeClass('Unchecked').addClass('Checked');
        } else {
            $(this).children('.Icon').removeClass('Checked').addClass('Unchecked');
        }
    });
    $('.ExplainInfo').click(function () {
        $('#Explain').show();
        $('#Home').hide();
    });
    $('.WhiteClose').click(function () {
        $('#Explain').hide();
        $('#Home').show();
    });

    //关闭
    $('.BlackClose').click(function () {
        var id = this.id;
        PopHideAni('Pop', 'PopItem');
        $('.DiceImg div').removeClass('DiceFace');
        $('.DiceImg').addClass('DiceAni');
        $('.DiceInfo').html('');
        Iphone(id);
    });
    //继续旅行
    $('.Continue').click(function () {
        var id = this.id;
        PopHideAni('Pop', 'PopItem');
        $('.DiceImg div').removeClass('DiceFace');
        $('.DiceImg').addClass('DiceAni');
        $('.DiceInfo').html('');
        Iphone2(id);
    });
    //澳秘卡继续游戏
    $('.BtnAccelerate').click(function () {
        var id = this.id;
        Numb = Math.floor(Math.random() * SubArray.length);
        ListIndex = SubArray[Numb];
        Total = List[ListIndex][0];
        Accelerate = 2;
        PopHideAni('BayCard', 'CardItem');
        Iphone2(id);
    });
    $('.BtnContinue').click(function () {
        PopHideAni('BayCard', 'CardItem');
    })
    //掷骰子
    $('.Dice').click(function () {
        isIndex = false;
        Frequency++;
        if (Schedule < 9) {
            if (Next == 0) {
                Next = 1;
                //第一次摇骰子
                Numb = Math.floor(Math.random() * 5 + 1);
                Total = Schedule + Numb;//即将要到达目的地编号
                for (var i = 0; i < List.length; i++) {
                    if (List[i][0] == Total) {
                        ListIndex = i;
                        isIndex = true;
                    }
                }
            } else {
                Next = 0;
                DestinationFn(1);
            }
        } else {
            if (Card != 0) {
                for (var i = 0; i < List.length; i++) {
                    if (List[i][0] > Schedule) {
                        if (List[i][2] != List[Subscript][2]) {
                            ListIndex = i;
                            isIndex = true;
                            break;
                        }
                        if (List[i][1] == 2) {
                            ListIndex = i;
                            isIndex = true;
                            break;
                        }
                    }
                }
                Numb = List[ListIndex][0] - Schedule;
                if (Numb <= 6) {
                    Total = List[ListIndex][0];
                } else {
                    Numb = 6;
                    Total = Schedule + Numb;
                    for (var i = 0; i < List.length; i++) {
                        if (List[i][0] == Total) {
                            ListIndex = i;
                            isIndex = true;
                        } else {
                            ListIndex = -1;
                        }
                    }
                }
            } else {
                DestinationFn(2);
            }
        }
        if (!isIndex) {
            ListIndex = -1;
            isIndex = false;
        }
        PopShowAni('DicePop', 'PopItem');
        setTimeout(function () {
            $('.DiceImg').removeClass('DiceAni');
            $('.DiceImg div').addClass('DiceFace');
            $('.DiceImg div').attr('style', '');
            $('#Dice_' + Numb).css('display', 'block');
            $('.DiceInfo').html('前进' + Numb + '步，到下一个目的地<br>体验更多“澳”秘！');
        }, 1000);
        setTimeout(function () {
            $('.Continue').css('background-color', '#006564');
        }, 1050);
    });

    $('.BtnSubmit').click(function () {
        var patten = /^1[34578]\d{9}$/;
        var Name = $('#Name').val().replace(/\s/ig, '');
        if (Name == '') {
            $('.error').html('姓名不能为空');
            return;
        }
        var Phone = $('#Phone').val().replace(/\s/ig, '');
        if (Phone == '') {
            $('.error').html('电话不能为空');
            return;
        }
        if (!patten.test(Phone)) {
            $('.error').html('电话格式不正确');
            return;
        }
        var Address = $('#Address').val().replace(/\s/ig, '');
        if (Address == '') {
            $('.error').html('邮寄地址不能为空');
            return;
        }
        SetUserInfo(Name, Phone, Address);
    });
    $('#Name').focus(function () {
        focus(this, 'Name');
    });
    $('#Name').blur(function () {
        blur(this, 'Name', '姓          名');
    });
    $('#Phone').focus(function () {
        focus(this, 'Phone');
    });
    $('#Phone').blur(function () {
        blur(this, 'Phone', '电          话');
    });
    $('#Address').focus(function () {
        focus(this, 'Address');
    });
    $('#Address').blur(function () {
        blur(this, 'Address', '邮 寄 地 址');
    });

})

function Iphone(id) {
    if (ua.toUpperCase().indexOf('IPHONE') > -1 || ua.toUpperCase().indexOf('IPOD') > -1) {
        Iphone1(id);
    } else {
        setTimeout(function () {
            Iphone1(id);
        }, 600);
    }
}
function Iphone1(id) {
    if (Subscript != -1) {
        if (List[Subscript][2] == 6) {
            Numb = 54 - Schedule;
            Total = Schedule + Numb;
            TimeFn(id);
            return;
        }
        if (Accelerate == 2) {
            Numb = Math.floor(Math.random() * SubArray2.length);
            ListIndex = SubArray2[Numb];
            Total = List[ListIndex][0];
            Accelerate = 1;
            SubArray = [], SubArray2 = [];
        }
    }
    TimeFn(id);
}

function Iphone2(id) {
    if (ua.toUpperCase().indexOf('IPHONE') > -1 || ua.toUpperCase().indexOf('IPOD') > -1) {
        TimeFn(id);
        $('.Continue').css('background-color', '#a1a1a1');
    } else {
        setTimeout(function () {
            TimeFn(id);
            $('.Continue').css('background-color', '#a1a1a1');
        }, 600);
    }
}

//澳秘卡或目的地
function DestinationFn(type) {
    for (var i = 0; i < List.length; i++) {
        if (List[i][0] > Schedule) {
            if (type == 1) {
                if (Subscript == -1) {
                    ListIndex = i;
                    isIndex = true;
                    break;
                } else {
                    if (List[i][2] != List[Subscript][2]) {
                        ListIndex = i;
                        isIndex = true;
                        break;
                    }
                }
            } else {
                if (List[i][1] == 1) {
                    ListIndex = i;
                    isIndex = true;
                    break;
                }
            }

        }
    }
    Numb = List[ListIndex][0] - Schedule;
    if (Numb <= 5) {
        Total = List[ListIndex][0];
    } else {
        Numb = 5;
        Total = Schedule + Numb;
    }
}

//查看优惠
function ViewOffersFn() {
    window.location.href = 'http://www.cathaypacific.com/cx/sc_CN/offers/flight/AUST-TA-Jul17.html?utm_medium=DISPLAY-CN&utm_campaign=20170718-CX-CN-AUSTAGAME-PROMO&utm_source=WECHATGAME&utm_content=OFFER&utm_term=LANDINGPAGE';
}

function success_Function() {
}

function PopShowAni(PopName, PopItem) {
    $('.' + PopName).show();
    $('.PopBg').removeClass('PopBgHideAni').addClass('PopBgAni');
    $('.' + PopItem).removeClass('PopHidAni');
    setTimeout(function () {
        $('.' + PopItem).addClass('PopAni');
    }, 50);
}
function PopHideAni(PopName, PopItem) {
    $('.' + PopItem).addClass('PopHidAni').removeClass('PopAni');
    $('.PopBg').addClass('PopBgAni');
    setTimeout(function () {
        $('.' + PopName).hide();
    }, 500)
}
function focus(obj, inputClass) {
    var input = $('#' + inputClass).val().replace(/\s/ig, '');
    $('.error').html('');
    if (input == '') {
        $(obj).attr('placeholder', "");
    }
}
function blur(obj, inputClass, inputPlace) {
    var input = $('#' + inputClass).val().replace(/\s/ig, '');
    if (input == '') {
        $(obj).attr('placeholder', inputPlace);
    }
}


function AdvanceFn(type) {
    if (type == 0) {
        return;
    }
    if (ListIndex == -1) {
        //SetUserRecords(Total, Subscript, Numb, 0, Next, State);
        return;
    }
    var AddressList = List[ListIndex];
    DiceDestination = Total;
    switch (AddressList[1]) {
        case 1:
            if (Subscript == -1) {
                Subscript = ListIndex;
                Next = 0;
            }
            else {
                if (List[Subscript][2] != List[ListIndex][2]) {
                    Next = 0;
                    Subscript = ListIndex;
                } else {
                    Next = 1;
                    Subscript = ListIndex;
                }
            }


            $('.CityImg').attr('src', 'images/cityImg/' + AddressList[0] + '.png');
            $('.PopTitle').html(AddressList[3]);
            $('.PopInfo').html(AddressList[4]);
            PopShowAni('CityPop', 'PopItem');
            break;
        case 2:

            CardState = parseInt(GetCardState());

            //  Card--;
            //if (Card < 2) {
            //    CardState = 2;
            //}
            //if (Card >= 0) { //有澳秘卡
            if (CardState == 1) { //促销信息
                $('.CardInfo').show();
                $('.Accelerate').hide();
                PopShowAni('BayCard', 'CardItem');
            } else {  //加速卡
                $('.Accelerate').show();
                $('.CardInfo').hide();
                PopShowAni('BayCard', 'CardItem');
                var Sub = List[Subscript][2];
                SubArray = [], SubArray2 = [];
                for (var i = 0; i < List.length; i++) {
                    if (List[i][0] > Schedule) {
                        if (List[i][2] == Sub + 1) {
                            SubArray.push(i);
                        } else if (List[i][2] == Sub + 2) {
                            SubArray2.push(i);
                        }
                    }
                }
            }
            // }
            break;
    }
    SetUserRecords(Total, Subscript, Numb, AddressList[1], Next, State);//目的地编号，下标，色子数，类型，两个城市间掷的次数
    Numb = 0;
}

function disp() {
    $('.Plan').attr('class', 'Plan');
    $('.Plan').addClass('Plan_' + Schedule).removeClass('Plan_' + (Schedule - 1));
}
function TimeFn(type) {
    var address = Total;
    if (Schedule < address) {
        $('.ZheZhao').show();
        Schedule++;
        disp();
        Timer = setTimeout('TimeFn()', 700);
    } else {
        PlaneSchedule = address;
        clearTimeout(Timer);
        if (Subscript == -1 || List[Subscript][2] < 6) {
            AdvanceFn(type);
            $('.ZheZhao').hide();
        } else {
            SetUserRecords(54, 6, 0, 1, 0, 1);//目的地编号，下标，色子数，类型，两个城市间掷的次数
            //$('.FillInfo').show();
            //PopShowAni('FillInfo', 'PopItem');
        }
    }
    return;
}


function Begin() {
    var obj = new Object();
    obj.OpenId = getParam("OpenId");
    $.ajaxSetup({ async: false, cache: false });
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "JulyService.asmx/GetUserInfo",
        data: JSON.stringify(obj),
        dataType: 'json',
        success: function (result) {
            var data = result.d;

            if (data == null) {
                window.location.href = "404.html";
            }
        },
        error: function () {
            $('.loading').hide();
            $('.main').show();
            $('.userMany').show();
        }
    });
}

function GetUserRecords() {
    $.ajaxSetup({ async: false, cache: false });
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "JulyService.asmx/GetUserRecords",
        data: "{}",
        dataType: 'json',
        success: function (result) {
            var data = result.d;
            SetGameInfo(data);
        },
        error: function () {
            $('.loading').hide();
            $('.main').show();
            $('.userMany').show();
        }
    });
}

function SetUserRecords(Destination, NotReached, DiceNumber, TypeId, DiceDestination, State) {
    var obj = new Object();
    obj.Destination = Destination;
    obj.NotReached = NotReached;
    obj.DiceNumber = DiceNumber;
    obj.TypeId = TypeId;
    obj.DiceDestination = DiceDestination;
    obj.State = State;
    $.ajaxSetup({ async: false, cache: false });
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "JulyService.asmx/SetUserRecords",
        data: JSON.stringify(obj),
        dataType: 'json',
        success: function (result) {
            var data = result.d;
            SetGameInfo(data);

        },
        error: function () {
            $('.loading').hide();
            $('.main').show();
            $('.userMany').show();
        }
    });
}
function SetGameInfo(data) {
    var list = data.NotReached.split(',');
    Total = data.Destination, Schedule = data.Destination, Subscript = parseInt(list[0]), Next = parseInt(list[1]), Card = parseInt(list[2]);// ListIndex = parseInt(list[0]);
    SetShells(data.State);
}

function SetShells(State) {
    $('.Page').hide();
    $('#Map').show();
    switch (State) {
        case 0: //未完成
            break;
        case 1: //填写信息
            GetUserReg();
            $('.Pop').hide();
            $('.FillInfo').show();
            PopShowAni('FillInfo', 'PopItem');
            break;
        case 3: //很遗憾
            $('.SuccessPop').show();
            PopShowAni('SuccessPop', 'PopItem');
            $('.Success').html('很遗憾！');
            $('.SuccessInfo').html('还有更多“澳”秘等您发现<br>再试试吧');
            $('.Btn').hide();
            $('.BtnAgain').show();
            break;
        case 2://提交成功
            $('.SuccessPop').show();
            PopShowAni('SuccessPop', 'PopItem');
            $('.Success').html('提交成功！');
            $('.SuccessInfo').html('点击下方查看澳大利亚优惠活动<br />开启真正的“澳”秘之旅');
            $('.Btn').hide();
            $('.Favourable').show();
    }
}

function SetUserInfo(Name, Phone, Address) {
    var obj = new Object();
    obj.Name = Name;
    obj.Phone = Phone;
    obj.Address = Address;
    $.ajaxSetup({ async: false, cache: false });
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "JulyService.asmx/SetUserInfo",
        data: JSON.stringify(obj),
        dataType: 'json',
        success: function (result) {
            var data = result.d;
            if (data == null) {
                $('.loading').hide();
                $('.main').show();
                $('.userMany').show();
            }
            else {
                $('.Page').hide();
                $('#Map').show();
                $('.SuccessPop').show();
                PopShowAni('SuccessPop', 'PopItem');
                $('.Success').html('提交成功！');
                $('.SuccessInfo').html('点击下方查看澳大利亚优惠活动<br />开启真正的“澳”秘之旅');
                $('.Btn').hide();
                $('.Favourable').show();
                $('.FavourableHref').show();
            }

        },
        error: function () {
            $('.loading').hide();
            $('.main').show();
            $('.userMany').show();
        }
    });
}

function GetCardState() {

    var RegMsg = "0";
    $.ajaxSetup({ async: false, cache: false });
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "JulyService.asmx/GetCardState",
        data: "{}",
        dataType: 'json',
        success: function (result) {
            RegMsg = result.d;


        },
        error: function () {

        }
    });

    return RegMsg;
}

function GetUserReg() {

    var RegMsg = "0";
    $.ajaxSetup({ async: false, cache: false });
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "JulyService.asmx/GetUserReg",
        data: "{}",
        dataType: 'json',
        success: function (result) {
            RegMsg = result.d;
            if (RegMsg != null && RegMsg != undefined) {
                $('#Name').val(RegMsg.Name);
                $('#Phone').val(RegMsg.Phone);
                $('#Address').val(RegMsg.Address);
            }

        },
        error: function () {

        }
    });

    return RegMsg;
}



