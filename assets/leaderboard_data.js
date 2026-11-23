/* FabricBench 排行榜数据(唯一来源)。加策略/加任务只改这里。
   用 .js 而不是 .json:本地 file:// 打开时浏览器不允许 fetch JSON。 */
window.FB_LB = {
  version: "v1.0",
  updated: "2026-11-05",
  episodes: 50,
  tasks: [
    {id:"lift_silk",      n:"Lift silk"},
    {id:"flatten_silk",   n:"Flatten silk"},
    {id:"flatten_tshirt", n:"Flatten T-shirt"},
    {id:"carry_bag",      n:"Carry bag"},
    {id:"pack_snack",     n:"Pack snack"},
    {id:"fold",           n:"Fold T-shirt"},
  ],
  news: [
    {d:"2026-11-05", t:"Leaderboard page draft. Per-model rollout videos and the protocol document are placeholders."},
    {d:"2026-10",    t:"v1.0 — six baselines (π0.5, LingBot-VA, Fast-WAM, GR00T, ACT, DP) on six tasks, 50 fixed-seed episodes per cell."},
  ],
  // sr / sc 的顺序与 tasks 一致;g = 构型梯度 C0,C1,C2 + 外观变化;real = 真机 20 次(仅 π0.5)
  models: [
    {id:"pi05", n:"π0.5", t:"VLA", c:"#e4a853", by:"FabricBench Team", d:"2026-10",
     sr:[98,86,82,66,92,36], sc:[98.0,94.5,82.4,82.5,97.0,63.6],
     g:{tshirt:{sr:[82,44,12,76],sc:[82.4,73.4,35.7,80.3]}, silk:{sr:[86,20,2,64],sc:[94.5,60.4,42.2,85.3]}},
     real:{lift_silk:[14,20], flatten_tshirt:[11,20], flatten_silk:[13,20], carry_bag:[10,20], pack_snack:[17,20], fold:[7,20]}},
    {id:"lingbot", n:"LingBot-VA", t:"WAM", c:"#6fb7a8", by:"FabricBench Team", d:"2026-10",
     sr:[66,86,86,50,98,36], sc:[78.0,97.0,83.0,70.0,98.8,57.6],
     g:{tshirt:{sr:[86,62,10,84],sc:[83.0,73.5,28.2,77.1]}, silk:{sr:[86,22,0,86],sc:[97.0,61.6,40.4,97.0]}}},
    {id:"fastwam", n:"Fast-WAM", t:"WAM", c:"#8aa4e8", by:"FabricBench Team", d:"2026-10",
     sr:[58,64,92,80,8,0], sc:[78.0,87.2,81.6,85.5,12.4,22.8],
     g:{tshirt:{sr:[92,34,14,42],sc:[81.6,71.8,27.9,64.1]}, silk:{sr:[64,16,0,0],sc:[87.2,70.7,43.1,74.8]}}},
    {id:"groot", n:"GR00T", t:"VLA", c:"#d77a6a", by:"FabricBench Team", d:"2026-10",
     sr:[70,46,72,40,54,2], sc:[79.0,80.4,76.9,58.5,81.4,24.2],
     g:{tshirt:{sr:[72,34,14,58],sc:[76.9,62.9,31.1,69.2]}, silk:{sr:[46,18,0,38],sc:[80.4,71.0,44.6,77.8]}}},
    {id:"act", n:"ACT", t:"IL", c:"#b59bd6", by:"FabricBench Team", d:"2026-10",
     sr:[28,10,70,38,52,30], sc:[62.0,70.3,79.6,62.5,80.0,54.4],
     g:{tshirt:{sr:[70,16,6,28],sc:[79.6,36.1,25.8,59.1]}, silk:{sr:[10,6,0,4],sc:[70.3,60.5,43.4,65.5]}}},
    {id:"dp", n:"DP", t:"IL", c:"#9a958c", by:"FabricBench Team", d:"2026-10",
     sr:[38,0,78,8,18,0], sc:[44.0,57.3,78.8,27.0,53.2,16.2],
     g:{tshirt:{sr:[78,32,10,50],sc:[78.8,62.9,26.5,70.4]}, silk:{sr:[0,0,0,0],sc:[57.3,55.8,41.7,53.1]}}},
  ],
};
