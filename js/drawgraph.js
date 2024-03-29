function write(bool1,bool2)
{
	var toWrite = '\
	<script>var JSONresult;</script>\
	  <link rel="stylesheet" href="./visual.css">\
	  <div id="main">\
	  	<div id="draw-status"><p>Status</p></div>\
	  	<div id="draw-warn"><p>No Warning</p></div>\
	  	<div id="draw-err"><p>No Error</p></div>\
	    <div id="viz">\
\
	      <svg onClick = "GraphVisu('+bool1+','+bool2+'); " width="960" height="450"><defs><marker id="end-arrow" viewBox="0 -5 10 10" refX="6" markerWidth="3" markerHeight="3" orient="auto"><path d="M0,-5L10,0L0,5" fill="#000"></path></marker></defs><path class="link dragline hidden" d="M0,0L0,0"></path><g><path class="link" d="M108.48528137423857,108.48528137423857L191.51471862576142,191.51471862576142"></path><path class="link" d="M208.48528137423858,208.48528137423858L291.5147186257614,291.5147186257614"></path></g><g><g><circle class="node" r="16" cx="100" cy="100" style="fill: rgb(238, 238, 238);"></circle><text x="100" y="105.33333333333333" class="id">0</text></g><g><circle class="node" r="16" cx="200" cy="200" style="fill: rgb(238, 238, 238);"></circle><text x="200" y="205.33333333333334" class="id">1</text></g><g><circle class="node" r="16" cx="300" cy="300" style="fill: rgb(238, 238, 238);"></circle><text x="300" y="305.3333333333333" class="id">2</text></g></g><g></g>\
	      <text x = "400" y = "100"> &bull; Select an empty space to add a vertex</text>\
	      <text x = "400" y = "125"> &bull; Create edges by dragging between vertices</text>\
	      <text x = "400" y = "150"> &bull; Select + Delete to remove a vertex or edge</text>\
	      <text x = "400" y = "175"> &bull; Modify an edge\'s weight by selecting it and pressing Enter</text>\
	      <text x = "400" y = "200"> &bull; Hold down Ctrl to move a vertex</text>\
	    </svg>\
	  </div>\
\
\
	  <div id="drawgraph-actions">\
	    <p onclick=drawCancel()>Cancel</p>\
	    <p onclick=GraphVisu('+bool1+','+bool2+')>Clear</p>\
	    <p onclick=drawDone()>Done</p>\
	    <form id="drawgraph-form">\
	   	</form>\
	  </div>\
\
	';	
	$('#drawgraph').html(toWrite);
	$('#copy').removeAttr('checked');
}
