    
	
    var image1=new Image()
	image1.src="C:/Users/thamo/Pictures/blog.png" 
	var image2=new Image()
	image2.src="C:/Users/thamo/Pictures/blog2.png" 
	
		var step=1
		function slideit(){
			document.images.slide.src=eval("image"+step+".src")
			if (step<2) {
				step++
			}
			else
				step=1
			setTimeout("slideit()",2000)

		}
		slideit()
		
