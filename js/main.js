(function($){
    //1.create element by getting title of img.
    //2.set css: position absloute, opaque, title color white
    //3.add item.

    var option = {
	"position":"absolute",
	"opacity" : "0.7",
	"color" : "white",
	"width" : "240px",
	"left" : "5px",
	"bottom" : "5px",
	"background-color" : "#000",
	"text-align" : "right"
    };

    var titleElement = function(title){
	var str = "<p>" + "hogehoge" + "</p>";
	return $(str).css(option);
    };

    var $element;

    $("li").hover(
			function(){
			    var $this = $(this);
			    $this.stop(true);
			    var title = "hogehoge";//$this.find("img").attr('title');
			    $element = titleElement(title);
			    $this.append($element);
			},
			function(){
			    $(this).stop(true);
			    $element.remove();
			}
			);
})(jQuery);




