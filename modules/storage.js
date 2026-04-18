//returns the local storage string for the currently selected puzzle
function loadStorage(puzzles, loaded_puzzle) {
    let current_data = localStorage.getItem(`colorByNumbers_${puzzles[loaded_puzzle].id}`);
    if (current_data==null) {
        current_data = createStorage();
    }
    return current_data;
}

//sets the local storage string for the currently selected puzzle to the item passed in
function setStorage(item, puzzles, loaded_puzzle) {
    localStorage.setItem(`colorByNumbers_${puzzles[loaded_puzzle].id}`,item);
}

//create a string in storage for the currently selected puzzle
function createStorage(puzzles, loaded_puzzle) {
    let current_data = '0';
    current_data = current_data.repeat(256);
    localStorage.setItem(`colorByNumbers_${puzzles[loaded_puzzle].id}`,current_data);
    return current_data;
}

export {loadStorage, setStorage, createStorage}