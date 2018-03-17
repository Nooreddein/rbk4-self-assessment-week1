var firstLast = function(arr) {
	var instance = {}
	//using method to add fist and last function
	instance.first = function(arr,n){
		//return the  first n elements of our array
		if(n===undefined){
			return arr[0]
		}
		for (var i = 0; i < arr.length; i++) {
			if(n<=i){
				return arr[i]
			}
		}
	}
	instance.last = function(arr,n){
		//return last n elements in our array
		return 
	}
	return instance
}