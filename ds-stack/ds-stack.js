var Stack = function() {
    this._storage =[]
    this.add = function(value){
    	//push items in the storage array
    this._storage.push(value)
    };
    this.remove = function() {
    	//remove the last item first
    	//stack = first in last out
      this._storage.pop(this._storage.lenght-1)
    };
  };