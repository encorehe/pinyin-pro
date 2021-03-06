export const DEFAULT_OPTIONS = {
  pattern: 'pinyin', // 返回数据样式， 'pinyin' | 'initial' | 'final' | 'num' | 'pinyinNum'
  tone: true, // 是否带音调
  multitone: false, // 是否开启多音，仅word的length为1时设置生效
  type: 'string', // 返回值类型string | array。例如：可以， 'ke yi' ['ke', 'yi']
}
