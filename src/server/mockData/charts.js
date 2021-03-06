/*
 * /api/submit
 * 提交量数据
 */
export const submitData = {
  // 提交总数
  allCount: 221700,
  // 最近一天
  day: {
    time: [
      '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00',
      '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00',
      '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00',
    ],
    count: [
      150, 100, 200, 350, 200, 300, 100, 150, 100, 200, 350, 200,
      300, 100, 150, 100, 200, 350, 200, 300, 100, 200, 300, 200,
    ],
  },
  // 最近一月
  month: {
    time: [
      '2016-10-01', '2016-10-02', '2016-10-03', '2016-10-04', '2016-10-05', '2016-10-06',
      '2016-10-07', '2016-10-08', '2016-10-09', '2016-10-10', '2016-10-11', '2016-10-12',
      '2016-10-13', '2016-10-14', '2016-10-15', '2016-10-16', '2016-10-17', '2016-10-18',
      '2016-10-19', '2016-10-20', '2016-10-21', '2016-10-22', '2016-10-23', '2016-10-24',
      '2016-10-25', '2016-10-26', '2016-10-27', '2016-10-28', '2016-10-29', '2016-10-30', '2016-10-31',
    ],
    count: [
      1500, 1000, 2000, 3500, 2000, 3000, 1000, 1500, 1000, 2000,
      3500, 2000, 3000, 1000, 1500, 1000, 2000, 3500, 2000, 3000,
      1000, 4000, 3000, 3000, 1000, 2000, 3500, 2000, 3000, 1000, 1500,
    ],
  },
  // 最近一年
  yaer: {
    time: [
      '2016-01月', '2016-02月', '2016-03月', '2016-04月', '2016-05月', '2016-06月',
      '2016-07月', '2016-08月', '2016-09月', '2016-10月', '2016-11月', '2016-12月',
    ],
    count: [15000, 10000, 20000, 35000, 20000, 30000, 10000, 15000, 10000, 20000, 35000, 20000],
  },
};

/*
 * /api/language
 * 提交语言数据
 */
export const languageData = [
  { value: 1335, name: 'C' },
  { value: 1000, name: 'C++' },
  { value: 234, name: 'Java' },
  { value: 135, name: 'Python2' },
  { value: 48, name: 'Python3' },
];

/*
 * /api/problem
 * 题目数据
 */
export const problemData = {
  // 题目总数
  allCount: 2800,
  // 题目提交量Top10
  levelBarData: {
    problemId: ['1009', '1008', '1007', '1006', '1005', '1004', '1003', '1002', '1001', '1000'],
    commitCount: [7700, 8800, 9900, 11100, 14200, 16000, 18400, 20500, 22600, 24700],
  },
  // 题目低通过率Top10
  verticalBarData: {
    problemId: ['2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000'],
    passRate: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
};

/*
 * /api/user
 * 用户分布数据
 */
export const userData = {
  // 专业
  major: [
    { value: 2935, name: '计算机科学与技术' },
    { value: 310, name: '软件工程' },
    { value: 234, name: '通信工程' },
    { value: 135, name: '高分子材料' },
    { value: 48, name: '生物化学' },
  ],
  // 学院
  school: [
    { value: 335, name: '计算机学院' },
    { value: 310, name: '电气学院' },
    { value: 234, name: '车辆工程学院' },
    { value: 135, name: '理学院' },
    { value: 548, name: '材料学院' },
  ],
  // 学校
  college: [
    { value: 2335, name: '山东理工' },
    { value: 310, name: '山东科技' },
    { value: 234, name: '中国石油(华东)' },
    { value: 135, name: '青岛理工' },
    { value: 548, name: '青岛大学' },
  ],
};
