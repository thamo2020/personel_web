    var image1=new Image()
	image1.src="images/computerb.png" 
	var image2=new Image()
	image2.src="images/girl.png" 
	var image3=new Image()
	image3.src="images/boy.png" 
	var image4=new Image()
	image4.src="images/code.png" 


		var step=1
		function slideit(){
			document.images.slide.src=eval("image"+step+".src")
			if (step<4) {
				step++
			}
			else
				step=1
			setTimeout("slideit()",2000)

		}
		slideit()
		
