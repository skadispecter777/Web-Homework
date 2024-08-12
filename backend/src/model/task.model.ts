export class Task {
    id:string
    name: any;
    isComplete: boolean;
    isOngoing: boolean;
    comments:[];

    constructor(id:string,name: any, isComplete: boolean, isOngoing:boolean,comments:[]) {
        this.id=id;
        this.name = name;
        this.isComplete = isComplete;
        this.isOngoing =isOngoing;
    }

    public getName() {
        return this.name;
    }
}