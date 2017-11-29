
import Storage from 'storage'
export default {
  data() {
    return {
      tabs: '', // 用于判断是否点击下拉
      tabContents: ['患者管理', '电子病历', '透析管理', '床位管理'],
      subTabContents: [
        [
          '患者登记',
          '患者查询',
          '患者转归'
        ],
        [
          '电子病历cont1',
          '电子病历cont2',
          '电子病历cont3',
          '电子病历cont4',
          '电子病历cont5',
          '电子病历cont6'
        ],
        [
          '透析管理cont1',
          '透析管理cont2',
          '透析管理cont3',
          '透析管理cont4',
          '透析管理cont5',
          '透析管理cont6'
        ],
        [
          '床位管理cont1',
          '床位管理cont2',
          '床位管理cont3',
          '床位管理cont4',
          '床位管理cont5',
          '床位管理cont6'
        ]
      ],
      downContents: [
        [
          '患者管理cont1111111',
          '患者管理cont2222222',
          '患者管理cont3333333',
          '患者管理cont4444444',
          '患者管理cont5555555',
          '患者管理cont6666666'
        ],
        [
          '电子病历cont111111',
          '电子病历cont222222',
          '电子病历cont333333',
          '电子病历cont444444',
          '电子病历cont555555',
          '电子病历cont666666'
        ],
        [
          '透析管理cont111111',
          '透析管理cont222222',
          '透析管理cont333333',
          '透析管理cont444444',
          '透析管理cont555555',
          '透析管理cont666666'
        ],
        [
          '床位管理cont111111',
          '床位管理cont222222',
          '床位管理cont33333',
          '床位管理cont44444',
          '床位管理cont55555',
          '床位管理cont66666'
        ]
      ],
      num: -1, // 首页tab被点击的索引
      activeNum: -1, // 第一层子项被点击的索引
      subTabCont: [], // 第二层子项内容组合
      subTabIndex: -1, // 第二层子项被点击的索引
      subTabContItem: '', // 第二层子项被点击的内容
      isSubTabContItem: false // 第二层子项被点击标志
    }
  },
  props: {
    headfont: {
      type: String,
      default: '导航'
    },
    goToDetail: {
      type: Function
    }
  },
  methods: {
    tab(index, cont) {
      this.num = index
      this.subTabCont = this.subTabContents[index]
      this.activeNum = index
      this.tabs = cont
      Storage.set('currentIndex', index, 120000)
      Storage.set('currentCont', this.subTabContents[index], 120000)
    },
    showSubItem() {
      this.num = Storage.get('currentIndex')
      this.activeNum = Storage.get('currentIndex')
      this.isSubTabContItem = false
    },
    subTabFn(index, cont) {
      this.subTabIndex = index
      this.subTabContItem = cont
      this.isSubTabContItem = true
      this.$emit('goToDetail', cont)
    },
    defaultTab() {
      this.num = -1
      this.activeNum = -1
      this.tabs = ''
      this.subTabIndex = -1
      this.subTabContItem = ''
      this.isSubTabContItem = false
    }
  }
}

