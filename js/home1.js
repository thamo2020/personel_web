    var sliderOptions1={
    sliderId="slider1"
 };
   var sliderOptions2={
   	sliderId:"slider2"
   };
   {
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


	var imageSlider1=new mcImgSlider(sliderOptions1);
	var imageSlider1=new mcImgSlider(sliderOptions2);