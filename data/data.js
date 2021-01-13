var data = {

  imgList: [
    {title:"雪屋",src:"/image/mh/banner1.jpg"},
    {title:"刺客信条：王朝",src:"/image/mh/banner2.jpg"},
    {title:"诺斯游戏",src:"/image/mh/banner3.jpg"}
  ],

    // 3.导航栏
    navs: [
      {
          image: '../../image/home_entity.png',
          text: '实体课程'
        },
  
         {
          image: '../../image/home_play.png',
          text: '在线直播'
        },
  
        
         {
          image: '../../image/home_door.png',
          text: '上门家教'
        }
      ],
  
  
       // 5.推荐课程
    recommend: [
    {
      image:'../../image/0414couser.png',
      title:'新概念英语第1册',
      time:'8月20日 10:00',
      grade:'适合一年级',
      price:'￥100'
    },
        
    {
      image:'../../image/0414couser.png',
      title:'新概念英语第2册',
      time:'8月21日 10:00',
      grade:'适合二年级',
      price:'￥100'
    },
       
    {
      image:'../../image/0414couser.png',
      title:'新概念英语第3册',
      time:'8月22日 10:00',
      grade:'适合三年级',
      price:'￥100'
    },
    {
      image:'../../image/0414couser.png',
      title:'新概念英语第4册',
      time:'8月23日 10:00',
      grade:'适合四年级',
      price:'￥100'
    },
       
    {
      image:'../../image/0414couser.png',
      title:'新概念英语第5册',
      time:'8月24日 10:00',
      grade:'适合五年级',
      price:'￥100'
    }
    ],
   
}

var course = {

  // 1.菜单栏数据
  menuItems:[
    {
      courseName:'实体课程',
      id:'0'
    },
    {
      courseName:'在线直播',
      id:'1'
    },
    {
      courseName:'上门家教',
      id:'2'
    }
  ],
  
  courseTitle:"Vip1对1辅导",
  courseGrade:"一年级",
  coursePay:"￥100/小时",
  courseCount:"x 2",
  courseOrderid:"订单号:108975240",
  coursePrice:"总价：￥200",
  
  // 2.列表
    lists:[0,1,2],
  
      // 3.item数据
      image:"../../image/0713head.png",
      interval: 3000,
      duration: 1200,
      color: 'light-gray',
       currentMenuID : '0',
       currentPage:0,
}

module.exports = {
  data:data
}