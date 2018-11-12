function mySet() {
 
    const collection = [];

    this.has = function(e) {
        
        return (collection.indexOf(e) !== -1);
    };

    this.add = function(e) {
        if (!this.has(e)){
            collection.push(e);
            return true;
        }
        return false;
    };

    this.remove = function(e) {
        if (this.has(e)){
            index = collection.indexOf(e);
            collection.splice(index, 1);
            return true;
        }
        return false;
    };

    // Combine 2 sets leaving out dupes
    //
    this.union = function(set2) {
        const values1 = this.values();
        const values2 = set2.values();
        const unionSet = new mySet();

        values1.forEach( (e) => {
            unionSet.add(e);
        });
        values2.forEach( (e) => {
            unionSet.add(e);
        });
      
        return unionSet.values();
    };

    // return common values in 2 sets
    //
    this.intersect = function(set2) {
        const values1 = this.values();
        const values2 = set2.values();
        const intersectSet = new mySet();

        values1.forEach( (e) => {
            if(set2.has(e)){
                intersectSet.add(e);
            }
        });
       
        return intersectSet.values();
    };

    // return diff values in 2 sets
    //
    this.diff = function(set2) {
        const values1 = this.values();
        const values2 = set2.values();
        const diffSet = new mySet();

        values1.forEach( (e) => {
            if(!set2.has(e)){
                diffSet.add(e);
            }
        });
       
        return diffSet.values();
    };

    // Is set2 a subset of this set?
    //
    this.subset = function(set2) {
        const values1 = this.values();
        const values2 = set2.values();
     
        // The every() method checks if all elements in an array pass a test (provided as a function).
        return values2.every( (value) => {
          return this.has(value);
        });
    };


    this.size = function() {
        return collection.length;
    };

    this.values = function() {
        return collection;
    }
}

const setA = new mySet();  
setA.add("abc");
setA.add("cde");
setA.add("ghi");
//setA.remove("cde");

const setB = new mySet();
setB.add("cde");
setB.add("jkl");
setB.add("nmo");

//console.log(setA.union(setB));
//console.log(setA.intersect(setB));
//console.log(setA.diff(setB));

const setC = new mySet();
setC.add("cde");
setC.add("ghi");
console.log(setA.subset(setC));


