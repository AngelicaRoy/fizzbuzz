// Part 1 Read json file ===========================
const fs=require("fs");

class Reader{

    static readJsonFile(path){
        const rawdata=fs.readFileSync(path);
        return JSON.parse(rawdata);
    }

}
console.log("Leyendo");
//module.exports=Reader
Reader.readJsonFile("./../../../explorers.json")
