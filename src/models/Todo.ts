export class Todo {
    
    _description: string;
    _isCompleted: boolean;

    constructor(description: string){
        this._description = description;
        this._isCompleted = false
    }
}