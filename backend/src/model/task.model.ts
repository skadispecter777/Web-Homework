export class Task {
    id:string
    name: any;

    isComplete: boolean;

    isOngoing: boolean;

    constructor(id:string,name: any, isComplete: boolean, isOngoing:boolean) {
        this.id=id;
        this.name = name;
        this.isComplete = isComplete;
        this.isOngoing =isOngoing;
    }

    public getName() {
        return this.name;
    }
}