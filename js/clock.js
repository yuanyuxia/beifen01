// 时钟js

 //use requestAnimationFrame for smoothness (shimmed with setTimeout fallback)
window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
                window.setTimeout(callback, 1000 / 60);
            };
  })();
  
  //initialize the clock in a self-invoking function
  (function clock(){ 
      var hour = document.getElementById("hour"),
          min = document.getElementById("min"),
          sec = document.getElementById("sec");
      //set up a loop
      (function loop(){
          requestAnimFrame(loop);
          draw();
      })();
      //position the hands
      function draw(){
          var now = new Date(),//now
              then = new Date(now.getFullYear(),now.getMonth(),now.getDate(),0,0,0),//midnight
              diffInMil = (now.getTime() - then.getTime()),// difference in milliseconds
              h = (diffInMil/(1000*60*60)),//hours
              m = (h*60),//minutes
              s = (m*60);//seconds
          //rotate the hands accordingly
          sec.style.webkitTransform = "rotate(" + (s * 6) + "deg)";
          hour.style.webkitTransform = "rotate(" + (h * 30 + (h / 2)) + "deg)";
          min.style.webkitTransform = "rotate(" + (m * 6) + "deg)";
      } 
  })(); 



//   天气js



			//默认页面一开始加载就有数据  调用封装函数 传参
            getWeather('北京',"post",".box1");
		   
			function getWeather(location,type,el){
				var url = "http://restapi.amap.com/v3/weather/weatherInfo";
		 		var postData = {
	                key: "dfb9a576fbcb2c9a13a65ab736e47004",
	                city: location,
	                extensions: "all"
				};

				$.ajax({
					url:url,
					type:type,
					data:postData,
					success:function(status,data){
						console.log(status);
						var html1 = "";
						var html2 = "";
						var htmlOne = "";
						if(status.forecasts.length == 1){
							$(".data1").css("display","none");
							$(".data2").css("display","none");
							$(".data3").css("display","block");
							
							var weatherData = status.forecasts[0].casts;
							console.log(status.forecasts[0].province+"省"+status.forecasts[0].city);
							$(".cityName").html(status.forecasts[0].province+"省"+status.forecasts[0].city);
							$(".left_data").html(status.forecasts[0].reporttime	);
							$(".left_weather").html(weatherData[0].dayweather+" \ "+weatherData[0].nightweather);
							$(".left_temp").html(weatherData[0].daytemp+" \ "+weatherData[0].nighttemp);
							$(".left_wind1").html(weatherData[0].daywind+" \ "+weatherData[0].nightwind);
						    $(".left_wind2").html(weatherData[0].daypower+" \ "+weatherData[0].nightpower);
							
							
							for(var i=1;i<weatherData.length;i++){
								htmlOne += 
								'<li>'+weatherData[i].date+'</li><li>星期'+weatherData[i].week+'</li><li>'+weatherData[i].dayweather+'"\"'+weatherData[i].nightweather+'</li><li>'+weatherData[i].daytemp+'"\"'+weatherData[i].nighttemp+'</li><li>'+weatherData[i].daywind+'"\"'+weatherData[i].nightwind+'</li><li>'+weatherData[i].daypower+'"\"'+weatherData[i].nightpower+'</li>'
							}
							$(".dataOne").html(htmlOne);
							
							
						}else{
							$(".data1").css("display","block");
							$(".data2").css("display","block");
							$(".data3").css("display","none");
						}
						
						
					},
					error:function(status){
					}
				})
				
			}
		

		
			$(".seachBtn").click(function(){
			   getWeather($(".intCity").val(),"post",".box1");
			})
			  
			function addHtmlTwo(){
				
			}
			function addHtmlOne(){
				
			}
			
			