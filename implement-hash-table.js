class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }


  set(key, val) {
      const index = this._hash(key); 
      
      if (!this.data[index]) {
          //to handle hash table coalition of the same address 
          this.data[index] = [];
      }

      //can now have mulitple arrays within an array 
      this.data[index].push([key,valu]);
      return this.data;
  } //O(1) no loop 

  get(key) {
      const index = this._hash(key);
      const current = this.data[index];

      if(current) {
          //loop through all the sub arrays in case there are multiple arrays 
         for (let i=0; i<current.length; i++) {
         if (current[i][0] === key) {
             return this.data[index][i][1];
         }   
        } 
      }
        
      return undefined;
  } // most of time will be O(1) if there is no coalition 
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.get('apples')
