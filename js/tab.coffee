(($) ->
	$li = $("#navigation li")	
	$li.find('a').click ->
		$li.removeClass('selected')
		$(@).parent('li').addClass('selected')	
		return false
	return 
)(jQuery);