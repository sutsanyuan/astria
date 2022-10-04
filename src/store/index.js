import {createStore} from "vuex";
import axios from "axios";
import descriptionJSON from "../assets/description.json";
export default createStore({
  state: {
    submitDisabled: false,
    currentAPIsrc:
      "http://52.139.170.100:3333/horoscope?time=1995-07-07T03:08:00Z&latitude=25.11111&longitude=120.11111&houseSystem=P",
    //Genaral Data
    //星座說明
    descJSON: descriptionJSON,
    test: 1,
    planetsWithoutSpace: [
      "太陽",
      "上升",
      "月亮",
      "火星",
      "水星",
      "金星",
      "木星",
      "土星",
      "天王星",
      "海王星",
      "冥王星",
    ],

    currentData: {
      currentBirthday: "1995-07-07",
      currentUTCBirthday: "1995-07-07",
      currentBirthTime: "11:08:00",
      currentUTCBirthTime: "03:08:00",
      currentName: "正預期",
      currentLocation: "台南",
      currentLatitude: "23.11111",
      currentLongitude: "120.55555",
      currentChartDataOrigin: {},
      currentSigns: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],

      currentSignsNames: [
        "牡羊座",
        "金牛座",
        "雙子座",
        "巨蟹座",
        "獅子座",
        "處女座",
        "天秤座",
        "天蠍座",
        "射手座",
        "摩羯座",
        "水瓶座",
      ],
      currentHouses: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      currentHousesNames: [
        "第一宮",
        "第一宮",
        "第一宮",
        "第一宮",
        "第一宮",
        "第一宮",
        "第一宮",
        "第一宮",
        "第一宮",
        "第一宮",
        "第一宮",
      ],
      currentSignInfo: [],
      currentHouseInfo: [],
      //各行星角度
      currentDegrees: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      currentChartDataOrigin: {},
      currentChartData: {
        planets: {
          Lilith: [17],
          Chiron: [18],
          Pluto: [63],
          Neptune: [110, 0.2],
          Uranus: [318],
          Saturn: [201, -0.2],
          Jupiter: [192],
          Mars: [210],
          Moon: [268],
          Sun: [281],
          Mercury: [312],
          Venus: [330],
          //NNode: [2],
        },
        cusps: [296, 350, 30, 56, 75, 94, 116, 170, 210, 236, 255, 274],
      },

      currentAstrologist: {
        ProName: "唐揚揚",
        Select: "占星塔羅",
        ProImg: "2.jpg",
        PID: 1,
        ProEmail: "aa@gmail.com",
      },
    },

    //登入狀態
    isLogIn: false,

    //Personal Data
    //我的資料
    myEmail: "aa@gmail.com",
    myName: "酥燦燦",
    myPhone: "0921809234",
    myGender: 1,

    myBirthday: "1995-07-07",
    myBirthTime: "11:08",
    myUTCBirthday: "1995-07-07",
    myUTCBirthTime: "03:08:00",
    //出生地
    myLocation: "台北市",

    //myBirthdayAndTime: "1995-07-07T03:08:00Z", //台灣時間-8
    myLatitude: "25.11111",
    myLongitude: "121.11111",
    // myAPIsrc:
    //   "http://52.139.170.100:3333/horoscope?time=1995-07-07T03:08:00Z&latitude=25.11111&longitude=120.11111&houseSystem=P",

    //專業帳號資料
    myPhoto: "",
    myProName: "",
    myProPhone: "",
    myExperience: "",
    mySkill: "",
    //居住地
    myAddress: "",

    isPro: false,

    //api抓下來的原始資料
    myChartDataOrigin: {},
    //星盤資料
    myChartData: {
      planets: {
        Lilith: [17],
        Chiron: [18],
        Pluto: [63],
        Neptune: [110, 0.2],
        Uranus: [318],
        Saturn: [201, -0.2],
        Jupiter: [192],
        Mars: [210],
        Moon: [268],
        Sun: [281],
        Mercury: [312],
        Venus: [330],
        //NNode: [2],
      },
      cusps: [296, 350, 30, 56, 75, 94, 116, 170, 210, 236, 255, 274],
    },
    //各行星落入星座
    mySigns: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    mySignsNames: [
      "牡羊座",
      "金牛座",
      "雙子座",
      "巨蟹座",
      "獅子座",
      "處女座",
      "天秤座",
      "天蠍座",
      "射手座",
      "摩羯座",
      "水瓶座",
    ],
    //各行星落入宮位
    myHouses: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    myHousesNames: [
      "第一宮",
      "第一宮",
      "第一宮",
      "第一宮",
      "第一宮",
      "第一宮",
      "第一宮",
      "第一宮",
      "第一宮",
      "第一宮",
      "第一宮",
    ],
    //各行星角度
    myDegrees: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //星座與宮位說明，從JSON檔抓取
    mySignInfo: [],
    myHouseInfo: [],

    //好友星盤
    friends: [
      {
        name: "林冠廷",
        birthday: "1996-08-09",
        birthTime: "03:08:00",
        birthCity: "Taipei",

        signs: [5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        // astroAPI:
        //   "http://52.139.170.100:3333/horoscope?time=1996-08-09T08:14:00Z&latitude=25.11111&longitude=120.11111&houseSystem=P",
        //myLatitude: "25.11111",
        //myLongitude: "121.11111",
        //birthdayAndTime: "1995-07-07T03:08:00Z",

        // chartData: {
        //   planets: {
        //     Lilith: [17],
        //     Chiron: [18],
        //     Pluto: [63],
        //     Neptune: [110, 0.2],
        //     Uranus: [318],
        //     Saturn: [201, -0.2],
        //     Jupiter: [192],
        //     Mars: [210],
        //     Moon: [268],
        //     Sun: [281],
        //     Mercury: [312],
        //     Venus: [330],
        //     //NNode: [2],
        //   },
        //   cusps: [296, 350, 30, 56, 75, 94, 116, 170, 210, 236, 255, 274],
        // },
        FID: 1,
      },
      {
        name: "照相相",
        birthday: "1997-09-09",
        birthTime: "03:08:00",
        birthCity: "Tainan",
        //astroAPI:
        //  "http://52.139.170.100:3333/horoscope?time=1997-09-09T03:08:00Z&latitude=23.11111&longitude=120.11111&houseSystem=P",

        //myLatitude: "23.11111",
        //myLongitude: "121.11111",
        signs: [6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        FID: 1,
      },
      {
        name: "正預期",
        birthday: "1997-10-09",
        birthTime: "03:08:00",
        birthCity: "Tainan",
        // astroAPI:
        //   "http://52.139.170.100:3333/horoscope?time=1997-10-09T03:08:00Z&latitude=23.11111&longitude=120.11111&houseSystem=P",

        // myLatitude: "23.11111",
        // myLongitude: "121.11111",
        signs: [7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        FID: 1,
      },
      {
        name: "照相相",
        birthday: "1997-09-09",
        birthTime: "03:08:00",
        birthCity: "Tainan",
        // astroAPI:
        //   "http://52.139.170.100:3333/horoscope?time=1997-09-09T03:08:00Z&latitude=23.11111&longitude=120.11111&houseSystem=P",

        // myLatitude: "23.11111",
        // myLongitude: "121.11111",
        signs: [6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        FID: 1,
      },
      {
        name: "照相相",
        birthday: "1997-09-09",
        birthTime: "03:08:00",
        birthCity: "Tainan",
        // astroAPI:
        //   "http://52.139.170.100:3333/horoscope?time=1997-09-09T03:08:00Z&latitude=23.11111&longitude=120.11111&houseSystem=P",

        // myLatitude: "23.11111",
        // myLongitude: "121.11111",
        signs: [6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        FID: 1,
      },
      {
        name: "照相相",
        birthday: "1997-09-09",
        birthTime: "03:08:00",
        birthCity: "Tainan",
        // astroAPI:
        //   "http://52.139.170.100:3333/horoscope?time=1997-09-09T03:08:00Z&latitude=23.11111&longitude=120.11111&houseSystem=P",

        // myLatitude: "23.11111",
        // myLongitude: "121.11111",
        signs: [6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        FID: 1,
      },
      {
        name: "照相相",
        birthday: "1997-09-09",
        birthTime: "03:08:00",
        birthCity: "Tainan",
        // astroAPI:
        //   "http://52.139.170.100:3333/horoscope?time=1997-09-09T03:08:00Z&latitude=23.11111&longitude=120.11111&houseSystem=P",

        // myLatitude: "23.11111",
        // myLongitude: "121.11111",
        signs: [6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        FID: 1,
      },
    ],

    //我的訂單
    myOrders: [
      {
        rID: "0000000001",
        ProID: "ProID001",
        //MemID: "MemID001",
        ProName: "唐綺陽",
        ProLesson: "塔羅課",
        //日期
        ProTime: "2021-10-23",
        UserSelect: "不明",
        ProCost: 1600,
        LesCount: 2,
        ReserveAmount: 2,

        Memo: "備註",
        //資料表沒有
        purchaseDate: "2022-09-02",
        isOver: true,
      },
      // {
      //   rID: "0000000002",
      //   //ProID: "ProID001",
      //   //MemID: "MemID001",
      //   ProName: "唐綺陽",
      //   ProLesson: "塔羅課2",
      //   //日期
      //   ProTime: "2021-10-23",
      //   UserSelect: "不明",
      //   ProCost: 1600,
      //   LesCount: 3,
      //   ReserveAmount: 1,

      //   //資料表沒有
      //   purchaseDate: "2022-09-02",
      //   isOver: false,
      // },
      // {
      //   rID: "0000000003",
      //   //ProID: "ProID001",
      //   //MemID: "MemID001",
      //   ProName: "唐陽",
      //   ProLesson: "塔羅課3",
      //   //日期
      //   ProTime: "2021-10-23",
      //   UserSelect: "不明",
      //   ProCost: 1600,
      //   LesCount: 1,
      //   ReserveAmount: 1,

      //   //資料表沒有
      //   purchaseDate: "2022-09-02",
      //   isOver: false,
      // },
    ],
    proOrders: [
      {
        rID: "0000000004",
        ProID: "ProID001",
        MemID: "MemID001",
        MemberName: "林冠廷",
        //ProName: "唐綺陽",
        ProLesson: "塔羅課",
        //日期
        ProTime: "2021-10-23",
        UserSelect: "不明",
        ProCost: 1600,
        LesCount: 1,
        ReserveAmount: 1,
        Memo: "下午時段方便",

        //資料表沒有
        purchaseDate: "2022-09-02",
        isOver: true,
      },
      // {
      //   rID: "0000000001",
      //   //ProID: "ProID001",
      //   //MemID: "MemID001",
      //   ProName: "唐綺陽",
      //   MemberName: "照相香",
      //   ProLesson: "塔羅課",
      //   //日期
      //   ProTime: "2021-10-23",
      //   UserSelect: "不明",
      //   ProCost: 1600,
      //   LesCount: 1,
      //   ReserveAmount: 1,
      //   Memo: "上午時段方便",

      //   //資料表沒有
      //   purchaseDate: "2022-09-02",
      //   isOver: false,
      // },
    ],

    //未使用
    chartDataOrigin: {},
    chartData: {},

    //熱門占星師
    trendyAstrologists: [
      {
        ProName: "唐齊齊",
        Select: "占星塔羅",
        ProImg: "./imgs/adv/1.jpg",
        MemberEmail: "hsianghoney@gmail.com",
        PID: 1,
      },
      {
        ProName: "唐揚揚",
        Select: "占星塔羅",
        ProImg: "./imgs/adv/2.jpg",
        PID: 1,
      },
      {ProName: "詹惟中", Select: "風水", ProImg: "./imgs/adv/3.jpg", PID: 1},
      {
        ProName: "唐齊齊",
        Select: "占星塔羅",
        ProImg: "./imgs/adv/4.jpg",
        PID: 1,
      },
      {
        ProName: "唐揚揚",
        Select: "占星塔羅",
        ProImg: "./imgs/adv/5.jpg",
        PID: 1,
      },
      {ProName: "詹惟中", Select: "風水", ProImg: "./imgs/adv/6.jpg", PID: 1},
    ],
    //所有占星師
    // Name: "ccc"
    // PID: 4
    // Select: "星盤"
    // photo: "./imgs/Adv/Default.jpg"
    allAstrologists: [
      {
        ProName: "唐齊齊",
        Select: "星座命盤",
        ProImg: "./imgs/adv/1.jpg",
        PID: 1,
        ProEmail: "cc@gmail..com",
      },
      {
        ProName: "唐揚揚",
        Select: "生命靈數",
        ProImg: "./imgs/adv/2.jpg",
        PID: 2,
        ProEmail: "cc@gmail..com",
      },
      {
        ProName: "詹惟中",
        Select: "塔羅占卜",
        ProImg: "./imgs/adv/3.jpg",
        PID: 3,
        ProEmail: "cc@gmail..com",
      },
      {
        ProName: "唐齊齊",
        Select: "星座命盤",
        ProImg: "./imgs/adv/4.jpg",
        PID: 4,
        ProEmail: "cc@gmail..com",
      },
      {
        ProName: "唐揚揚",
        Select: "人類圖",
        ProImg: "./imgs/adv/5.jpg",
        PID: 5,
        ProEmail: "cc@gmail..com",
      },
      {
        ProName: "詹惟中",
        Select: "八字",
        ProImg: "./imgs/adv/6.jpg",
        PID: 6,
        ProEmail: "cc@gmail..com",
      },
      {
        ProName: "詹惟中",
        Select: "風水",
        ProImg: "./imgs/adv/3.jpg",
        PID: 7,
        ProEmail: "cc@gmail..com",
      },
      {
        ProName: "唐齊齊",
        Select: "星座命盤",
        ProImg: "./imgs/adv/7.jpg",
        PID: 8,
        ProEmail: "cc@gmail..com",
      },
      {
        ProName: "唐揚揚",
        Select: "紫微斗數",
        ProImg: "./imgs/adv/5.jpg",
        PID: 9,
        ProEmail: "cc@gmail..com",
      },
      {
        ProName: "詹惟中",
        Select: "風水",
        ProImg: "./imgs/adv/6.jpg",
        PID: 10,
        ProEmail: "cc@gmail..com",
      },
    ],

    astrologistsByCat: [
      [
        {
          ProName: "唐揚揚",
          Select: "占星塔羅",
          ProImg: "./imgs/adv/2.jpg",
          PID: 1,
          ProEmail: "cc@gmail..com",
        },
      ],
      [
        {
          ProName: "唐揚揚",
          Select: "占星塔羅",
          ProImg: "./imgs/adv/2.jpg",
          PID: 1,
          ProEmail: "cc@gmail..com",
        },
      ],
      [
        {
          ProName: "唐揚揚",
          Select: "占星塔羅",
          ProImg: "./imgs/adv/2.jpg",
          PID: 1,
          ProEmail: "cc@gmail..com",
        },
      ],
      [
        {
          ProName: "唐揚揚",
          Select: "占星塔羅",
          ProImg: "./imgs/adv/2.jpg",
          PID: 1,
          ProEmail: "cc@gmail..com",
        },
      ],
      [
        {
          ProName: "唐揚揚",
          Select: "占星塔羅",
          ProImg: "./imgs/adv/2.jpg",
          PID: 1,
          ProEmail: "cc@gmail..com",
        },
      ],
      [
        {
          ProName: "唐揚揚",
          Select: "占星塔羅",
          ProImg: "./imgs/adv/2.jpg",
          PID: 1,
          ProEmail: "cc@gmail..com",
        },
      ],
      [
        {
          ProName: "唐揚揚",
          Select: "占星塔羅",
          ProImg: "./imgs/adv/2.jpg",
          PID: 1,
          ProEmail: "cc@gmail..com",
        },
        {
          ProName: "唐揚揚",
          Select: "占星塔羅",
          ProImg: "./imgs/adv/2.jpg",
          PID: 1,
          ProEmail: "cc@gmail..com",
        },
      ],
    ],

    //new

    //productshop購物車
    myCart: {
      shopNmae: "思語塔羅工作坊",
      addpsTime: 0,
      addCost: 0,
      psCount: 0,
      online: "",
      local: "",
    },

    psCost: [1000, 1500, 1800, 2700],
    //課程內容
    psName: ["妤塔羅占卜工作坊", "唐綺占星工作室"],
    psSkill: [
      "八字",
      "人類圖",
      "紫微斗數",
      "塔羅占卜",
      "生命靈數",
      "星座命盤",
      "星盤",
    ],

    psLesson: [
      {
        lesson: "塔羅牌真命天子陣",
        psTime: "30",
        pscontent:
          "透過塔羅抽牌方式，抽出至少5張，至多全部的牌，占卜師透過牌陣，詳細分析您一年內是否有機會碰到心儀的對象！",
        pstip: "⚠️選購本課程可錄音、拍照，不可錄影，請自備相關設備。⚠",
      },
      {
        lesson: "2023年流年運勢",
        psTime: "30",
        pscontent:
          "透過塔羅抽牌方式，抽出至少5張，至多全部的牌，占卜師透過牌陣，詳細分析您一年內是否有機會碰到心儀的對象！",
        pstip: "⚠️選購本課程可錄音、拍照，不可錄影，請自備相關設備。⚠",
      },
      {
        lesson: "最強運勢解析",
        psTime: "30",
        pscontent:
          "透過塔羅抽牌方式，抽出至少5張，至多全部的牌，占卜師透過牌陣，詳細分析您一年內是否有機會碰到心儀的對象！",
        pstip: "⚠️選購本課程可錄音、拍照，不可錄影，請自備相關設備。⚠",
      },
      {
        lesson: "塔羅工作運勢解析",
        psTime: "30",
        pscontent:
          "透過塔羅抽牌方式，抽出至少5張，至多全部的牌，占卜師透過牌陣，詳細分析您一年內是否有機會碰到心儀的對象！",
        pstip: "⚠️選購本課程可錄音、拍照，不可錄影，請自備相關設備。⚠",
      },
      {
        lesson: "最強工作運勢解析",
        psTime: "30",
        pscontent:
          "透過塔羅抽牌方式，抽出至少5張，至多全部的牌，占卜師透過牌陣，詳細分析您一年內是否有機會碰到心儀的對象！",
        pstip: "⚠️選購本課程可錄音、拍照，不可錄影，請自備相關設備。⚠",
      },
    ],
    pushLesson: {
      lesson: [],
      psTime: [],
      pscontent: [,],
      pstip: [],
    },
  },
  getters: {},
  mutations: {
    //---Add friend to store after adding friend
    addFriendToStore(state, payload) {
      state.friends.push({
        name: payload.name,
        birthday: payload.birthday,
        birthTime: payload.birthTime,
        birthCity: payload.birthCity,
        signs: payload.signs,
      });
    },
    //---Set Friends
    setFriendsList(state, payload) {
      if (payload.length > 0) {
        state.friends = [{}];
      }
      payload.forEach((friend) => {
        if (
          payload.indexOf(friend) != 0 &&
          payload.length > state.friends.length
        ) {
          state.friends.push({});
        }
      });
      payload.forEach((friend) => {
        //-----data from api-----
        // Birth: "1998-09-30"
        // BirthPlace: "新北市"
        // BirthTime: "11:00"
        // Email: ""
        // FID: null
        // JObj: null
        // JsonData: null
        // MID: 0
        // Name: "aaa"
        // signs: null
        //-----friends------
        // name: "林冠廷",
        // birthday: "1996-08-09",
        // birthTime: "03:08:00",
        // birthCity: "Taipei",
        // signs: [5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        state.friends[payload.indexOf(friend)].name = friend.Name;
        state.friends[payload.indexOf(friend)].birthday = friend.Birth;
        state.friends[payload.indexOf(friend)].birthTime = friend.BirthTime;
        state.friends[payload.indexOf(friend)].birthCity = friend.BirthPlace;
        state.friends[payload.indexOf(friend)].signs = friend.signs;
        state.friends[payload.indexOf(friend)].FID = friend.FID;
        console.log("set friend index", payload.indexOf(friend));
      });
    },

    //---Set Pro List
    //---from api
    // Name: "ccc"
    // PID: 4
    // Select: "星盤"
    // photo: "./imgs/Adv/Default.jpg"
    ///---State---
    // ProName: "唐齊齊", Select: "星座命盤", ProImg: "1.jpg", PID: 1
    setAllAstrologists(state, payload) {
      payload.forEach((astrologist) => {
        if (
          payload.indexOf(astrologist) != 0 &&
          payload.length > state.allAstrologists.length
        ) {
          state.allAstrologists.push({});
        }
      });
      payload.forEach((astrologist) => {
        state.allAstrologists[payload.indexOf(astrologist)].PID =
          astrologist.PID;
        state.allAstrologists[payload.indexOf(astrologist)].ProName =
          astrologist.Name;
        state.allAstrologists[payload.indexOf(astrologist)].Select =
          astrologist.Select;
        state.allAstrologists[payload.indexOf(astrologist)].ProImg =
          astrologist.photo;
        state.allAstrologists[payload.indexOf(astrologist)].ProEmail =
          astrologist.Email;

        console.log("set index", payload.indexOf(astrologist));
      });
    },

    setAstrologistsByCat(state, payload) {
      // console.log("print cat", payload.cat);
      payload.data.forEach((astrologist) => {
        //console.log("length", state.astrologistsByCat[payload.index].length);
        if (
          payload.data.indexOf(astrologist) != 0 &&
          payload.data.length > state.astrologistsByCat[payload.index].length
        ) {
          state.astrologistsByCat[payload.index].push({});
        }
        // console.log(
        //   "state.astrologistsByCat[payload.index]" + payload.index,
        //   state.astrologistsByCat[payload.index]
        // );
        // console.log(
        //   "state.astrologistsByCat[payload.index].PID" + payload.index,
        //   state.astrologistsByCat[payload.index][
        //     payload.data.indexOf(astrologist)
        //   ].PID
        // );
        //console.log("astrologist.PID", astrologist.PID);
        state.astrologistsByCat[payload.index][
          payload.data.indexOf(astrologist)
        ].PID = astrologist.PID;
        state.astrologistsByCat[payload.index][
          payload.data.indexOf(astrologist)
        ].ProName = astrologist.Name;
        state.astrologistsByCat[payload.index][
          payload.data.indexOf(astrologist)
        ].Select = astrologist.Select;
        state.astrologistsByCat[payload.index][
          payload.data.indexOf(astrologist)
        ].ProImg = astrologist.photo;
        state.astrologistsByCat[payload.index][
          payload.data.indexOf(astrologist)
        ].ProEmail = astrologist.Email;

        // console.log(
        //   "set cat index" + payload.index,
        //   payload.data.indexOf(astrologist)
        // );
      });
    },

    //設定目前商店

    setCurrentAstrologist(state, payload) {
      state.currentData.currentAstrologist.PID = payload.PID;
      state.currentData.currentAstrologist.ProName = payload.ProName;
      state.currentData.currentAstrologist.ProImg = payload.ProImg;
      state.currentData.currentAstrologist.Select = payload.Select;
      state.currentData.currentAstrologist.ProEmail = payload.ProEmail;
    },

    //------Log Out
    logOut(state) {
      state.isLogIn = false;
      localStorage.removeItem("token");
      localStorage.removeItem("myemail");
      localStorage.removeItem("mymsg");
      localStorage.removeItem("isPro");
    },
    //------logIn
    loginSet(state, payload) {
      state.myBirthday = payload.Birth;
      state.myBirthTime = payload.BirthTime;
      state.myLocation = payload.BirthPlace;
      state.myEmail = payload.Email;
      state.myName = payload.Name;
      state.myPhone = payload.Phone;
      state.myGender = payload.Sex;

      state.isPro = payload.IsAdv;
      state.mySigns = payload.signs;
      state.myPhoto = payload.Photo;
      state.myLatitude = payload.JsonData.lat;
      state.myLongitude = payload.JsonData.lng;
      localStorage.setItem("isPro", payload.IsAdv);
    },

    //------set Account Info

    setAccountInfo(state, payload) {
      state.myBirthday = payload.Birth;
      state.myBirthTime = payload.BirthTime;
      state.myLocation = payload.BirthPlace;
      state.myEmail = payload.Email;
      state.myName = payload.Name;
      state.myPhone = payload.Phone;
      state.myGender = payload.Sex;
      state.isPro = payload.IsAdv;
      //state.mySigns = payload.signs;

      state.myLatitude = payload.JsonData.lat;
      state.myLongitude = payload.JsonData.lng;
    },

    //------set Pro Info
    //---from API
    // Address: "Taipei"
    // Email: "a1@gmail.com"
    // Experience: "propropro"
    // ID: null
    // Name: "ccc"
    // Phone: "0983192933"
    // Photo: "./imgs/Adv/Default.jpg"
    // Select: "星盤"
    // Sex: 2
    setProInfo(state, payload) {
      state.myAddress = payload.Address;
      state.myEmail = payload.Email;
      state.myExperience = payload.Experience;
      state.myProName = payload.Name;
      state.myProPhone = payload.Phone;
      state.myPhoto = payload.Photo;
      state.mySkill = payload.Select;
      state.myGender = payload.Sex;
    },

    //------ actions API 抓取後放入

    // rID: "0000000002",
    // //ProID: "ProID001",
    // //MemID: "MemID001",
    // ProName: "唐綺陽",
    // ProLesson: "塔羅課2",
    // //日期 v
    // ProTime: "2021-10-23",
    // UserSelect: "不明",
    // ProCost: 1600,
    // LesCount: 3,
    //不知道是啥 v
    // ReserveAmount: 1,

    // //資料表沒有
    // purchaseDate: "2022-09-02",
    // isOver: false,

    setMyOrders(state, payload) {
      if (payload != null) {
        payload.forEach((order) => {
          if (
            payload.indexOf(order) != 0 &&
            payload.length > state.myOrders.length
          ) {
            state.myOrders.push({});
          }
          state.myOrders[payload.indexOf(order)].rID = order.RID;
          state.myOrders[payload.indexOf(order)].ProID = order.PID;
          state.myOrders[payload.indexOf(order)].MemID = order.MID;
          state.myOrders[payload.indexOf(order)].ProName = order.PName;
          state.myOrders[payload.indexOf(order)].ProLesson = order.Lesson;
          state.myOrders[payload.indexOf(order)].ProTime = "2022-10-10"; //假日期
          state.myOrders[payload.indexOf(order)].UserSelect = order.Select;
          state.myOrders[payload.indexOf(order)].ProCost = order.ProCost;
          state.myOrders[payload.indexOf(order)].Memo = order.Memo;
          state.myOrders[payload.indexOf(order)].LesCount =
            order.Total / order.ProCost;
          // state.myOrders.ReserveAmount
          state.myOrders[payload.indexOf(order)].purchaseDate = "2022-09-09";
          state.myOrders[payload.indexOf(order)].isOver = false; //統一未結案
        });
      }
    },

    //---API---
    // Cost: 500
    // Email: ""
    // Lesson: "課程"
    // MID: 3
    // Memo: "備註"
    // Name: "hsiang"
    // PEmail: ""
    // PID: 4
    // PName: "ccc"
    // RID: 10
    // Select: "方式"
    // Time: "時間"
    // Total: 500000

    setProOrders(state, payload) {
      if (payload != null) {
        payload.forEach((order) => {
          if (
            payload.indexOf(order) != 0 &&
            payload.length > state.proOrders.length
          ) {
            state.proOrders.push({});
          }
          state.proOrders[payload.indexOf(order)].rID = order.RID;
          state.proOrders[payload.indexOf(order)].ProID = order.PID;
          state.proOrders[payload.indexOf(order)].MemID = order.MID;
          state.proOrders[payload.indexOf(order)].MemberName = order.Name;
          state.proOrders[payload.indexOf(order)].ProName = order.PName;
          state.proOrders[payload.indexOf(order)].ProLesson = order.Lesson;
          state.proOrders[payload.indexOf(order)].ProTime = "2022-10-10"; //假日期
          state.proOrders[payload.indexOf(order)].UserSelect = order.Select;
          state.proOrders[payload.indexOf(order)].ProCost = order.ProCost;
          state.proOrders[payload.indexOf(order)].LesCount =
            order.Total / order.ProCost;
          // state.proOrders.ReserveAmount
          state.proOrders[payload.indexOf(order)].purchaseDate = "2022-09-09";
          state.proOrders[payload.indexOf(order)].Memo = order.Memo;
          state.proOrders[payload.indexOf(order)].isOver = false; //統一未結案
        });
      }
    },

    //------
    deleteFriend(state, index) {
      state.friends.splice(index, 1);
    },
    setCurrentUTCtime(state) {
      // let date = this.$store.state.currentData.currentBirthday;
      // let time = this.$store.state.currentData.currentBirthTime;
      let date = state.currentData.currentBirthday;
      let time = state.currentData.currentBirthTime;
      let date1 = new Date(`${date}, ${time} GMT+8:00`);

      console.log("TIMETEST", date1.getUTCHours());
      console.log("DAYTEST", date1.getUTCDate());
      let newMonth;
      if (date1.getUTCMonth() + 1 < 10) {
        newMonth = "0" + (date1.getUTCMonth() + 1).toString();
      } else {
        newMonth = (date1.getUTCMonth() + 1).toString();
      }
      let newDate;
      if (date1.getUTCDate() < 10) {
        newDate = "0" + date1.getUTCDate().toString();
      } else {
        newDate = date1.getUTCDate().toString();
      }
      let newHours;
      if (date1.getUTCHours() < 10) {
        newHours = "0" + date1.getUTCHours().toString();
      } else {
        newHours = date1.getUTCHours().toString();
      }
      let newMinutes;
      if (date1.getUTCMinutes() < 10) {
        newMinutes = "0" + date1.getUTCMinutes().toString();
      } else {
        newMinutes = date1.getUTCMinutes().toString();
      }

      state.currentData.currentUTCBirthTime =
        newHours + ":" + newMinutes + ":00";
      state.currentData.currentUTCBirthday =
        date1.getUTCFullYear().toString() + "-" + newMonth + "-" + newDate;
    },

    setMyUTCtime(state) {
      // let date = this.$store.state.currentData.currentBirthday;
      // let time = this.$store.state.currentData.currentBirthTime;
      let date = state.myBirthday;
      let time = state.myBirthTime;
      let date1 = new Date(`${date}, ${time} GMT+8:00`);

      console.log("TIMETEST", date1.getUTCHours());
      console.log("DAYTEST", date1.getUTCDate());
      let newMonth;
      if (date1.getUTCMonth() + 1 < 10) {
        newMonth = "0" + (date1.getUTCMonth() + 1).toString();
      } else {
        newMonth = (date1.getUTCMonth() + 1).toString();
      }
      let newDate;
      if (date1.getUTCDate() < 10) {
        newDate = "0" + date1.getUTCDate().toString();
      } else {
        newDate = date1.getUTCDate().toString();
      }
      let newHours;
      if (date1.getUTCHours() < 10) {
        newHours = "0" + date1.getUTCHours().toString();
      } else {
        newHours = date1.getUTCHours().toString();
      }
      let newMinutes;
      if (date1.getUTCMinutes() < 10) {
        newMinutes = "0" + date1.getUTCMinutes().toString();
      } else {
        newMinutes = date1.getUTCMinutes().toString();
      }

      state.myUTCBirthTime = newHours + ":" + newMinutes + ":00";
      state.myUTCBirthday =
        date1.getUTCFullYear().toString() + "-" + newMonth + "-" + newDate;
    },
    setCurrentData(state, payload) {
      state.currentData.currentName = payload.name;
      state.currentData.currentBirthday = payload.birthday;
      state.currentData.currentBirthTime = payload.birthTime;
      state.currentData.currentLocation = payload.location;
    },
    testChangeFriendsName(state, payload) {
      state.friends[1].name = payload.name;
    },
    printJSON() {
      console.log(state.descJSON);
    },
    getDescBySign(state, payload) {
      console.log(payload.planet, payload.sign);
      for (let i = 0; i < state.descJSON.length; i++) {
        if (state.descJSON[i].Select1 === payload.planet) {
          if (state.descJSON[i].Select2 === payload.sign) {
            console.log("get json");
            console.log(state.descJSON[i].information);
            state.currentData.currentSignInfo[payload.index] =
              state.descJSON[i].information;
            return state.descJSON[i].information;
          }
        }
        if (state.descJSON[i].Select2 === payload.planet) {
          if (state.descJSON[i].Select1 === payload.sign) {
            console.log("get json");
            console.log(state.descJSON[i].information);
            state.currentData.currentSignInfo[payload.index] =
              state.descJSON[i].information;
            return state.descJSON[i].information;
          }
        }
        //console.log(state.descJSON[i].Select1, state.descJSON[i].Select2);
        //console.log("failed to get one!");
        state.currentData.currentSignInfo[payload.index] = "No Data";
      }
    },
    //取得宮位資訊
    getDescByHouse(state, payload) {
      console.log(payload.planet, payload.house);
      for (let i = 0; i < state.descJSON.length; i++) {
        if (state.descJSON[i].Select1 === payload.planet) {
          if (state.descJSON[i].Select2 === payload.house) {
            console.log("get json");
            console.log(state.descJSON[i].information);
            state.currentData.currentHouseInfo[payload.index] =
              state.descJSON[i].information;
            return state.descJSON[i].information;
          }
        }
        if (state.descJSON[i].Select2 === payload.planet) {
          if (state.descJSON[i].Select1 === payload.house) {
            console.log("get json");
            console.log(state.descJSON[i].information);
            state.currentData.currentHouseInfo[payload.index] =
              state.descJSON[i].information;
            return state.descJSON[i].information;
          }
        }
        //console.log(state.descJSON[i].Select1, state.descJSON[i].Select2);
        //console.log("failed to get one!");
        state.currentData.currentHouseInfo[payload.index] = "No Data";
      }
    },
    // signNumberToName(signNumber) {
    //   if (signNumber == 1) {
    //     return "牡羊座";
    //   } else if (signNumber == 2) {
    //     return "金牛座";
    //   } else if (signNumber == 3) {
    //     return "雙子座";
    //   } else if (signNumber == 4) {
    //     return "巨蟹座";
    //   } else if (signNumber == 5) {
    //     return "獅子座";
    //   } else if (signNumber == 6) {
    //     return "處女座";
    //   } else if (signNumber == 7) {
    //     return "天秤座";
    //   } else if (signNumber == 8) {
    //     return "天蠍座";
    //   } else if (signNumber == 9) {
    //     return "射手座";
    //   } else if (signNumber == 10) {
    //     return "摩羯座";
    //   } else if (signNumber == 11) {
    //     return "水瓶座";
    //   } else if (signNumber == 12) {
    //     return "雙魚座";
    //   }
    // },
    setHouses(state, astroDataOriginal) {
      //計算宮位差
      let ascSign = astroDataOriginal.houses[0].sign;
      let ascHouse = astroDataOriginal.houses[ascSign - 1].sign;
      //console.log(ascSign);

      let interval = ascHouse - 1;

      for (let i = 0; i < state.currentData.currentSigns.length; i++) {
        let house =
          astroDataOriginal.houses[state.currentData.currentSigns[i] - 1].sign +
          interval;
        if (house % 12 === 0) {
          house = 12;
        } else {
          house = house % 12;
        }
        state.currentData.currentHouses[i] = house;
      }
    },
    assignHouseName(state) {
      for (let i = 0; i < state.currentData.currentHouses.length; i++) {
        let signNumber = state.currentData.currentHouses[i];
        if (signNumber == 1) {
          state.currentData.currentHousesNames[i] = "第一宮";
        } else if (signNumber == 2) {
          state.currentData.currentHousesNames[i] = "第二宮";
        } else if (signNumber == 3) {
          state.currentData.currentHousesNames[i] = "第三宮";
        } else if (signNumber == 4) {
          state.currentData.currentHousesNames[i] = "第四宮";
        } else if (signNumber == 5) {
          state.currentData.currentHousesNames[i] = "第五宮";
        } else if (signNumber == 6) {
          state.currentData.currentHousesNames[i] = "第六宮";
        } else if (signNumber == 7) {
          state.currentData.currentHousesNames[i] = "第七宮";
        } else if (signNumber == 8) {
          state.currentData.currentHousesNames[i] = "第八宮";
        } else if (signNumber == 9) {
          state.currentData.currentHousesNames[i] = "第九宮";
        } else if (signNumber == 10) {
          state.currentData.currentHousesNames[i] = "第十宮";
        } else if (signNumber == 11) {
          state.currentData.currentHousesNames[i] = "第十一宮";
        } else if (signNumber == 12) {
          state.currentData.currentHousesNames[i] = "第十二宮";
        }
      }
    },
    //set to currentData.currentSigns in vuex
    setSigns(state, astroDataOriginal) {
      //console.log("測試", state.currentData.currentSigns);
      state.currentData.currentSigns = [
        astroDataOriginal.astros.sun.sign,
        astroDataOriginal.axes.asc.sign,
        astroDataOriginal.astros.moon.sign,
        astroDataOriginal.astros.mars.sign,
        astroDataOriginal.astros.mercury.sign,
        astroDataOriginal.astros.venus.sign,
        astroDataOriginal.astros.jupiter.sign,
        astroDataOriginal.astros.saturn.sign,
        astroDataOriginal.astros.uranus.sign,
        astroDataOriginal.astros.neptune.sign,
        astroDataOriginal.astros.pluto.sign,
      ];
    },

    //set to currentData.currentSigns in vuex
    setMySigns(state, astroDataOriginal) {
      //console.log("測試", state.currentData.currentSigns);
      state.mySigns = [
        astroDataOriginal.astros.sun.sign,
        astroDataOriginal.axes.asc.sign,
        astroDataOriginal.astros.moon.sign,
        astroDataOriginal.astros.mars.sign,
        astroDataOriginal.astros.mercury.sign,
        astroDataOriginal.astros.venus.sign,
        astroDataOriginal.astros.jupiter.sign,
        astroDataOriginal.astros.saturn.sign,
        astroDataOriginal.astros.uranus.sign,
        astroDataOriginal.astros.neptune.sign,
        astroDataOriginal.astros.pluto.sign,
      ];
    },

    //set data to currentData.currentSignsNames in vuex
    assignSignName(state) {
      for (let i = 0; i < state.currentData.currentSigns.length; i++) {
        // state.currentData.currentSignsNames[i] = this.signNumberToName(state.currentData.currentSigns[i]);
        let signNumber = state.currentData.currentSigns[i];
        if (signNumber == 1) {
          state.currentData.currentSignsNames[i] = "牡羊座";
        } else if (signNumber == 2) {
          state.currentData.currentSignsNames[i] = "金牛座";
        } else if (signNumber == 3) {
          state.currentData.currentSignsNames[i] = "雙子座";
        } else if (signNumber == 4) {
          state.currentData.currentSignsNames[i] = "巨蟹座";
        } else if (signNumber == 5) {
          state.currentData.currentSignsNames[i] = "獅子座";
        } else if (signNumber == 6) {
          state.currentData.currentSignsNames[i] = "處女座";
        } else if (signNumber == 7) {
          state.currentData.currentSignsNames[i] = "天秤座";
        } else if (signNumber == 8) {
          state.currentData.currentSignsNames[i] = "天蠍座";
        } else if (signNumber == 9) {
          state.currentData.currentSignsNames[i] = "射手座";
        } else if (signNumber == 10) {
          state.currentData.currentSignsNames[i] = "摩羯座";
        } else if (signNumber == 11) {
          state.currentData.currentSignsNames[i] = "水瓶座";
        } else if (signNumber == 12) {
          state.currentData.currentSignsNames[i] = "雙魚座";
        }
      }
    },

    setDegrees(state, astroDataOriginal) {
      //console.log("測試", state.currentData.currentSigns);
      state.currentData.currentDegrees = [
        astroDataOriginal.astros.sun.position.degrees,
        astroDataOriginal.axes.asc.position.degrees,
        astroDataOriginal.astros.moon.position.degrees,
        astroDataOriginal.astros.mars.position.degrees,
        astroDataOriginal.astros.mercury.position.degrees,
        astroDataOriginal.astros.venus.position.degrees,
        astroDataOriginal.astros.jupiter.position.degrees,
        astroDataOriginal.astros.saturn.position.degrees,
        astroDataOriginal.astros.uranus.position.degrees,
        astroDataOriginal.astros.neptune.position.degrees,
        astroDataOriginal.astros.pluto.position.degrees,
      ];
    },

    //set data to currentData.currentChartData in state(vuex)
    setChartData(state, astroDataOriginal) {
      //   console.log(state.currentData.currentChartData.planets.Chiron[0]);
      //   console.log(state.currentData.currentChartDataOrigin);
      //--Chiron
      state.currentData.currentChartData.planets.Chiron[0] =
        astroDataOriginal.astros.chiron.position.longitude;

      console.log(
        "chiron",
        state.currentData.currentChartData.planets.Chiron[0]
      );
      //--Lilith
      state.currentData.currentChartData.planets.Lilith[0] =
        astroDataOriginal.astros.lilith.position.longitude;

      console.log(
        "Lilith",
        state.currentData.currentChartData.planets.Lilith[0]
      );
      //--Pluto
      state.currentData.currentChartData.planets.Pluto[0] =
        astroDataOriginal.astros.pluto.position.longitude;

      console.log("Pluto", state.currentData.currentChartData.planets.Pluto[0]);
      //--Neptune
      state.currentData.currentChartData.planets.Neptune = [
        astroDataOriginal.astros.neptune.position.longitude,
      ];

      console.log(
        "Neptune",
        state.currentData.currentChartData.planets.Neptune[0]
      );
      //--Uranus
      state.currentData.currentChartData.planets.Uranus[0] =
        astroDataOriginal.astros.uranus.position.longitude;

      console.log(
        "Uranus",
        state.currentData.currentChartData.planets.Uranus[0]
      );
      //--Saturn
      state.currentData.currentChartData.planets.Saturn = [
        astroDataOriginal.astros.saturn.position.longitude,
      ];

      console.log(
        "Saturn",
        state.currentData.currentChartData.planets.Saturn[0]
      );
      //--Jupiter
      state.currentData.currentChartData.planets.Jupiter = [
        astroDataOriginal.astros.jupiter.position.longitude,
      ];

      console.log(
        "Jupiter",
        state.currentData.currentChartData.planets.Jupiter[0]
      );
      //--Mars
      state.currentData.currentChartData.planets.Mars = [
        astroDataOriginal.astros.mars.position.longitude,
      ];

      console.log("Mars", state.currentData.currentChartData.planets.Mars[0]);
      //--Moon
      state.currentData.currentChartData.planets.Moon = [
        astroDataOriginal.astros.moon.position.longitude,
      ];

      console.log("Moon", state.currentData.currentChartData.planets.Moon[0]);
      //--Sun
      state.currentData.currentChartData.planets.Sun = [
        astroDataOriginal.astros.sun.position.longitude,
      ];

      console.log("Sun", state.currentData.currentChartData.planets.Sun[0]);
      //--Mercury
      state.currentData.currentChartData.planets.Mercury = [
        astroDataOriginal.astros.mercury.position.longitude,
      ];

      console.log(
        "Mercury",
        state.currentData.currentChartData.planets.Mercury[0]
      );
      //--Venus
      state.currentData.currentChartData.planets.Venus = [
        astroDataOriginal.astros.venus.position.longitude,
      ];

      console.log("Venus", state.currentData.currentChartData.planets.Venus[0]);
      //   //--NNode api 暫無此資料
      //   state.currentData.currentChartData.planets.NNode = [
      //     astroDataOriginal.astros.saturn.position.longitude,
      //   ];

      //   console.log("Saturn", state.currentData.currentChartData.planets.Saturn[0]);

      //state.currentData.currentChartDataOrigin.astros.chiron.position.longitude;

      for (let i = 0; i < 12; i++) {
        state.currentData.currentChartData.cusps[i] =
          astroDataOriginal.houses[i].position.longitude;
        //houses[0].position.longitude
      }
    },

    //new

    //productOrder 購物填選單
    addStoreLesson(state) {
      state.pushLesson.lesson.push(state.psLesson[0].lesson);
      state.pushLesson.psTime = state.psLesson[0].psTime;
      state.pushLesson.pscontent = state.psLesson[0];
      state.pushLesson.pstip = state.psLesson.pstip;
    },
    //productshop購物車
    addStorespTime(state) {
      // state.myCart.addpsTime += 30;
      // state.myCart.addCost += state.psCost[0];
      state.myCart.psCount += 1;
    },
    addStorespTime1(state) {
      // state.myCart.addpsTime += 60;
      // state.myCart.addCost += state.psCost[1];
      state.myCart.psCount += 1;
    },
    addStorespTime2(state) {
      // state.myCart.addpsTime += 90;
      // state.myCart.addCost += state.psCost[2];
      state.myCart.psCount += 1;
    },
    addStorespTime3(state) {
      // state.myCart.addpsTime += 120;
      // state.myCart.addCost += state.psCost[3];
      state.myCart.psCount += 1;
    },
    addStoreonline(state) {
      state.myCart.online = "線上";
    },
    addStoreonlocal(state) {
      state.myCart.local = "實體";
    },
    removeStoreInfol(state) {
      // state.myCart.addpsTime = 0;
      // state.myCart.addCost = 0;
      state.myCart.psCount = 0;
      state.myCart.local = "";
      state.myCart.online = "";
    },
  },
  actions: {
    // increaseCounter() {
    //   axios(
    //     "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
    //   ).then((response) => {
    //     console.log("response:", response);
    //   });
    // },

    getMyChartData({commit, state}) {
      //到時候更改API 提供四個欄位資料
      // axios
      //   .get("https://randomuser.me/api/", {
      //     //URL参數放在params屬性裏面
      //     params: {
      //       gender: "female",
      //       nat: "us",
      //     },
      //   })
      //   .then((response) => console.log(response))
      //   .catch((error) => console.log(error));
      //this.myAPIsrc = api;
      axios
        .get(
          //台灣時間記得 -8 : 經緯度小數點 5 位
          state.currentAPIsrc
        )
        .then((response) => {
          console.log("Cdata:", response);
          state.myChartDataOrigin = response.data.data;
          console.log("myChartDataOrigin:", state.myChartDataOrigin);
          commit("setChartData", state.myChartDataOrigin);
          //console.log("myChartData_Axios", state.myChartData);
          //分配取得各行星星座
          commit("setSigns", state.myChartDataOrigin);
          //console.log("mySigns", this.mySigns);
          //在 vue裡的 index.js 呼叫 state 會顯示 undefined
          commit("assignSignName");
          //console.log("mySignsNames", this.mySignsNames);
          //有Sign 才有 House
          commit("setHouses", state.myChartDataOrigin);
          //vvvv not gonna show
          //console.log("myHouses", this.myHouses);
          commit("assignHouseName");
          //set degrees
          commit("setDegrees", state.myChartDataOrigin);
        });
    },

    getChartData({commit, state}, payload) {
      axios
        .post("https://astria.sutsanyuan.com/Astria_api/GuestAstroData", {
          Date: payload.birthday,
          Time: payload.birthTime,
          Address: payload.location,
        })
        .then(function (response) {
          console.log("get astro data by post", response);
          state.currentData.currentChartDataOrigin = response.data.JObj.data;
          console.log(
            "myChartDataOrigin:",
            state.currentData.currentChartDataOrigin
          );
          commit("setChartData", state.currentData.currentChartDataOrigin);
          //console.log("myChartData_Axios", state.myChartData);
          //分配取得各行星星座
          commit("setSigns", state.currentData.currentChartDataOrigin);
          //console.log("mySigns", this.mySigns);
          //在 vue裡的 index.js 呼叫 state 會顯示 undefined
          commit("assignSignName");
          //console.log("mySignsNames", this.mySignsNames);
          //有Sign 才有 House
          commit("setHouses", state.currentData.currentChartDataOrigin);
          //vvvv not gonna show
          //console.log("myHouses", this.myHouses);
          commit("assignHouseName");
          //set degrees
          commit("setDegrees", state.currentData.currentChartDataOrigin);
        })
        .catch(function (error) {
          console.log(error);
        });

      //到時候更改API 提供四個欄位資料
      // axios
      //   .get("https://randomuser.me/api/", {
      //     //URL参數放在params屬性裏面
      //     params: {
      //       gender: "female",
      //       nat: "us",
      //     },
      //   })
      //   .then((response) => console.log(response))
      //   .catch((error) => console.log(error));
      //this.myAPIsrc = api;
      //----GET----
      // axios
      //   .get(
      //     //台灣時間記得 -8 : 經緯度小數點 5 位
      //     state.currentAPIsrc,
      //     {
      //       params: {
      //         Date: state.currentData.currentBirthday,
      //         Time: state.currentData.currentBirthTime,
      //         Address: state.currentData.currentLocation,
      //         //Location
      //       },
      //     }
      //   )
      //   .then((response) => {
      //     console.log("Cdata:", response);
      //     state.currentData.currentChartDataOrigin = response.data.data;
      //     console.log(
      //       "currentChartDataOrigin:",
      //       state.currentData.currentChartDataOrigin
      //     );
      //     commit("setChartData", state.currentData.currentChartDataOrigin);
      //     //console.log("myChartData_Axios", state.myChartData);
      //     //分配取得各行星星座
      //     commit("setSigns", state.currentData.currentChartDataOrigin);
      //     //console.log("mySigns", this.mySigns);
      //     //在 vue裡的 index.js 呼叫 state 會顯示 undefined
      //     commit("assignSignName");
      //     //console.log("mySignsNames", this.mySignsNames);
      //     //有Sign 才有 House
      //     commit("setHouses", state.currentData.currentChartDataOrigin);
      //     //vvvv not gonna show
      //     //console.log("myHouses", this.myHouses);
      //     commit("assignHouseName");
      //     //set degrees
      //     commit("setDegrees", state.currentData.currentChartDataOrigin);
      //   });
    },

    //---getMySign
    getChartDataAndSetMySign({commit, state}, payload) {
      axios
        .post("https://astria.sutsanyuan.com/Astria_api/GuestAstroData", {
          Date: payload.birthday,
          Time: payload.birthTime,
          Address: payload.location,
        })
        .then(function (response) {
          console.log("get astro data by post", response);
          state.myChartDataOrigin = response.data.JObj.data;

          console.log("myChartDataOrigin:", state.myChartDataOrigin);
          //commit("setChartData", state.currentData.currentChartDataOrigin);
          //console.log("myChartData_Axios", state.myChartData);
          //分配取得各行星星座
          commit("setMySigns", state.myChartDataOrigin);
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    //取得登入資料
    getLoginInfo({commit, state}, email) {
      axios
        .post("https://astria.sutsanyuan.com/Astria_api/Login", {
          Email: email,
        })
        .then((response) => {
          console.log(
            "Checked if logged in and get Customer data by post:",
            response.data.Req
          );
          commit("loginSet", response.data.Req);
        });
    },

    getAccountInfo({commit, state}, email) {
      axios
        .post("https://astria.sutsanyuan.com/Astria_api/ShowMemInfo", {
          Email: email,
        })
        .then((response) => {
          console.log("Customer data get by post:", response.data.Req);
          commit("setAccountInfo", response.data.Req);
        });
    },

    getProInfo({commit, state}, email) {
      axios
        .post("https://astria.sutsanyuan.com/Astria_api/ShowProInfo", {
          Email: email,
        })
        .then((response) => {
          console.log("Pro Info", response.data.Req);
          commit("setProInfo", response.data.Req);
        });
    },

    getReserationInfo({commit, state}, email) {
      axios
        .post("https://astria.sutsanyuan.com/Astria_api/ShowReserveInfo", {
          Email: email,
        })
        .then((response) => {
          console.log("Reservation data get by post:", response);
          commit("setMyOrders", response.data.Req);
          //console.log(state.myOrders[0].ProName);
        });
    },

    getReserationProInfo({commit, state}, email) {
      axios
        .post("https://astria.sutsanyuan.com/Astria_api/ShowProReserveInfo", {
          Email: email,
        })
        .then((response) => {
          console.log("Pro Reservation data get by post:", response);
          commit("setProOrders", response.data.Req);
          //console.log(state.myOrders[0].ProName);
        });
    },

    getProList({commit}) {
      axios
        .get("https://astria.sutsanyuan.com/Astria_api/ShowProCard")
        .then((response) => {
          console.log("get Pro List", response.data);
          commit("setAllAstrologists", response.data);
        });
    },

    getProListBySelect({state, commit}) {
      state.psSkill.forEach((cat) => {
        // console.log("print cat", cat);
        let catUrl = `?Select=${cat}`;
        axios
          .get("https://astria.sutsanyuan.com/Astria_api/ShowProCard" + catUrl)
          .then((response) => {
            console.log("get Pro List by " + cat, response.data);
            if (response.data != null) {
              let data = response.data;
              let index = state.psSkill.indexOf(cat);
              console.log(cat, index);

              commit("setAstrologistsByCat", {data, index});
            }
          });
      });
    },

    getFriendsCharts({state, commit}, email) {
      axios
        .post("https://astria.sutsanyuan.com/Astria_api/ShowFriendData", {
          Email: email,
        })
        .then((response) => {
          console.log("friend", response.data.Req);
          commit("setFriendsList", response.data.Req);
        });
    },

    addFriend({state, commit}, payload) {
      axios
        .post("https://astria.sutsanyuan.com/Astria_api/FriendAstroAdd", {
          Email: payload.email,
          Name: payload.name,
          Birth: payload.birthday,
          BirthTime: payload.birthTime,
          BirthPlace: payload.birthPlace,
        })
        .then((response) => {
          console.log("status", response.data.status);
          console.log("msg", response.data.Msg);
        });
    },

    //視ＡＰＩ狀況 新增
    editFriend({state, commit}, payload) {
      axios
        .post("https://astria.sutsanyuan.com/Astria_api/FriendAstroAdd", {
          Email: payload.email,
          Name: payload.name,
          Birth: payload.birthday,
          BirthTime: payload.birthTime,
          BirthPlace: payload.birthPlace,
          FID: payload.FID,
        })
        .then((response) => {
          console.log("status", response.data.status);
          console.log("msg", response.data.Msg);
        });
    },

    deleteFriend({state, commit}, payload) {
      axios
        .delete("https://astria.sutsanyuan.com/Astria_api/Delfrienddata", {
          data: {Email: payload.email, FID: payload.FID},
        })
        .then((response) => {
          console.log("delete status", response.data.status);
          console.log(" delete msg", response.data.Msg);
        });
    },
  },
  modules: {},
});
