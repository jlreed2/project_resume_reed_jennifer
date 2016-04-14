$( document ).ready( function( ) {

	//Sticky plugin:
	$( '.pinned' ).sticky( { topSpacing:0 } );

	//Written code - adds new paragraph under each selected element
	$( '#bsb' ).after( '<p>Dec 2013 - present</p>' );
	$( '#junior' ).after( '<p>May 2012 - October 2013</p>' );
	$( '#nelsen' ).after( '<p>July 2009 - May 2012</p>' );
	$( '#uf' ).after( '<p>Expected graduation Dec 2016</p>' );
	$( '#asu' ).after( '<p>2004 - 2008</p>' );
} );
