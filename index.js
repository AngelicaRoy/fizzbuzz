//Read json file ===========================
const Reader=require("./lib/utils/Reader")
const ExplorersService=require("./lib/services/explorerService")
const explorers=Reader.readJsonFile("explorers.json")
//console.log(explorers)
// Return list of explorers that are in Node
console.log(ExplorerService.filterByMission(explorers, "node"));
