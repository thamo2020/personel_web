   
    var image1=new Image()
	image1.src="C:/Users/thamo/Pictures/newpic4.png" 
	var image2=new Image()
	image2.src="C:/Users/thamo/Pictures/newpic5.png" 
	var image3=new Image()
	image3.src="C:/Users/thamo/Pictures/newpic6.png" 
	var image4=new Image()
	image4.src="C:/Users/thamo/Pictures/newpic7.png" 
	var image5=new Image()
	image5.src="C:/Users/thamo/Pictures/newpic8.png" 
	var image6=new Image()
	image6.src="C:/Users/thamo/Pictures/newpic9.png"
	var image7=new Image()
	image7.src="C:/Users/thamo/Pictures/newpic10.png"
	
 
 
			var step=1
		function slideit(){
			document.images.slide.src=eval("image"+step+".src")
			if (step<7) {
				step++
			}
			else
				step=1
			setTimeout("slideit()",2000)

		}
		slideit()
		