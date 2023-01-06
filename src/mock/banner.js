import Mock from 'mockjs';

Mock.mock("/api/banner", 'get', {
    code: 406, // 0 无错误  406 验证失败  500 服务器内部错误
    msg: "验证失败",
    data: [
        {
            id: 1,
            midImg: "http://mdrs.yuanjin.tech/img/20201031141507.jpg",
            bigImg: "http://mdrs.yuanjin.tech/img/20201031141350.jpg",
            title: "凛冬将至",
            desciption:"人唯有恐惧的时候方能勇敢",
        },
        {
            id: 2,
            midImg: "http://mdrs.yuanjin.tech/img/20201031205550.jpg",
            bigImg: "http://mdrs.yuanjin.tech/img/20201031205551.jpg",
            title: "血火同源",
            desciption:"如果我回头了,一切都完了",
        } ,
        {
            id:3,
            midImg: "http://mdrs.yuanjin.tech/img/20201031204401.jpg",
            bigImg: "http://mdrs.yuanjin.tech/img/20201031204403.jpg",
            title: "听我怒吼",
            desciption:"兰尼斯特有债必偿",
        }
    ]

})