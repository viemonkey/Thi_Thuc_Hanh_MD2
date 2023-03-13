"use strict";
exports.__esModule = true;
var LoverManager_1 = require("./controller/LoverManager");
var Lover_1 = require("./model/Lover");
var input = require("readline-sync");
var loverManager = new LoverManager_1.LoverManager();
main();
function main() {
    var menu = "\n    1. Lover Display\n    2. Lover Search\n    3. Add Lover\n    4. Edit Lover Information\n    5. Delete Lover\n    0. Exit\n    ";
    var choice = -1;
    do {
        console.log(menu);
        choice = +input.question("Enter Choice: ");
        switch (choice) {
            case 1:
                loverDisplay();
                break;
            case 2:
                loverSearch();
                break;
            case 3:
                loverAdd();
                break;
            case 4:
                loverEdit();
                break;
            case 5:
                loverDelete();
                break;
            case 0:
                break;
        }
    } while (choice !== 0);
}
function zodiacChoice() {
    var menu = "\n  1. Aries \n  2. Taurus \n  3. Gemini\n  4. Cancer \n  5. Leo\n  0. Exit\n  ";
    var choice = -1;
    var zodiac1;
    do {
        console.log(menu);
        choice = +input.question("Enter Choice: ");
        switch (choice) {
            case 1:
                zodiac1 = 'Aries';
                return zodiac1;
            case 2:
                zodiac1 = 'Taurus';
                return zodiac1;
            case 3:
                zodiac1 = 'Gemini';
                return zodiac1;
            case 4:
                zodiac1 = 'Cancer';
                return zodiac1;
            case 5:
                zodiac1 = 'Leo';
                return zodiac1;
        }
    } while (choice !== 0);
    return '';
}
function loverAdd() {
    console.log("--------Lover Add--------");
    var id;
    var isIdUnique;
    do {
        id = +input.question("Enter Id: ");
        isIdUnique = loverManager.findByIdLover(id) === null;
        if (!isIdUnique) {
            console.log("--------Id Already Exists, Please Enter Another Id--------");
        }
    } while (!isIdUnique);
    var name = input.question("Enter Name: ");
    var address = input.question("Enter Address: ");
    var zodiac = zodiacChoice();
    var yearOfBirth = input.question("Enter Year Of Birth: ");
    var interest = input.question("Enter Interest: ");
    var storage = new Lover_1.Lover(id, name, address, zodiac, yearOfBirth, interest);
    loverManager.add(storage);
}
function loverEdit() {
    var idEdit = +input.question("Enter Id Want To Edit: ");
    var id = +input.question("Enter Id: ");
    var name = input.question("Enter Name: ");
    var address = input.question("Enter Address: ");
    var zodiac = zodiacChoice();
    var yearOfBirth = input.question("Enter Year Of Birth: ");
    var interest = input.question("Enter Interest: ");
    var storage = new Lover_1.Lover(id, name, address, zodiac, yearOfBirth, interest);
    loverManager.edit(idEdit, storage);
}
function loverDisplay() {
    console.table(loverManager.display());
}
function loverDelete() {
    var idDelete = +input.question("Enter Id Want To Delete: ");
    loverManager["delete"](idDelete);
}
function loverSearch() {
    var nameSearch = input.question("Enter Lover Name Want To Search: ");
    var searchResults = loverManager.findByLoverName(nameSearch, loverManager.listLover);
    console.table(searchResults);
}
