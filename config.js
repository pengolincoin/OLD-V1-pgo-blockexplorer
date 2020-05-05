// settings
const api = "/api";
const coinDifficultyTarget=60;
const symbol="PGO";
const coinUnits=100000000;
const blockchainExplorer = "?hash={id}#block";
const transactionExplorer = "?hash={id}#transaction";

// poolList ["id","visible", "url", "api", "enabled"]
const poolList = [
	{"id":1,"visible":true,"url":"http://peng-pool.s2ii.xyz","api":"http://peng-pool.s2ii.xyz:9989","status":true,"flag":"DE","loc":"Germany"},
	{"id":2,"visible":true,"url":"http://pgo.xingyun.io","api":"http://113.107.201.134:9989","status":true,"flag":"CN","loc":"China"},
	{"id":3,"visible":true,"url":"http://pengo.cpupool.cn:5000","api":"http://pengo.cpupool.cn:9989","status":true,"flag":"CN","loc":"China"},
	{"id":4,"visible":true,"url":"http://minergalaxy.com/merge4","api":"http://167.86.103.145:8146","status":true,"flag":"DE","loc":"Germany"},
	{"id":5,"visible":true,"url":"http://m2pool.eu/PGOZUM","api":"http://80.211.203.63:9217","status":true,"flag":"CZ","loc":"Czech Republic"},
	{"id":6,"visible":true,"url":"http://minergalaxy.com/merge","api":"http://207.180.227.127:1977","status":true,"flag":"DE","loc":"Germany"},
	{"id":7,"visible":true,"url":"https://fastpool.xyz/pgo","api":"https://fastpool.xyz/api-pgo","status":true,"flag":"BG","loc":"Bulgaria"},
	{"id":8,"visible":true,"url":"http://pgo.pool-pay.com","api":"http://pgo.pool-pay.com:8767","status":true,"flag":"DE","loc":"Germany"},
	{"id":9,"visible":true,"url":"http://minergalaxy.com/merge2","api":"http://167.86.103.145:1977","status":true,"flag":"DE","loc":"Germany"},
	{"id":10,"visible":true,"url":"http://minergalaxy.com/merge3","api":"http://144.91.117.155:8126","status":true,"flag":"DE","loc":"Germany"},
	{"id":11,"visible":true,"url":"https://superblockchain.con-ip.com/pgo","api":"https://superblockchain.con-ip.com:9990","status":true,"flag":"ES","loc":"Spain"},
	{"id":12,"visible":true,"url":"http://dyngepeng.zapto.org/Pengolin","api":"http://dyngepeng.zapto.org:3190","status":true,"flag":"NO","loc":"Norway"},
	{"id":13,"visible":true,"url":"https://pengolincoin.my-mining-pool.de","api":"https://apipengolincoin.my-mining-pool.de","status":true,"flag":"DE","loc":"Germany"},
	{"id":14,"visible":true,"url":"https://www.dxpool.com/mining/pgo/info","api":"https://pgo.ss.dxpool.com:5999","status":true,"flag":"CN","loc":"China"},

];
const seedsNodes = [
	{"id":"pgo1","url":"https://seed1.pengolincoin.xyz/api"}, //pool
	{"id":"pgo2","url":"https://seed2.pengolincoin.xyz/api"}, //explorer
	{"id":"pgo3","url":"https://seed3.pengolincoin.xyz/api"}, //ft4a
];
