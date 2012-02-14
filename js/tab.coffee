(($) ->
	$lis = $("#navigation li")	
	$lis.find('a').click ->
		#tab
		$lis.removeClass('selected')
		$selected = $(@).parent('li')
		$selected.addClass('selected')	

		#content
		index = $lis.index($selected)
		$(".project").addClass('hidden')
		$('.tab' + index).removeClass('hidden')
		false

	return
)(jQuery);