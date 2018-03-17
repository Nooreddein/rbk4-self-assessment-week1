var makeHashTable = function() {
  //Do not change the max!
  var max = 4;

    return {
      _storage: [],
      retrieve: function(key) {
      // check if there is a key in this array "index"
      // then pop it out and return it
      if(this._storage[hashFn(key, max)]){
       return this._storage[hashFn(key, max)]
      }
      //  this._storage.pop(this._storage[hashFn(key, max)];)
       return "there is no such item"
      },

      insert: function(key, value) {
        //your code is here
        //push values to the generated index
        this._storage[hashFn(key, max)] = value;
    }
  }
};

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};