"use strict";
exports.__esModule = true;
exports.LoverManager = void 0;
var LoverManager = /** @class */ (function () {
    function LoverManager() {
        this.listLover = [];
    }
    LoverManager.prototype.add = function (T) {
        this.listLover.push(T);
    };
    LoverManager.prototype.findById = function (id) {
        for (var i = 0; i < this.listLover.length; i++) {
            if (this.listLover[i].getId() === id) {
                return i;
            }
        }
        return -1;
    };
    LoverManager.prototype.edit = function (id, T) {
        var index = this.findById(id);
        if (index === -1) {
            console.log("Don't have this id");
        }
        else {
            this.listLover[index] = T;
            console.log("Edit Successfully");
        }
    };
    LoverManager.prototype.display = function () {
        return this.listLover;
    };
    LoverManager.prototype["delete"] = function (id) {
        var index = this.findById(id);
        if (index === -1) {
            console.log("Don't have this id");
        }
        else {
            this.listLover.splice(index, 1);
            console.log('Delete Successfully');
        }
    };
    // findByName(name: string, t: Lover[]) {
    //     return this.listLover.filter(element => element.getName().toLowerCase().includes(name.toLowerCase()))
    // }
    LoverManager.prototype.findByLoverName = function (name, lovers) {
        return lovers.filter(function (lover) { return lover.getName().toLowerCase().includes(name.toLowerCase()); });
    };
    LoverManager.prototype.findByIdLover = function (id) {
        for (var i = 0; i < this.listLover.length; i++) {
            if (id === this.listLover[i].getId()) {
                return this.listLover[i];
            }
        }
        return null;
    };
    return LoverManager;
}());
exports.LoverManager = LoverManager;
