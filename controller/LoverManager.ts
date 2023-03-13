import { Lover } from "../model/Lover";

export class LoverManager {
    listLover : Lover[] = [];

    add(T:Lover):void {
        this.listLover.push(T);
    }
    findById(id:number):number{
        for(let i = 0; i < this.listLover.length;i++){
            if(this.listLover[i].getId() === id){
                return i;
            }
        }
        return -1;
    }
    edit(id:number,T:Lover):void {
        let index = this.findById(id);
        if (index === -1) {
            console.log("Don't have this id")
        }else {
            this.listLover[index]=T;
            console.log("Edit Successfully");
            
        }
    }
    display():Lover[] {
        return this.listLover
    }
    delete(id:number):void {
        let index = this.findById(id);
        if (index === -1) {
            console.log("Don't have this id")
        }else {
            this.listLover.splice(index, 1);
            console.log('Delete Successfully')
        }
    }

    findByLoverName(name, lovers) {
        return lovers.filter(lover => lover.getName().toLowerCase().includes(name.toLowerCase()));
      }

      findByIdLover(id: number): Lover | null {
        for (let i = 0; i < this.listLover.length; i++) {
          if (id === this.listLover[i].getId()) {
            return this.listLover[i];
          }
        }
        return null;
      }
}