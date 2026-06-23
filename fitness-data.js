// ── 健身追踪系统 · 数据中心 ──
// 这个文件是数据中枢：页面读取它，WorkBuddy 也可以直接编辑它。
// 格式：fitnessData.logs["YYYY-MM-DD"] = { foods: [...], exercises: [...] }
// 同时兼容 localStorage：页面先从 localStorage 读，没有则用此文件的默认数据

window.FITNESS_DATA = {
  // ── 身体参数 ──
  profile: {
    name: "9010598",
    age: 33,
    height: 159,
    weight: 49.8,
    bodyFat: 23.5,
    muscle: 21,
    bmr: 1175,
    tdee: 1550,
    calorieTarget: [1200, 1300],
    proteinTarget: 95,
    measurements: {
      date: "2026-06-19",
      arm: 29,
      waist: 66,
      hip: 91,
      thigh: 51
    }
  },

  // ── 周训练模板（按星期几 0=周日,1=周一,...6=周六） ──
  weekTemplate: [
    { // 0 周日
      dayName: "周日", type: "pilates", label: "普拉提核心", color: "#8b5cf6",
      coach: true,
      exercises: ["核心强化 + 脊柱灵活 + 体态调整（教练带）"]
    },
    { // 1 周一
      dayName: "周一", type: "pull", label: "Pull · 背+二头", color: "#3b82f6",
      coach: true,
      exercises: [
        "直臂下拉",
        "弹力带引体 / 高位下拉",
        "坐姿划船 / 哑铃划船",
        "二头弯举 / 锤式弯举"
      ],
      note: "🔥 教练带 · 目标：背阔肌 / 斜方肌 / 菱形肌 / 二头"
    },
    { // 2 周二
      dayName: "周二", type: "rest", label: "休息", color: "#d1d5db",
      coach: false,
      exercises: ["可选：30min 低强度有氧（心率120-130）"],
      note: "快走 / 椭圆机 / 爬坡走，别太累"
    },
    { // 3 周三
      dayName: "周三", type: "shoulder", label: "肩+臂", color: "#10b981",
      coach: false,
      exercises: [
        "前平举 3×12-15",
        "侧平举 3×12-15",
        "面拉 / 俯身飞鸟 3×12-15",
        "绳索下压 / 臂屈伸 3×12-15",
        "集中弯举 / 锤式弯举 3×12-15",
        "弹力带肩胛激活 2×15",
        "泡沫轴放松 3-5min",
        "有氧 25-35min"
      ]
    },
    { // 4 周四
      dayName: "周四", type: "rest", label: "休息", color: "#d1d5db",
      coach: false,
      exercises: ["可选：20-25min 轻量有氧"],
      note: "保存体力给周五的腿日"
    },
    { // 5 周五
      dayName: "周五", type: "push", label: "Push+Lower · 腿+胸", color: "#d97706",
      coach: true,
      exercises: [
        "深蹲 / 腿举",
        "罗马尼亚硬拉 / 腿弯举",
        "臀推 / 髋外展",
        "卧推 / 哑铃胸推"
      ],
      note: "🔥 教练带 · 目标：股四头肌 / 腘绳肌 / 臀大肌 / 胸大肌"
    },
    { // 6 周六
      dayName: "周六", type: "rest", label: "完全休息", color: "#d1d5db",
      coach: false,
      exercises: ["充分恢复，不安排任何训练"],
      note: "可以散步、拉伸"
    }
  ],

  // ── 特殊调整（按日期） ──
  specialAdjustments: {
    "2026-06-10": {
      note: "⚠️ 周一(6/8)已大量练前束+中束，本轮跳过前平举和侧平举，后束面拉加到4×12-15",
      skipExercises: ["前平举 3×12-15", "侧平举 3×12-15"],
      modifyExercises: { "面拉 / 俯身飞鸟 3×12-15": "面拉 / 俯身飞鸟 4×12-15" }
    }
  },

  // ── 饮食 & 运动日志 ──
  logs: {
    "2026-06-08": {
      foods: [
        { mealType: "breakfast", desc: "恰巴塔 + 鸡蛋白2个", kcal: 304, prot: 16, fat: 12 },
        { mealType: "lunch", desc: "鸡胸 + 卤牛肉 + 南瓜 + 蓝莓 + 生菜", kcal: 570, prot: 76, fat: 14 },
        { mealType: "dinner", desc: "糙米饭小半拳 + 炒菜 + 蒸茄子 + 带鱼小份 + 肉丝香干小份", kcal: 430, prot: 27, fat: 18 }
      ],
      exercises: [
        { type: "strength", desc: "私教课全身适应（直臂下拉+波比跳/弹力带引体/4kg胸推/前举/飞鸟/平板支撑）", duration: 60 }
      ]
    },
    "2026-06-09": {
      foods: [
        { mealType: "breakfast", desc: "鸡胸肉汉堡 + 拿铁", kcal: 457, prot: 38, fat: 20 },
        { mealType: "lunch", desc: "兰州拉面(1/5面) + 牛肉7-8片 + 煎蛋", kcal: 290, prot: 24, fat: 12 },
        { mealType: "dinner", desc: "米饭半拳 + 清炒蒲瓜 + 排骨2颗 + 西瓜2片 + 菜汤 + 青蟹1腿1脚", kcal: 375, prot: 24, fat: 13 }
      ],
      exercises: []
    },
    "2026-06-10": {
      foods: [
        { mealType: "breakfast", desc: "小米杂粮包 + 虾仁猪肉烧麦 + 半盒蓝莓 + 鸡蛋白 + 半根水果黄瓜 + 拿铁(300ml全脂)", kcal: 442, prot: 22, fat: 15.5 },
        { mealType: "lunch", desc: "荞麦面虾仁鸡蛋蔬菜(半份) + 小牛乳包", kcal: 243, prot: 15, fat: 6.5 },
        { mealType: "snack", desc: "苹果蕉1根", kcal: 105, prot: 1, fat: 0 },
        { mealType: "dinner", desc: "三文鱼1片+北极贝2片+鳗鱼寿司1贯+大福+熟虾寿司+带子寿司+糖扬鸡块+口蘑虾滑+鸡翅烧鸟+刺身饭3口", kcal: 455, prot: 35, fat: 15 }
      ],
      exercises: [
        { type: "strength", desc: "二头臂屈4kg×15×4 + 三头臂屈伸4kg×15×4 + 龙门架屈臂后弯5kg×15×4", duration: 40 },
        { type: "cardio", desc: "坡度12速度4.7有氧25min", duration: 25 }
      ]
    },
    "2026-06-11": {
      foods: [
        { mealType: "breakfast", desc: "鸡蛋白 + 虾仁2个 + 黑松露饺子 + 小番茄一把 + 紫薯面包欧包", kcal: 380, prot: 21, fat: 9 },
        { mealType: "lunch", desc: "照烧鸡肉饭定食(肉完食+饭1/4) + 沙拉 + 小菜", kcal: 430, prot: 25, fat: 13 },
        { mealType: "dinner", desc: "米饭一拳 + 红烧带鱼2-3片 + 豆芽炒牛肉5口 + 蒸南瓜3片 + 酱油豆腐1/5盒 + 鱿鱼毛豆", kcal: 540, prot: 36.5, fat: 16.5 }
      ],
      exercises: []
    },
    "2026-06-12": {
      note: "🩸",
      weight: 49.8,
      foods: [
        { mealType: "breakfast", desc: "鸡蛋白2个 + 虾仁黑松露水饺1个 + 肉松面包(带酱)半个 + 大杯冰拿铁", kcal: 404, prot: 23, fat: 15.5 },
        { mealType: "lunch", desc: "沙拉100g + 烤肉10片(~140g,猪颈肉/五花肉/梅花肉) + 金枪鱼拌饭半拳 + 烤口蘑1颗", kcal: 495, prot: 31, fat: 24 },
        { mealType: "dinner", desc: "桃子1颗 + 糙米饭半拳 + 椒盐虾3只 + 土豆丝炒莴笋 + 青椒炒肉丝 + 白菜汤 + 西瓜3片", kcal: 455, prot: 19.5, fat: 11.5 }
      ],
      exercises: []
    },
    "2026-06-13": {
      note: "🩸",
      weight: 49.6,
      foods: [
        { mealType: "breakfast", desc: "小粗粮馒头 + 鸡腿肉排(~200g) + 牛油果2小片 + 西兰花4片 + 鸡蛋白1个", kcal: 387, prot: 42.5, fat: 14.5 },
        { mealType: "lunch", desc: "虾爆鳝面(虾10只+黄鳝+面+南瓜+菌菇)", kcal: 390, prot: 31, fat: 9 },
        { mealType: "dinner", desc: "烤乳鸽半只 + 鲳鱼半条 + 红烧萝卜 + 杨枝甘露 + 炒青番茄 + 哈密瓜3块 + 大饺子 + 杨梅20颗", kcal: 675, prot: 35, fat: 26.5 }
      ],
      exercises: [
        { type: "strength", desc: "胸推 6kg×12×4 + 龙门架手臂后弯(三头) 15kg×15×4 + 直臂后弯(三头) 4kg×15×4 + 直臂下拉(背) 18kg×10×3", duration: 50 }
      ]
    },
    "2026-06-14": {
      note: "🩸",
      foods: [
        { mealType: "breakfast", desc: "水煮蛋白1个 + 小碗米线(几口) + 拿铁 + 煎包1个 + 小笼包2个 + 西瓜2块", kcal: 487, prot: 25.5, fat: 20 },
        { mealType: "lunch", desc: "杨梅30颗 + 大蒸饺3个 + 炒面5口", kcal: 370, prot: 9, fat: 10 },
        { mealType: "dinner", desc: "白条鱼1小截 + 红烧肉半块 + 波龙蒸粉丝(龙虾1块+粉丝几口) + 小炒鸡 + 菠菜 + 水煮虾3条", kcal: 390, prot: 38, fat: 16 }
      ],
      exercises: []
    },
    "2026-06-15": {
      note: "🩸",
      weight: 50.2,
      foods: [
        { mealType: "breakfast", desc: "糙米面包20g + 煎蛋芝士火腿贝果半个 + 豆浆", kcal: 330, prot: 17.5, fat: 12.5 },
        { mealType: "lunch", desc: "牛肉拉面(少面多菜)", kcal: 350, prot: 18, fat: 6 },
        { mealType: "snack", desc: "大杨梅3颗 + 酸奶燕麦小碗", kcal: 195, prot: 6, fat: 5 },
        { mealType: "dinner", desc: "虾仁(4大只)咸蛋豆腐汤 + 米饭1小口 + 炒空心菜 + 红烧排骨4小块 + 大杨梅5颗 + 桃子1个", kcal: 510, prot: 35, fat: 23 }
      ],
      exercises: [
        { type: "strength", desc: "直臂下拉15kg×15×4 + 高位下拉宽把17kg×15×4 + 屈髋俯身哑铃划船反手6kg×20×4 + 超级组20lb圆盘划船上举×20×4+侧飞鸟2kg×20×4 + 曲腿俯卧撑15×4 + 平板支撑1min×4", duration: 60 }
      ]
    },
    "2026-06-16": {
      note: "🩸",
      weight: 49.8,
      foods: [
        { mealType: "breakfast", desc: "凉拌荞麦面(荞麦面+鸡胸肉大块+煎蛋+西兰花5+小番茄6)", kcal: 427, prot: 55, fat: 9 },
        { mealType: "lunch", desc: "蓝莓香蕉酸奶燕麦杯(香蕉1根+蓝莓10颗)", kcal: 280, prot: 9, fat: 4.5 },
        { mealType: "snack", desc: "肉松卷1小个", kcal: 120, prot: 4, fat: 6 },
        { mealType: "dinner", desc: "糙米饭1拳 + 红烧带鱼4-5片 + 炒蒲瓜 + 青椒炒肉丝", kcal: 480, prot: 29, fat: 18 }
      ],
      exercises: []
    },
    "2026-06-17": {
      note: "🩸",
      weight: 49.6,
      foods: [
        { mealType: "breakfast", desc: "小番茄100g + 杂粮小馒头 + 虾肉烧麦1个 + 鸡蛋白2个", kcal: 169, prot: 12, fat: 2 },
        { mealType: "lunch", desc: "水煮西兰花 + 鸡胸肉2大片(~180g) + 牛肉丸5个 + 贝贝南瓜大半个 + 土豆2块 + 黄油年糕1小个", kcal: 570, prot: 67, fat: 10.5 },
        { mealType: "snack", desc: "车厘子3颗 + 大杨梅2颗", kcal: 15, prot: 0, fat: 0 },
        { mealType: "dinner", desc: "青菜鸡蛋汤2碗 + 炒菜(油大,有肉) + 蛋白粉半勺", kcal: 320, prot: 28, fat: 18 }
      ],
      exercises: [
        { type: "strength", desc: "螃蟹步(弹力带侧走)4kg×30+2kg×30×2+1kg×30 + 硬拉15kg×15×4 + 龙门架单腿练臀20×4(双腿各4组) + 壶铃6kg×20×4 + 外展(腿外侧)40kg×20×4", duration: 60 },
        { type: "cardio", desc: "爬坡有氧40min", duration: 40 }
      ]
    },
    "2026-06-18": {
      foods: [
        { mealType: "breakfast", desc: "香蕉1根 + 鸡蛋白1个 + 咸面包半个 + 猪肉虾仁烧麦1小个(无米)", kcal: 257, prot: 12.5, fat: 6 },
        { mealType: "lunch", desc: "照烧鸡排定食(鸡排完食+饭半份) + 西瓜2小块 + 味增汤半碗", kcal: 500, prot: 32, fat: 14 },
        { mealType: "dinner", desc: "青菜鸡蛋汤 + 榨菜炒蒲瓜 + 小炸鱼2条 + 卤牛肉5片 + 榴莲1块", kcal: 490, prot: 32, fat: 24 },
        { mealType: "snack", desc: "蛋白粉半勺(休息日修复)", kcal: 60, prot: 15, fat: 1 }
      ],
      exercises: []
    },
    "2026-06-19": {
      weight: 49.65,
      foods: [
        { mealType: "breakfast", desc: "拿铁半杯 + 鸡蛋白1个 + 杂粮小馒头 + 肉虾烧麦1个(无米)", kcal: 212, prot: 14.5, fat: 6 }
      ],
      exercises: []
    },
    "2026-06-20": {
      weight: 49.6,
      foods: [
        { mealType: "breakfast", desc: "鸡蛋白1个 + 拿铁 + 肉粽1小个 + 蛋白粉1勺+牛奶200ml(空腹)", kcal: 587, prot: 53.5, fat: 22 },
        { mealType: "lunch", desc: "米饭1口 + 青菜汤 + 五花肉几片 + 葱油小黄鱼半条 + 牛肋条炖粉丝 + 西瓜2小片+哈密瓜2小片", kcal: 415, prot: 24, fat: 19 },
        { mealType: "dinner", desc: "荞麦面 + 水煮明虾7-8只 + 黄瓜半根 + 西兰花5朵 + 青菜豆腐鸡蛋汤", kcal: 287, prot: 23, fat: 5.5 }
      ],
      exercises: [
        { type: "strength", desc: "二头直臂弯举5kg×20×4 + 三头曲臂后仰5kg×15×4 + 杠铃片前举(肩)20lb×20×4", duration: 45 },
        { type: "cardio", desc: "爬坡15度40min(手表201kcal)", duration: 40 }
      ]
    },
    "2026-06-21": {
      foods: [
        { mealType: "breakfast", desc: "拿铁 + 煎蛋1个 + 煎鸡胸肉1片 + 吐司1片 + 黄瓜半根", kcal: 435, prot: 40, fat: 16 },
        { mealType: "lunch", desc: "牛肉6-7片 + 牛肉丸2颗 + 荞麦面1把", kcal: 340, prot: 33, fat: 8 },
        { mealType: "snack", desc: "面包1片", kcal: 120, prot: 4, fat: 4 },
        { mealType: "dinner", desc: "小龙虾 + 面年糕一点点 + 黄瓜 + 豆腐泡汤", kcal: 295, prot: 25, fat: 9 }
      ],
      exercises: []
    },
    "2026-06-22": {
      weight: 49.6,
      foods: [
        { mealType: "breakfast", desc: "南瓜吐司2片 + 牛油果奶昔(牛奶+牛油果半个,剩1/4)", kcal: 336, prot: 9, fat: 16 },
        { mealType: "snack", desc: "鸡蛋白2个 + 拿铁(200ml牛奶)", kcal: 184, prot: 14, fat: 7 },
        { mealType: "snack", desc: "蛋白粉1勺(练后)", kcal: 120, prot: 30, fat: 2 },
        { mealType: "lunch", desc: "红烧牛肉面(双倍牛肉+双倍菜+半份面)", kcal: 400, prot: 28, fat: 10 }
      ],
      exercises: [
        { type: "strength", desc: "自重屈腿俯卧撑15×4 + 卧推胸15kg×12×4 + 夹胸10kg×12×4 + X绳练背20×4 + 炮筒硬拉+上举6kg×20×4 + 重力球上抛+下蹲+俄转2kg×30×4 · 手表228kcal 心率114", duration: 60 }
      ]
    },
    "2026-06-23": {
      weight: 49.6,
      foods: [
        { mealType: "breakfast", desc: "大肉包1个 + 鸡蛋白1个", kcal: 237, prot: 12, fat: 8 }
      ],
      exercises: []
    }
  }
};
