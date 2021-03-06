/* 
    Binary Search is an algorithm that looks for an item in an ordered array.
    this algorithm have a O(n) = log n which is a low prosses time

*/ 

function BinarySearch(Arr,Item){
    
    let found = false //indicate if the item was found
    let bottom = 0 //floor of the array
    let top = Arr.length //ceil of the array
    let half // half is the index of the array 
    
    while((bottom<=top) && !found){ // it will search until the top and the bottom overlap
        half=Math.floor((bottom+top)/2)
        // console.log(half)
        if(Item==Arr[half]){ // check against the item in the middle of the array
            found=true
        }
        else if(Item<Arr[half]){
            top=half-1 //move the top to one less then the half 
        }
        else{
            bottom=half+1 //move the bottom to one more then the half
        }
    }
    // console.log(found)
    if(found){
        // console.log(`Item found in position ${half}`)
        return (`Item found in position ${half}`)
    }
    else{
        // console.log(`Item not found`)
        return (`Item not found`)
    }
    
}
module.exports={
    BinarySearch
}

// test2=[9,8,7,6,2,1]
// BinarySearch(7,test2)
// console.log('-------------------')