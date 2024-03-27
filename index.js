function superbowlWin (record) {
    const win =record.find((game) => game.result==="W" &&game.team
    ==="Denver Broncos");
    if(win){
        return win.year;
    } else {
        return undefined;
    }
}
function superbowlWin(records){
    const winRecord = records.find(element => element.result === "W");
    return winRecord ? winRecord.year : undefined;
}

console.log(superbowlWin(record));