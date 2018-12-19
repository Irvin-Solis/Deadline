module.export ={
  async findLabel (iterator){
    var array = iterator.keys()
    var box = []
    for (let key of array){
      var label = iterator[key]["label"]
      box.push(label)
    }
    return box
  },

  async findTime (iterator){
    var array = iterator.keys()
    var timeBox = []
    for(let key of array){
      var label = iterator[key]["label"]
      if(label == answer){
        timeBox.push(iterator[key]["time"])
        var foo = timeBox.find((element)  =>{
          return element
        })
      }
    }
    return foo
  },

  async isTheirAnEquality (array1, array2){
    array1.forEach((obj1) => array2.forEach((obj2) =>{
      if(obj1 == obj2){
        answer.push(obj1)
      }
    }))
    if(answer.length > 0){
      return true
    }
    else{
      return false
    }
  },

  async findComment (iterator){
    var array = iterator.keys()
    var commentBox = []
    for(let key of array){
      var label = iterator[key]["label"]
      if(label == answer){
        commentBox.push(iterator[key]["comment"])
        var foo = commentBox.find((element)  =>{
          return element
        })
      }
    }
    return foo
  }

}
