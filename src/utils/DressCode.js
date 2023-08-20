const base_path = '../assets/dress/'
const DressCode = {
  'Weapon':{
    'blue': {
      name: '高级武器装扮',
      parent: 'Weapon',
      level: 'blue',
      speed: 4,
      src: base_path + 'BlueWeapon.png'
    },
    'purple': {
      name: '稀有武器装扮',
      parent: 'Weapon',
      level: 'purple',
      speed: 0,
      src: base_path + 'PurpleWeapon.png'
    },
    'none': {
      name: '无武器装扮',
      parent: 'Weapon',
      level: 'none',
      speed: 0,
      src: base_path + 'NoneWeapon.png'
    }
  },
  'TouBu': {
    'blue': {
      name: '高级头部',
      parent: 'TouBu',
      level: 'blue',
      speed: 0,
      src: base_path + 'SeniorTouBu.png'
    },
    'purple': {
      name: '稀有头部',
      parent: 'TouBu',
      level: 'purple',
      speed: 0,
      src: base_path + 'TouBu.png'
    },
    'pink': {
      name: '神器头部',
      parent: 'TouBu',
      level: 'pink',
      speed: 0,
      src: base_path + 'PinkTouBu.png'
    }
  },
  'MaoZi': {
    'blue': {
      name: '高级帽子',
      parent: 'MaoZi',
      level: 'blue',
      speed: 0,
      src: base_path + 'SeniorMaoZi.png'
    },
    'purple': {
      name: '稀有帽子',
      parent: 'MaoZi',
      level: 'purple',
      speed: 0,
      src: base_path + 'MaoZi.png'
    },
    'pink': {
      name: '神器帽子',
      parent: 'MaoZi',
      level: 'pink',
      speed: 0,
      src: base_path + 'PinkMaoZi.png'
    }
  },
  'LianBu': {
    'blue': {
      name: '高级脸部',
      parent: 'LianBu',
      level: 'blue',
      speed: 5,
      src: base_path + 'SeniorLianBu.png'
    },
    'purple': {
      name: '稀有脸部',
      parent: 'LianBu',
      level: 'purple',
      speed: 6,
      src: base_path + 'LianBu.png'
    },
    'pink': {
      name: '神器脸部',
      parent: 'LianBu',
      level: 'pink',
      speed: 7,
      src: base_path + 'PinkLianBu.png'
    }
  },
  'XiongBu': {
    'blue': {
      name: '高级胸部',
      parent: 'XiongBu',
      level: 'blue',
      speed: 5,
      src: base_path + 'SeniorXiongBu.png'
    },
    'purple': {
      name: '稀有胸部',
      parent: 'XiongBu',
      level: 'purple',
      speed: 6,
      src: base_path + 'XiongBu.png'
    },
    'pink': {
      name: '神器胸部',
      parent: 'XiongBu',
      level: 'pink',
      speed: 7,
      src: base_path + 'PinkXiongBu.png'
    }
  },
  'ShangYi': {
    'blue': {
      name: '高级上衣',
      parent: 'ShangYi',
      level: 'blue',
      speed: 0,
      src: base_path + 'SeniorShangYi.png'
    },
    'purple': {
      name: '稀有上衣',
      parent: 'ShangYi',
      level: 'purple',
      speed: 0,
      src: base_path + 'ShangYi.png'
    },
    'pink': {
      name: '神器上衣',
      parent: 'ShangYi',
      level: 'pink',
      speed: 0,
      src: base_path + 'PinkShangYi.png'
    }
  },
  'PiFu':{
    'blue': {
      name: '皮肤',
      parent: 'PiFu',
      level: 'blue',
      speed: 0,
      src: base_path + 'PiFu.png'
    },
  },
  'YaoBu': {
    'blue': {
      name: '高级腰部',
      parent: 'YaoBu',
      level: 'blue',
      speed: 0,
      src: base_path + 'SeniorYaoBu.png'
    },
    'purple': {
      name: '稀有腰部',
      parent: 'YaoBu',
      level: 'purple',
      speed: 0,
      src: base_path + 'YaoBu.png'
    },
    'pink': {
      name: '神器腰部',
      parent: 'YaoBu',
      level: 'pink',
      speed: 0,
      src: base_path + 'PinkYaoBu.png'
    }
  },
  'XiaZhuang': {
    'blue': {
      name: '高级下装',
      parent: 'XiaZhuang',
      level: 'blue',
      speed: 0,
      src: base_path + 'SeniorXiaZhuang.png'
    },
    'purple': {
      name: '稀有下装',
      parent: 'XiaZhuang',
      level: 'purple',
      speed: 0,
      src: base_path + 'XiaZhuang.png'
    },
    'pink': {
      name: '神器下装',
      parent: 'XiaZhuang',
      level: 'pink',
      speed: 0,
      src: base_path + 'PinkXiaZhuang.png'
    }
  },
  'Xie': {
    'blue': {
      name: '高级鞋',
      parent: 'Xie',
      level: 'blue',
      speed: 0,
      src: base_path + 'SeniorXie.png'
    },
    'purple': {
      name: '稀有鞋',
      parent: 'Xie',
      level: 'purple',
      speed: 0,
      src: base_path + 'Xie.png'
    },
    'pink': {
      name: '神器鞋',
      parent: 'Xie',
      level: 'pink',
      speed: 0,
      src: base_path + 'PinkXie.png'
    }
  },
}

export {
  DressCode
}