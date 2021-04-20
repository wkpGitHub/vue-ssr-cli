import Request from '@/_utils/preq';
import { formatFeedList } from '@/_utils/format/feed';
// import Util from '@/_utils/util';
const sReq = new Request();

export default {
    state: {
        // 焦点图
        focus: [],
        // 直播
        live: {
            recommand: [
                {
                    streams: [134649],
                    contentStreams: [
                        {
                            display: 1,
                            id: 134649,
                            index: 1,
                            name: '直播',
                            roomId: 128877,
                            template: 0
                        }
                    ],
                    id: 128877,
                    abstract: '全景直播澳大利亚网球公开赛。\r\n ',
                    begin_time: 1548392400,
                    end_time: 1548428400,
                    icon:
                        'http://s7.rr.itc.cn/org/wapChange/20191_17_18/a924gw2142698226050.jpg',
                    is_accumulated_online: false,
                    is_against: false,
                    live_id: 73122,
                    name: '澳网-16:30播：德约 VS 普伊',
                    onlines: 2187,
                    sid: 190125130128877,
                    alias_name: '澳网-16:30播：德约 VS 普伊',
                    recommand: true,
                    originalName: '全景直播澳大利亚网球公开赛',
                    showStatus: 1,
                    showStatusStr: '正在直播'
                },
                {
                    streams: [134755],
                    contentStreams: [
                        {
                            display: 1,
                            id: 134755,
                            index: 1,
                            name: '互动聊球',
                            roomId: 128948,
                            template: 0
                        }
                    ],
                    id: 128948,
                    abstract: '2018-19赛季CBA常规赛第35轮，八一南昌VS北京首钢',
                    away_team_name: '北京首钢',
                    away_team_score: 0,
                    begin_time: 1548416100,
                    end_time: 1548432000,
                    home_team_name: '八一南昌',
                    home_team_score: 0,
                    icon:
                        'http://s7.rr.itc.cn/org/wapChange/20139_12_15/b10orc9062390704340.png',
                    is_accumulated_online: false,
                    is_against: true,
                    live_id: 73234,
                    name: 'CBA:八一VS首钢',
                    onlines: 62,
                    sid: 190125193628948,
                    alias_name: 'CBA:八一VS首钢',
                    recommand: true,
                    originalName: '八一南昌 VS 北京首钢',
                    showStatus: 0,
                    showStatusStr: '即将开始',
                    url: '//m.sohu.com/z/cba/match/346?tab=match-live',
                    matchInfo: {
                        articleData: null,
                        leagueId: 1002,
                        roomId: 128948,
                        reportId: -1,
                        gameCode: 346,
                        gameDateTime: 1548416100000,
                        isHot: false,
                        category: 'cba'
                    }
                },
                {
                    streams: [134757],
                    contentStreams: [
                        {
                            display: 1,
                            id: 134757,
                            index: 1,
                            name: '互动聊球',
                            roomId: 128950,
                            template: 0
                        }
                    ],
                    id: 128950,
                    abstract: '2018-19赛季CBA常规赛第35轮，时代中国广州VS辽宁本钢',
                    away_team_name: '辽宁本钢',
                    away_team_score: 0,
                    begin_time: 1548416100,
                    end_time: 1548432000,
                    home_team_name: '时代中国广州',
                    home_team_score: 0,
                    icon:
                        'http://s7.rr.itc.cn/org/wapChange/20139_12_15/b10orc9062390704340.png',
                    is_accumulated_online: false,
                    is_against: true,
                    live_id: 73236,
                    name: 'CBA:广州VS辽宁',
                    onlines: 212,
                    sid: 190125193628950,
                    alias_name: 'CBA:广州VS辽宁',
                    recommand: true,
                    originalName: '时代中国广州 VS 辽宁本钢',
                    showStatus: 0,
                    showStatusStr: '即将开始',
                    url: '//m.sohu.com/z/cba/match/348?tab=match-live',
                    matchInfo: {
                        articleData: null,
                        leagueId: 1002,
                        roomId: 128950,
                        reportId: -1,
                        gameCode: 348,
                        gameDateTime: 1548416100000,
                        isHot: true,
                        category: 'cba'
                    }
                },
                {
                    streams: [134821],
                    contentStreams: [
                        {
                            display: 1,
                            id: 134821,
                            index: 1,
                            name: '2019亚洲杯8强战',
                            roomId: 128993,
                            template: 0
                        }
                    ],
                    id: 128993,
                    abstract: '搜狐体育直播2019亚洲杯8强战:韩国VS卡塔尔。\r\n ',
                    begin_time: 1548421200,
                    end_time: 1548431700,
                    icon:
                        'http://s7.rr.itc.cn/org/wapChange/20151_4_11/a7zyjn156879263667.jpg',
                    is_accumulated_online: false,
                    is_against: true,
                    live_id: 73246,
                    name: '亚洲杯:韩国VS卡塔尔',
                    onlines: 105,
                    sid: 190125210128993,
                    away_team_name: '卡塔尔',
                    away_team_score: 0,
                    home_team_name: '韩国',
                    home_team_score: 0,
                    alias_name: '亚洲杯:韩国VS卡塔尔',
                    recommand: true,
                    originalName: '韩国 VS 卡塔尔',
                    showStatus: 0,
                    showStatusStr: '即将开始'
                }
            ],
            living: 1,
            total: 14
        },
        // 头条 feed 流
        toutiaoNews: [],
        list: []
    },
    mutations: {
        SET_FOCUS(state, { focus }) {
            state.focus = focus;
        },
        SET_RECOMMEND_LIVE(state, { live }) {
            state.live = live;
        },
        SET_TOUTIAO_NEWS(state, { news }) {
            state.toutiaoNews = news;
        },
        getRole (state, list) {
            state.list = list;
        }
    },
    actions: {
        getRole({commit}) {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(
                    commit('getRole', [
                        {
                          "id": 1,
                          "is_deleted": "n",
                          "creator": "叁拾而立",
                          "gmt_create": "2018-07-18 16:04:05",
                          "modifier": "叁拾而立",
                          "gmt_modified": "2018-07-18 16:04:05",
                          "agentId": 1,
                          "role_name": "系统管理员",
                          "status": "E"
                        },
                        {
                          "id": 2,
                          "is_deleted": "n",
                          "creator": "dingxy",
                          "gmt_create": "2018-06-30 15:31:26",
                          "modifier": "颜秋芳",
                          "gmt_modified": "2018-09-04 10:30:28",
                          "agentId": 1,
                          "role_name": "申请复核",
                          "status": "E",
                          "memo": ""
                        },
                        {
                          "id": 3,
                          "is_deleted": "n",
                          "creator": "dingxy",
                          "gmt_create": "2018-06-30 15:31:26",
                          "modifier": "胡敏",
                          "gmt_modified": "2018-09-04 18:18:53",
                          "agentId": 1,
                          "role_name": "财务出纳银行",
                          "status": "E",
                          "memo": "胡云磊"
                        },
                        {
                          "id": 4,
                          "is_deleted": "n",
                          "creator": "dingxy",
                          "gmt_create": "2018-06-30 15:31:26",
                          "modifier": "胡敏",
                          "gmt_modified": "2018-08-21 15:39:46",
                          "agentId": 1,
                          "role_name": "确认付款银行",
                          "status": "E",
                          "memo": ""
                        },
                        {
                          "id": 5,
                          "is_deleted": "n",
                          "creator": "dingxy",
                          "gmt_create": "2018-06-30 15:31:26",
                          "modifier": "胡敏",
                          "gmt_modified": "2018-09-04 18:20:47",
                          "agentId": 1,
                          "role_name": "财务终审",
                          "status": "E",
                          "memo": "顾志新"
                        },
                        {
                          "id": 6,
                          "is_deleted": "n",
                          "creator": "dingxy",
                          "gmt_create": "2018-06-30 15:31:26",
                          "modifier": "胡敏",
                          "gmt_modified": "2018-08-21 15:39:50",
                          "agentId": 1,
                          "role_name": "财务稽查",
                          "status": "E",
                          "memo": ""
                        },
                        {
                          "id": 7,
                          "is_deleted": "n",
                          "creator": "dingxy",
                          "gmt_create": "2018-06-30 15:31:26",
                          "modifier": "颜秋芳",
                          "gmt_modified": "2018-09-04 10:19:04",
                          "agentId": 1,
                          "role_name": "付款申请",
                          "status": "E",
                          "memo": ""
                        },
                        {
                          "id": 60005,
                          "is_deleted": "n",
                          "creator": "yao",
                          "gmt_create": "2018-07-26 16:58:01",
                          "modifier": "yao",
                          "gmt_modified": "2019-07-01 14:46:09",
                          "agentId": 1,
                          "role_name": "财务主管",
                          "status": "E",
                          "memo": "蔡海燕"
                        },
                        {
                          "id": 60007,
                          "is_deleted": "n",
                          "creator": "yao",
                          "gmt_create": "2018-07-31 17:18:57",
                          "modifier": "胡敏",
                          "gmt_modified": "2018-09-04 18:18:37",
                          "agentId": 1,
                          "role_name": "财务权限管理",
                          "status": "E",
                          "memo": "颜秋芳"
                        },
                        {
                          "id": 60008,
                          "is_deleted": "n",
                          "creator": "颜秋芳",
                          "gmt_create": "2018-08-22 15:29:12",
                          "modifier": "胡敏",
                          "gmt_modified": "2018-09-04 18:19:50",
                          "agentId": 1,
                          "role_name": "银行出纳境外",
                          "status": "E",
                          "memo": "欧阳星月"
                        },
                        {
                          "id": 90006,
                          "is_deleted": "n",
                          "creator": "颜秋芳",
                          "gmt_create": "2018-08-02 23:48:38",
                          "modifier": "颜秋芳",
                          "gmt_modified": "2018-08-02 23:48:38",
                          "agentId": 1,
                          "role_name": "财务出纳现金",
                          "status": "E"
                        },
                        {
                          "id": 90007,
                          "is_deleted": "n",
                          "creator": "颜秋芳",
                          "gmt_create": "2018-08-02 23:49:44",
                          "modifier": "颜秋芳",
                          "gmt_modified": "2018-08-02 23:49:44",
                          "agentId": 1,
                          "role_name": "确认付款现金",
                          "status": "E"
                        },
                        {
                          "id": 90009,
                          "is_deleted": "n",
                          "creator": "颜秋芳",
                          "gmt_create": "2018-08-16 11:55:37",
                          "modifier": "颜秋芳",
                          "gmt_modified": "2018-08-16 11:55:37",
                          "agentId": 1,
                          "role_name": "确认支付个人",
                          "status": "E"
                        },
                        {
                          "id": 90010,
                          "is_deleted": "n",
                          "creator": "yao",
                          "gmt_create": "2018-08-18 10:58:19",
                          "modifier": "yao",
                          "gmt_modified": "2018-09-08 10:32:11",
                          "agentId": 1,
                          "role_name": "部门主管",
                          "status": "E",
                          "memo": "具有该部门审批和提交申请单的权限"
                        },
                        {
                          "id": 90015,
                          "is_deleted": "n",
                          "creator": "yao",
                          "gmt_create": "2018-09-07 13:58:58",
                          "modifier": "yao",
                          "gmt_modified": "2018-09-07 13:58:58",
                          "agentId": 1,
                          "role_name": "财务确认付款",
                          "status": "E",
                          "memo": "对公确认付款、境外确认付款、私人账户确认付款、现金出纳"
                        },
                        {
                          "id": 90016,
                          "is_deleted": "n",
                          "creator": "yao",
                          "gmt_create": "2018-12-11 15:55:09",
                          "modifier": "yao",
                          "gmt_modified": "2018-12-11 15:55:09",
                          "agentId": 1,
                          "role_name": "人事主管",
                          "status": "E"
                        },
                        {
                          "id": 150007,
                          "is_deleted": "n",
                          "creator": "yao",
                          "gmt_create": "2019-05-15 15:40:12",
                          "modifier": "yao",
                          "gmt_modified": "2019-05-15 15:40:12",
                          "agentId": 1,
                          "role_name": "订舱业务",
                          "status": "E"
                        }
                      ])
                      )
                }, 2000)
            })
        },
        FETCH_FOCUS({ commit }) {
            return sReq.fetch({
                url: 'https://v2.sohu.com/integration-api/pure/feedByRegion/5137'
            }).then(res => {
                let focus = formatFeedList(res.data);
                commit('SET_FOCUS', {
                    focus: focus
                });
            });
        },
        FETCH_RECOMMEND_LIVE({ commit }) {
            return sReq.fetch({
                url: 'http://10.16.58.119:8081/sports-api/v2/zhibo/recommand'
            }).then(res => {
                commit('SET_RECOMMEND_LIVE', {
                    live: res
                });
            });
        },
        FETCH_TOUTIAO_NEWS({ commit }) {
            return sReq.fetch({
                url: 'https://v2.sohu.com/integration-api/pure/feedByRegion/5138'
            }).then(res => {
                let toutiaoNews = formatFeedList(res.data);
                commit('SET_TOUTIAO_NEWS', {
                    news: toutiaoNews
                });
            });
        }
    }
};
