const base_path = '../assets/equip/'
const CodeToEquip = {
  'shoulder': {
    'EnTe': {
      parent: 'shoulder',
      name: '自定义',
      speed: 0,
      tips: '自定义攻速',
      src: base_path + 'shoulder/EnTe.png'
    },
    'MoNv': {
      parent: 'shoulder',
      name: '自定义',
      speed: 0,
      tips: '自定义攻速',
      src: base_path + 'shoulder/MoNv.png'
    },
    'LanLing': {
      parent: 'shoulder',
      name: '自定义',
      speed: 0,
      tips: '自定义攻速',
      src: base_path + 'shoulder/LanLing.png'
    },
    'ShenQian': {
      parent: 'shoulder',
      name: '自定义',
      speed: 0,
      tips: '自定义攻速',
      src: base_path + 'shoulder/ShenQian.png'
    },
    'BiYou': {
      parent: 'shoulder',
      name: '庇佑痛苦的威严',
      speed: 0,
      tips: '无攻速',
      src: base_path + 'shoulder/BiYou.png'
    },
    'TianCai': {
      parent: 'shoulder',
      name: '天才技术大师的保护面罩',
      speed: 0,
      tips: '无攻速',
      src: base_path + 'shoulder/TianCai.png'
    },
    'LingQiao': {
      parent: 'shoulder',
      name: '灵巧的支配着',
      speed: 0,
      tips: '无攻速',
      src: base_path + 'shoulder/LingQiao.png'
    },
    'HuoJian': {
      parent: 'shoulder',
      name: '自由之翼护肩',
      speed: 30,
      tips: '默认吃满灼伤属性',
      src: base_path + 'shoulder/HuoJian.png'
    },
    'BingJian': {
      parent: 'shoulder',
      name: '绽放的自然生命',
      speed: 10,
      tips: '默认吃满冰抗属性',
      src: base_path + 'shoulder/BingJian.png'
    },
    'Others': {
      parent: 'shoulder',
      name: '自定义',
      speed: 0,
      tips: '默手动设置护肩攻速',
      src: base_path + 'shoulder/Others.png'
    },
  },
  'jacket': {
    'EnTe': {
      parent: 'jacket',
      name: '自定义',
      speed: 0,
      tips: '自定义攻速',
      src: base_path + 'jacket/EnTe.png'
    },
    'MoNv': {
      parent: 'jacket',
      name: '自定义',
      speed: 0,
      tips: '自定义攻速',
      src: base_path + 'jacket/MoNv.png'
    },
    'LanLing': {
      parent: 'jacket',
      name: '自定义',
      speed: 0,
      tips: '自定义攻速',
      src: base_path + 'jacket/LanLing.png'
    },
    'ShenQian': {
      parent: 'jacket',
      name: '自定义',
      speed: 0,
      tips: '自定义攻速',
      src: base_path + 'jacket/ShenQian.png'
    },
    'TanXian': {
      parent: 'jacket',
      name: '古老的探险家上衣',
      speed: 0,
      tips: '稳定0攻速',
      src: base_path + 'jacket/TanXian.png'
    },
    'GaoKeJi': {
      parent: 'jacket',
      name: '高科技上衣',
      speed: 0,
      tips: '稳定0攻速',
      src: base_path + 'jacket/GaoKeJi.png'
    },
    'DaoCaoRen': {
      parent: 'jacket',
      name: '暗影流光战袍',
      speed: 8,
      tips: '稳定8攻速',
      src: base_path + 'jacket/DaoCaoRen.png'
    },
    'HuoKang': {
      parent: 'jacket',
      name: '大地的馈赠上衣',
      speed: 10,
      tips: '默认吃满火抗属性',
      src: base_path + 'jacket/HuoKang.png'
    },
    'XingYun': {
      parent: 'jacket',
      name: '双面星云皮大衣',
      speed: 5,
      tips: '稳定5攻速',
      src: base_path + 'jacket/XingYun.png'
    },
    'Others': {
      parent: 'jacket',
      name: '自定义',
      speed: 0,
      tips: '手动设置上衣攻速',
      src: base_path + 'jacket/Others.png'
    },
  },
  'weapon': {
    'Others': {
      parent: 'weapon',
      name: '吞噬武器',
      speed: 0,
      tips: '稳定0攻速',
      src: base_path + 'WuQi.png'
    },
  },
  'trousers': {
    'EnTe': {
      parent: 'trousers',
      name: '自定义',
      speed: 0,
      tips: '自定义攻速',
      src: base_path + 'trousers/EnTe.png'
    },
    'MoNv': {
      parent: 'trousers',
      name: '自定义',
      speed: 0,
      tips: '自定义攻速',
      src: base_path + 'trousers/MoNv.png'
    },
    'LanLing': {
      parent: 'trousers',
      name: '自定义',
      speed: 0,
      tips: '自定义攻速',
      src: base_path + 'trousers/LanLing.png'
    },
    'ShenQian': {
      parent: 'trousers',
      name: '自定义',
      speed: 0,
      tips: '自定义攻速',
      src: base_path + 'trousers/ShenQian.png'
    },
    'JiXie': {
      parent: 'trousers',
      name: '机械装甲下装',
      speed: 24,
      tips: '默认增幅12',
      src: base_path + 'trousers/JiXie.png'
    },
    'Others': {
      parent: 'trousers',
      name: '自定义',
      speed: 0,
      tips: '手动设置裤子攻速',
      src: base_path + 'trousers/Others.png'
    },
  },
  'waistband': {
    'EnTe': {
      parent: 'waistband',
      name: '自定义',
      speed: 0,
      tips: '自定义攻速',
      src: base_path + 'waistband/EnTe.png'
    },
    'MoNv': {
      parent: 'waistband',
      name: '自定义',
      speed: 0,
      tips: '自定义攻速',
      src: base_path + 'waistband/MoNv.png'
    },
    'LanLing': {
      parent: 'waistband',
      name: '自定义',
      speed: 0,
      tips: '自定义攻速',
      src: base_path + 'waistband/LanLing.png'
    },
    'ShenQian': {
      parent: 'waistband',
      name: '自定义',
      speed: 0,
      tips: '自定义攻速',
      src: base_path + 'waistband/ShenQian.png'
    },
    'DongLi': {
      parent: 'waistband',
      name: '动力之渊腰带',
      speed: 8,
      tips: '稳定8攻速',
      src: base_path + 'waistband/DongLi.png'
    },
    'JingMi': {
      parent: 'waistband',
      name: '静谧星光腰带',
      speed: 8,
      tips: '稳定8攻速',
      src: base_path + 'waistband/JingMi.png'
    },
    'XingMie': {
      parent: 'waistband',
      name: '星灭光离腰带',
      speed: 45,
      tips: '默认吃满火抗',
      src: base_path + 'waistband/XingMie.png'
    },
    'Others': {
      parent: 'waistband',
      name: '自定义',
      speed: 0,
      tips: '手动设置腰带攻速',
      src: base_path + 'waistband/Others.png'
    },
  },
  'bracelet': {
    'ChuXue': {
      parent: 'bracelet',
      name: '黑灵缠绕手镯',
      speed: 0,
      tips: '无',
      src: base_path + 'ChuXueShou.png'
    },
  },
  'necklace': {
    'EnTe': {
      parent: 'necklace',
      name: '自定义',
      speed: 0,
      tips: '自定义攻速',
      src: base_path + 'necklace/EnTe.png'
    },
    'MoNv': {
      parent: 'necklace',
      name: '自定义',
      speed: 0,
      tips: '自定义攻速',
      src: base_path + 'necklace/MoNv.png'
    },
    'LanLing': {
      parent: 'necklace',
      name: '自定义',
      speed: 0,
      tips: '自定义攻速',
      src: base_path + 'necklace/LanLing.png'
    },
    'ShenQian': {
      parent: 'necklace',
      name: '自定义',
      speed: 0,
      tips: '自定义攻速',
      src: base_path + 'necklace/ShenQian.png'
    },
    'AnXing': {
      parent: 'necklace',
      name: '黯星项链',
      speed: 20,
      tips: '默认血量低于50%吃满攻速',
      src: base_path + 'necklace/AnXing.png'
    },
    'MaiChong': {
      parent: 'necklace',
      name: '脉冲触发器',
      speed: 50,
      tips: '默认满连击吃满攻速',
      src: base_path + 'necklace/MaiChong.png'
    },
    'YuanZiHe': {
      parent: 'necklace',
      name: '原子核项链',
      speed: 15,
      tips: '默认属强大于250吃满攻速',
      src: base_path + 'necklace/YuanZiHe.png'
    },
    'Others': {
      parent: 'necklace',
      name: '自定义',
      speed: 0,
      tips: '手动设置项链攻速',
      src: base_path + 'necklace/Others.png'
    },
  },
  'shoe': {
    'JiXie': {
      parent: 'shoe',
      name: '赛博音速长靴',
      speed: 0,
      tips: '无',
      src: base_path + 'GongSuXie.png'
    }
  },
  'left': {
    'EnTe': {
      parent: 'left',
      name: '自定义',
      speed: 0,
      tips: '自定义攻速',
      src: base_path + 'left/EnTe.png'
    },
    'MoNv': {
      parent: 'left',
      name: '自定义',
      speed: 0,
      tips: '自定义攻速',
      src: base_path + 'left/MoNv.png'
    },
    'LanLing': {
      parent: 'left',
      name: '自定义',
      speed: 0,
      tips: '自定义攻速',
      src: base_path + 'left/LanLing.png'
    },
    'ShenQian': {
      parent: 'left',
      name: '自定义',
      speed: 0,
      tips: '自定义攻速',
      src: base_path + 'left/ShenQian.png'
    },
    'LingDang': {
      parent: 'left',
      name: '生命的喘息',
      speed: 8,
      tips: '稳定8攻速',
      src: base_path + 'left/LingDang.png'
    },
    'PinJi': {
      parent: 'left',
      name: '光学工程眼镜',
      speed: 5,
      tips: '默认品级之和大于900',
      src: base_path + 'left/PinJi.png'
    },
    'Others': {
      parent: 'left',
      name: '自定义',
      speed: 0,
      tips: '手动设置左槽攻速',
      src: base_path + 'left/Others.png'
    },
  },
  'ring': {
    'EnTe': {
      parent: 'ring',
      name: '自定义',
      speed: 0,
      tips: '自定义攻速',
      src: base_path + 'ring/EnTe.png'
    },
    'MoNv': {
      parent: 'ring',
      name: '自定义',
      speed: 0,
      tips: '自定义攻速',
      src: base_path + 'ring/MoNv.png'
    },
    'LanLing': {
      parent: 'ring',
      name: '自定义',
      speed: 0,
      tips: '自定义攻速',
      src: base_path + 'ring/LanLing.png'
    },
    'ShenQian': {
      parent: 'ring',
      name: '自定义',
      speed: 0,
      tips: '自定义攻速',
      src: base_path + 'ring/ShenQian.png'
    },
    'GanDian': {
      parent: 'ring',
      name: '感电戒指',
      speed: 0,
      tips: '稳定0攻速',
      src: base_path + 'ring/GanDian.png'
    },
    'LeiDa': {
      parent: 'ring',
      name: '雷达戒指',
      speed: 0,
      tips: '稳定0攻速',
      src: base_path + 'ring/LeiDa.png'
    },
    'NengLiang': {
      parent: 'ring',
      name: '能力搜索环',
      speed: 0,
      tips: '稳定0攻速',
      src: base_path + 'ring/NengLiang.png'
    },
    'ShiJuRen': {
      parent: 'ring',
      name: '石巨人戒指',
      speed: 0,
      tips: '稳定0攻速',
      src: base_path + 'ring/ShiJuRen.png'
    },
    'TongKu': {
      parent: 'ring',
      name: '无尽的痛苦之戒',
      speed: 0,
      tips: '稳定0攻速',
      src: base_path + 'ring/TongKu.png'
    },
    'ShuangYin': {
      parent: 'ring',
      name: '双音交映戒指',
      speed: 24,
      tips: '默认拾取三个黑球',
      src: base_path + 'ring/ShuangYin.png'
    },
    'Others': {
      parent: 'ring',
      name: '自定义',
      speed: 0,
      tips: '手动设置戒指攻速',
      src: base_path + 'ring/Others.png'
    },
  },
  'ear': {
    'EnTe': {
      parent: 'ear',
      name: '自定义',
      speed: 0,
      tips: '自定义攻速',
      src: base_path + 'ear/EnTe.png'
    },
    'MoNv': {
      parent: 'ear',
      name: '自定义',
      speed: 0,
      tips: '自定义攻速',
      src: base_path + 'ear/MoNv.png'
    },
    'LanLing': {
      parent: 'ear',
      name: '自定义',
      speed: 0,
      tips: '自定义攻速',
      src: base_path + 'ear/LanLing.png'
    },
    'ShenQian': {
      parent: 'ear',
      name: '自定义',
      speed: 0,
      tips: '自定义攻速',
      src: base_path + 'ear/ShenQian.png'
    },
    'HuangHun': {
      parent: 'ear',
      name: '黄昏圣堂',
      speed: 8,
      tips: '稳定8攻速',
      src: base_path + 'ear/HuangHun.png'
    },
    'TunShi': {
      parent: 'ear',
      name: '吞噬风暴耳环',
      speed: 0,
      tips: '稳定0攻速',
      src: base_path + 'ear/TunShi.png'
    },
    'YinNi': {
      parent: 'ear',
      name: '隐匿之叹息耳环',
      speed: 0,
      tips: '稳定0攻速',
      src: base_path + 'ear/YinNi.png'
    },
    'WuSe': {
      parent: 'ear',
      name: '无色冰晶耳环',
      speed: 8,
      tips: '稳定8攻速',
      src: base_path + 'ear/WuSe.png'
    },
    'Others': {
      parent: 'ear',
      name: '自定义',
      speed: 0,
      tips: '手动设置耳环攻速',
      src: base_path + 'ear/Others.png'
    },
  },
  'right': {
    'EnTe': {
      parent: 'right',
      name: '自定义',
      speed: 0,
      tips: '自定义攻速',
      src: base_path + 'right/EnTe.png'
    },
    'MoNv': {
      parent: 'right',
      name: '自定义',
      speed: 0,
      tips: '自定义攻速',
      src: base_path + 'right/MoNv.png'
    },
    'LanLing': {
      parent: 'right',
      name: '自定义',
      speed: 0,
      tips: '自定义攻速',
      src: base_path + 'right/LanLing.png'
    },
    'ShenQian': {
      parent: 'right',
      name: '自定义',
      speed: 0,
      tips: '自定义攻速',
      src: base_path + 'right/ShenQian.png'
    },
    'HePing': {
      parent: 'right',
      name: '和平捍卫者',
      speed: 20,
      tips: '默认进入出血',
      src: base_path + 'right/HePing.png'
    },
    'WuRenJi': {
      parent: 'right',
      name: '战术车轮无人机',
      speed: 15,
      tips: '默认350px范围内又敌人',
      src: base_path + 'right/WuRenJi.png'
    },
    'ChongWu': {
      parent: 'right',
      name: '逆流之魂灵珠',
      speed: 15,
      tips: '默认拉满20个宠物',
      src: base_path + 'right/ChongWu.png'
    },
    'ZuZhou': {
      parent: 'right',
      name: '诅咒之心',
      speed: 8,
      tips: '稳定8攻速',
      src: base_path + 'right/ZuZhou.png'
    },
    'Others': {
      parent: 'right',
      name: '自定义',
      speed: 0,
      tips: '手动设置右槽攻速',
      src: base_path + 'right/Others.png'
    },
  }
}
export {
  CodeToEquip,
}