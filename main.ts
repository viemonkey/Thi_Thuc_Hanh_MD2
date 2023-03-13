import { LoverManager } from "./controller/LoverManager";
import { Lover } from "./model/Lover";
let input = require("readline-sync");
let loverManager = new LoverManager();
main();
function main() {
  let menu = `
    1. Lover Display
    2. Lover Search
    3. Add Lover
    4. Edit Lover Information
    5. Delete Lover
    0. Exit
    `;
  let choice = -1;

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
  let menu = `
  1. Aries 
  2. Taurus 
  3. Gemini
  4. Cancer 
  5. Leo
  0. Exit
  `
  let choice = -1;
  let zodiac1: string;
  do {
    console.log(menu);
    choice = +input.question("Enter Choice: ");
    switch (choice) {
      case 1:
          zodiac1 = 'Aries'
          return zodiac1;
      case 2:
          zodiac1 = 'Taurus'
          return zodiac1;
      case 3:
          zodiac1 = 'Gemini'
          return zodiac1;
      case 4:
          zodiac1 = 'Cancer'
          return zodiac1;
      case 5:
          zodiac1 = 'Leo'
          return zodiac1;
    }
  } while (choice !== 0)
  return '';
}
function loverAdd() {
  console.log("--------Lover Add--------");
  let id;
  let isIdUnique;
  do {
    id = +input.question("Enter Id: ");
    isIdUnique = loverManager.findByIdLover(id) === null;
    if (!isIdUnique) {
      console.log("--------Id Already Exists, Please Enter Another Id--------");

    }
    
  } while (!isIdUnique)
  let name = input.question("Enter Name: ");
  let address = input.question("Enter Address: ");
  let zodiac = zodiacChoice()
  let yearOfBirth = input.question("Enter Year Of Birth: ");
  let interest = input.question("Enter Interest: ");

  let storage = new Lover(id, name, address, zodiac, yearOfBirth, interest);
  loverManager.add(storage);
}

function loverEdit() {
  let idEdit = +input.question("Enter Id Want To Edit: ");
  let id = +input.question("Enter Id: ");
  let name = input.question("Enter Name: ");
  let address = input.question("Enter Address: ");
  let zodiac = zodiacChoice()
  let yearOfBirth = input.question("Enter Year Of Birth: ");
  let interest = input.question("Enter Interest: ");

  let storage = new Lover(id, name, address, zodiac, yearOfBirth, interest);
  loverManager.edit(idEdit, storage);
}

function loverDisplay() {
  console.table(loverManager.display());
}
function loverDelete() {
  let idDelete = +input.question("Enter Id Want To Delete: ");
  loverManager.delete(idDelete);
}

function loverSearch() {
  let nameSearch = input.question("Enter Lover Name Want To Search: ");
  let searchResults = loverManager.findByLoverName(nameSearch, loverManager.listLover);
  console.table(searchResults);
}
