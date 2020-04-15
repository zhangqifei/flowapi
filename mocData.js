let fs = require('fs'),
    ary = [];
for (let i = 1; i <= 50; i++) {
    let ran = Math.round(Math.random() * 12 + 1),
        area = [534, 300, 170, 451, 200, 400, 200, 400, 433, 257, 408, 225, 188];
    ary.push({
        id: i,
        pic: `https://zhouxiaotian.github.io/flowapi/images/${ran}.jpg`,
        width: 300,
        height: area[ran - 1],
        title: '泰勒斯威夫特于1989年12月13日出生，童年在一个11英亩的圣诞树农场度过。于是，乡村音乐影响了她的童年。懂的人都明白，美国的乡村音乐欢快而直爽，悠然中带着强烈的节奏感',
        link: 'https://baike.sogou.com/v1850208.htm?fromTitle=%E9%9C%89%E9%9C%89'
    });
}

fs.writeFileSync('./data.json', JSON.stringify(ary), 'utf-8');