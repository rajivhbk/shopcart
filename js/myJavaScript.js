			function flyToCart(productimg,cart) {
			var productimgclone = $(productimg).clone();
			$(productimgclone).offset({
				top: productimg.offset().top,
				left: productimg.offset().left
			})
			.css({
				"position": "absolute",
				"z-index": "100"
			})
			.appendTo($("body"));
			$(productimgclone).animate({
				top:cart.offset().top,
				left:cart.offset().left,
				width:20,
				height:20,
				opacity: 0.2
			},500,'swing', 
			function() {
				$(cart).fadeOut("fast", function() {
					$(cart).fadeIn("fast", function(){
						$(productimgclone).fadeOut("fast", function() {
							$(productimgclone).remove();
						});
					});
				});
			});
		};

		

		function addCartContents(finalCart,index) {
			for(index;index<finalCart.length;index++) {
				$.each(finalCart[index], function(key,v){
					
					if(key == "name"){
						$(".minicartrow").append($("<p></p>").text(v));
					}//product name end
					if(key == "pimg"){
						var image = document.createElement("IMG");
						image.src= v;
						$(".minicartrow").append(image);
					}// pimg end
					if (key == "vType") {
						$(".minicartrow").append($("<span></span>").text(v));
						$(".minicartrow").append($("<span> X </span>"));
					}//vtype end
					if (key == "quantity") {
						$(".minicartrow").append($("<span></span>").text(v));
						$(".minicartrow").append($("<br/>"));
					}//quantity end
					if (key == "subTotal") {
						$(".minicartrow").append($("<span>SUB TOTAL:</span>"));
						$(".minicartrow").append($("<p></p").text(v));
						$(".minicartrow").append($("<hr/>"));
					}//subtotal end
					
				});
				index = index + 1;
			};
		};