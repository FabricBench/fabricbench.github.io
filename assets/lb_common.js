/* 排行榜页 / 模型页共用:取值、格式化、Logo 占位 */
const D = window.FB_LB, T = D.tasks, M = D.models;
const mean = a => a.reduce((x,y)=>x+y,0)/a.length;
const pct = v => `${Math.round(v)}%`;
const sc1 = v => v.toFixed(1);
// 一个格子 = "分数 / 成功率",和 RoboDojo 一样两个指标同时给
const pair = (s, r) => `<span class="s">${sc1(s)}</span><span class="r">/${pct(r)}</span>`;
// 还没有机构 Logo:用策略色块 + 首字母占位
const logo = m => `<span class="lg" style="background:${m.c}">${m.n.replace(/[^A-Za-zπ0-9]/g,"").slice(0,2)}</span>`;
const avgOf = m => ({ s: mean(m.sc), r: mean(m.sr) });
function rankBy(models, key){ // key: "s" | "r"
  return [...models].sort((a,b)=> avgOf(b)[key] - avgOf(a)[key]);
}
const medal = i => i < 3 ? `<span class="medal m${i+1}">${i+1}</span>` : i+1;
