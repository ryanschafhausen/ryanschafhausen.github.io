
(function ($) {

	$.fn.NavJumboPlugin = function (options) {

		settings = $.extend({
		    jumboH: "SashaDog",
            jumboP: " "
		},
		options);

	    $(this).html(setNavJumboHtml());

		return this;
	};

	function setNavJumboHtml() {
		
		return '<nav class="navbar navbar-default navbar-fixed-top">' +
					 '<div class="container-fluid">' +
						'<div class="navbar-header">' +
							'<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">' +
								'<span class="sr-only">Toggle navigation</span>' +
								'<span class="icon-bar"></span>' +
								'<span class="icon-bar"></span>' +
								'<span class="icon-bar"></span>' +
							'</button>' +
							'<a class="navbar-brand" href="index.html">SashaDog</a>' +
						'</div>' +
						'<div id="navbar" class="navbar-collapse collapse">' +
							'<ul class="nav navbar-nav navbar-right">' +
								'<li><a href="blog.html">Blog</a></li>' +
								'<li><a href="resources.html">Resources</a></li>' +
								'<li><a href="contact.html">Contact</a></li>' +
							'</ul>' +
						'</div>' +
					'</div>' +
				'</nav>' +	
				'<div class="bg"></div>' +
				'<div class="jumbotron">' +
					'<h1>' + settings.jumboH + '</h1>' +
					'<p class="lead">' + settings.jumboP + '</p>' +
				'</div>';	
	}
	
}(jQuery));
