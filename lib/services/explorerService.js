class ExplorerService{

    static filterByMission(explorers, mission){
        const explorersByMission=explorers.filter((explorers)=>explorers.mission===mission)
        return explorersByMission;//regregar la lista filtrada
    }
    static getAmountExplorersByMission(explorers, mission){

    }
    static getExplorersUsernamesByMission(explorers, mission){

    }
}

module.exports=ExplorerService