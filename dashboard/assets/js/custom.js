$('#calendar').datepicker({
		});

!function ($) {
    $(document).on("click","ul.nav li.parent > a ", function(){
        if($(this).hasClass('collapsed')){
					$(this).find('em').toggleClass("fa-chevron-up");
					$(".sidebar span.icon").find('em:first').addClass("fa-chevron-down");
				}else{
					$(this).find('em').toggleClass("fa-chevron-down");
					$(".sidebar span.icon").find('em:first').addClass("fa-chevron-up");

				}
    });
}

(window.jQuery);
	$(window).on('resize', function () {
  if ($(window).width() > 768) $('#sidebar-collapse').collapse('show')
})
$(window).on('resize', function () {
  if ($(window).width() <= 767) $('#sidebar-collapse').collapse('hide')
})

$(document).on('click', '.panel-heading span.clickable', function(e){
    var $this = $(this);
	if(!$this.hasClass('panel-collapsed')) {
		$this.parents('.panel').find('.panel-body').slideUp();
		$this.addClass('panel-collapsed');
		$this.find('em').removeClass('fa-toggle-up').addClass('fa-toggle-down');
	} else {
		$this.parents('.panel').find('.panel-body').slideDown();
		$this.removeClass('panel-collapsed');
		$this.find('em').removeClass('fa-toggle-down').addClass('fa-toggle-up');
	}
})

$('.datatable').dataTable({
	order: [],
	'columnDefs': [
			{
					'orderable': false,
					'targets': ['no-sort']
			}
	],
	'dom': '<"row"<"col-sm-12 text-right">> <"row"<"col-sm-6"><"col-sm-6">> <"row"<"col-sm-12"t>> <"row"<"col-sm-6"><"col-sm-6"p>>',
});

// file input
var inputs = document.querySelectorAll( '.input-file' );
Array.prototype.forEach.call( inputs, function( input )
{
	var label	 = input.nextElementSibling,
		labelVal = label.innerHTML;

	input.addEventListener( 'change', function( e )
	{
		var fileName = '';
		if( this.files && this.files.length > 1 )
			fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
		else
			fileName = e.target.value.split( '\\' ).pop();

		if( fileName )
			label.querySelector( 'span' ).innerHTML = fileName;
		else
			label.innerHTML = labelVal;
	});
});

$(document).ready(function(){
	//custom scroll
	$('.scrollable').mCustomScrollbar({
    theme: 'minimal-dark',
  });
  //star rating
  var score = $('.rate-result').data('score');
  $('.rate-result').raty({
		readOnly: true,
		starType: 'font'
	},'score',score);
  $('.rate-input').raty({
		readOnly: false,
		starType: 'font'
	});

	// popover
	$('[data-toggle="popover"]').popover({placement: 'top'});

});

//mahasiswa homepage horiz scroll auto width
// var jmlcatitem = $('.cfc-item').length;
// var lebar = (124*jmlcatitem)+100;
// $('.cfc-list').width(lebar);
