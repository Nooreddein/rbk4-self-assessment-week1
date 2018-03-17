var firstLast = function(arr) {
	var instance = {}
	//using method to add fist and last function
	// instance.NativeArr = []
	instance.first = function(){
		return arr[0]
	}
	instance.last = function(){
		return arr[arr.length-1]
	}
	return instance
}