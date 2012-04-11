(function( $ ){
	var schema = {
		properties: {
			target: {type: 'string', required: true},
			width: {type: 'integer'},
			height: {type: 'integer'},
			padding: {type: 'integer'},
			ticksx: {type: 'integer'},
			ticksy: {type: 'integer'},
			data: {
				description: "each series is a list of 2-tuples of numbers",
				required: true,
				type: 'array',
				items: {
					type: 'array',
					items: {
						type: 'array',
						minItems: 2,
						maxItems: 2,
						items: {
							type: 'number'
						}
					}
				}
			}
		}
	};

  var methods = {
  about : function() { 
      return {
      name: "linegraph",
      author: "Tobias Paczian",
      version: "1.0",
      requires: [ 'd3.min.js' ],
      options: { 'width': 800,
		 'height': 600,
		 'padding': 40,
		 'target': 'chart',
		 'ticksx': 10,
		 'ticksy': 10,
		 'data': 'example_data()' },
      classes: [ 'axis-text',
		 'color#',
		 'rule',
		 'axis' ],
      data_format: schema.properies.data.description
      }
    },
  example_data : function() {
      return [ [ [ 0, 0 ], [ 1, 1 ], [ 2, 2 ], [ 3, 3 ], [ 4, 4 ], [ 5, 5 ] ], [ [ 0, 5 ], [ 1, 4 ], [ 2, 3 ], [ 3, 2 ], [ 4, 1 ], [ 5, 0 ] ] ];
    },
  render : function( settings ) {
      
      this.options = { width: 450,
		       height: 450,
		       padding: 40,
		       target: "chart",
		       ticksx: 10,
		       ticksy: 10,
		       data: [] };
      $.extend (this.options, settings);

	  var check = window.json.validate(this.options, schema);
	  if (!check['valid']) {
		  $.error( check['errors'] );
	  }
	  
      document.getElementById(this.options.target).innerHTML = "";
      
      var maxx = 0;
      var maxy = 0;
      for (i=0; i<this.options.data.length; i++) {
	for (h=0; h<this.options.data[i].length; h++) {
	  if (this.options.data[i][h][0] > maxx) {
	    maxx = this.options.data[i][h][0];
	  }
	  if (this.options.data[i][h][1] > maxy) {
	    maxy = this.options.data[i][h][1];
	  }
	}
      }
      
      var x = d3.scale.linear().domain([0, maxx]).range([0, this.options.width]);
      var y = d3.scale.linear().domain([0, maxy]).range([this.options.height, 0]);
      
      var vis = d3.select(document.getElementById(this.options.target))
      .append("svg")
      .attr("width", this.options.width + this.options.padding * 2)
      .attr("height", this.options.height + this.options.padding * 2)
      .append("g")
      .attr("transform", "translate(" + this.options.padding + "," + this.options.padding + ")");
      
      var rules = vis.selectAll("g.rule")
      .data(x.ticks(this.options.ticksx))
      .enter().append("g")
      .attr("class", "rule");
      
      rules.append("line")
      .attr("x1", x)
      .attr("x2", x)
      .attr("y1", 0)
      .attr("y2", this.options.height - 1);
      
      rules.append("line")
      .attr("class", function(d) { return d ? null : "axis"; })
      .attr("y1", y)
      .attr("y2", y)
      .attr("x1", 0)
      .attr("x2", this.options.width + 1);
      
      rules.append("text")
      .attr("x", x)
      .attr("y", this.options.height + 3)
      .attr("dy", ".71em")
      .attr("text-anchor", "middle")
      .attr("class", "axis-text")
      .text(x.tickFormat(this.options.ticksx));
      
      rules.append("text")
      .attr("y", y)
      .attr("x", -3)
      .attr("dy", ".35em")
      .attr("text-anchor", "end")
      .attr("class", "axis-text")
      .text(y.tickFormat(this.options.ticksy));
      
      vis.selectAll("path")
      .data(this.options.data)
      .enter().append("svg:path")
      .attr("d", d3.svg.line()
	    .x(function(d) { return x(d[0]); })
	    .y(function(d) { return y(d[1]); }))
      .attr("class", function(d,i) { return "color"+i })
      .on('click', function(d,i) { if (this.className.baseVal == 'selected') {
	    this.className.baseVal = this.oldClassName;
	  } else {
	    this.oldClassName = this.className.baseVal;
	    this.className.baseVal = "selected";
	    dragData = d;
	  }});

      return this;
    }
  };
  
  $.fn.RendererLinegraph = function( method ) {
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.RendererLinegraph' );
    }
  };

})( jQuery );
