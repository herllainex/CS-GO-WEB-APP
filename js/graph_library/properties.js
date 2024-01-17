/*
 * Contains visualization properties (SVG objects size, color, etc.)
 * Make sure to add the corresponding constants to the constant.js file
 */

/*
 * Widget
 */

const MAIN_SVG_WIDTH = 900;
const MAIN_SVG_HEIGHT = 500;
const PSEUDOCODE_SVG_WIDTH = 300;
const PSEUDOCODE_SVG_HEIGHT = 400;

/*
 * GraphVertexWidget
 */

const graphVertexProperties = {
  "innerVertex":{
    "r": 14,
    "width":30,
    "height": 30,
    "stroke-width": 2,
    "default":{
      "fill": "#eee",
      "stroke": "#fff"
    },
    "normal_blue":{
      "fill": "#2ebbd1",
      "stroke": "#fff"
    },
    "highlighted":{
      "fill": "#3F62FE",
      // "fill": "#ff8a27",
      "stroke": "#fff"
    },
    "highlighted_rect":{
      "fill": "#3F62FE",
      // "fill": "#ff8a27",
      "stroke": "#fff"
    },
    "traversed":{
      "fill": "#89CFF0",
      "stroke": "#fff"
    },    
    "result":{
      "fill": "#f7e81e",
      "stroke": "#fff"
    },
    "rect": {
      "fill": "#eee",
      "stroke": "#fff"
    },
    "result_rect": {
      "fill": "#C2D8F9",
      "stroke": "#fff"
    },
	"greenFill":{
      "fill": "#C2D8F9",
      "stroke": "#fff"
    },
	"greenOutline":{
      "fill": "#eee",
      "stroke": "#fff"
    },
	"pinkFill":{
      "fill": "#ed5a7d",
      "stroke": "#fff"
    },
	"pinkOutline":{
      "fill": "#eee",
      "stroke": "#fff"
    },
	"blueFill":{
      "fill": "#2ebbd1",
      "stroke": "#fff"
    },
	"blueOutline":{
      "fill": "#eee",
      "stroke": "#fff"
    },
	"redFill":{
      "fill": "#d9513c",
      "stroke": "#fff"
    },
	"redOutline":{
      "fill": "#eee",
      "stroke": "#fff"
    },
	"greyFill":{
      "fill": "#cccccc",
      "stroke": "#fff"
    },
	"greyOutline":{
      "fill": "#eee",
      "stroke": "#fff"
    }
  },
  "outerVertex":{
    "r": 16,
    "width": 32,
    "height": 32,
    "stroke-width": 2,
    "default":{
      "fill": "#333",
      "stroke": "#333"
    },
    "normal_blue":{
      "fill": "#2ebbd1",
      "stroke": "#333"
    },
    "highlighted":{
      "fill": "#3F62FE",
      // "fill": "#ff8a27",
      "stroke": "#3F62FE",
      // "stroke": "#ff8a27"
    },
    "highlighted_rect":{
      "fill": "#3F62FE",
      // "fill": "#ff8a27",
      "stroke": "#333"
    },
    "traversed":{
      // "fill": "#ff8a27",
      "fill": "#3F62FE",
      "stroke": "#3F62FE"
      // "stroke": "#ff8a27"
    },
    "result":{
      "fill": "#f7e81e",
      "stroke": "#f7e81e"
    },
    "rect":{
      "fill": "#333",
      "stroke": "#333"
    },
    "result_rect":{
      "fill": "#C2D8F9",
      "stroke": "#333"
    },  
	"greenFill":{
      "fill": "#C2D8F9",
      "stroke": "#C2D8F9"
    },
	"greenOutline":{
      "fill": "#C2D8F9",
      "stroke": "#C2D8F9"
    },
	"pinkFill":{
      "fill": "#ed5a7d",
      "stroke": "#ed5a7d"
    },
	"pinkOutline":{
      "fill": "#ed5a7d",
      "stroke": "#ed5a7d"
    },
	"blueFill":{
      "fill": "#2ebbd1",
      "stroke": "#2ebbd1"
    },
	"blueOutline":{
      "fill": "#2ebbd1",
      "stroke": "#2ebbd1"
    },
	"redFill":{
      "fill": "#d9513c",
      "stroke": "#d9513c"
    },
	"redOutline":{
      "fill": "#d9513c",
      "stroke": "#d9513c"
    },
	"greyFill":{
      "fill": "#cccccc",
      "stroke": "#cccccc"
    },
	"greyOutline":{
      "fill": "#cccccc",
      "stroke": "#cccccc"
    }
  },
  "text":{
    "font-size": 16,
    "default":{
      "fill": "#333",
      "font-family": "'Inter', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    },
    "normal_blue":{
      "fill": "#fff",
      "font-family": "'Inter', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    },
    "highlighted":{
      "fill": "#fff",
      "font-family": "'Inter', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    },
    "highlighted_rect":{
      "fill": "#fff",
      "font-family": "'Inter', sans-serif",
      "font-weight": "bold",
      "text-anchor": "left"
    },
    "traversed":{
      "fill": "#3F62FE",
      // "fill": "#ff8a27",
      "font-family": "'Inter', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    },
    "result":{
      "fill": "#fff",
      "font-family": "'Inter', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    },
    "rect":{
      "fill": "#333",
      "font-family": "'Inter', sans-serif",
      "font-weight": "bold",
      "text-anchor": "left"
    },
    "result_rect":{
      "fill": "#fff",
      "font-family": "'Inter', sans-serif",
      "font-weight": "bold",
      "text-anchor": "left"
    },
	"greenFill":{
      "fill": "#fff",
      "font-family": "'Inter', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    },
	"greenOutline":{
      "fill": "#C2D8F9",
      "font-family": "'Inter', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    },
	"pinkFill":{
      "fill": "#fff",
      "font-family": "'Inter', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    },
	"pinkOutline":{
      "fill": "#ed5a7d",
      "font-family": "'Inter', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    },
	"blueFill":{
      "fill": "#fff",
      "font-family": "'Inter', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    },
	"blueOutline":{
      "fill": "#2ebbd1",
      "font-family": "'Inter', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    },
	"redFill":{
      "fill": "#fff",
      "font-family": "'Inter', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    },
	"redOutline":{
      "fill": "#d9513c",
      "font-family": "'Inter', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    },
	"greyFill":{
      "fill": "#fff",
      "font-family": "'Inter', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    },
	"greyOutline":{
      "fill": "#cccccc",
      "font-family": "'Inter', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    }
  }
};

/*
 * GraphEdgeWidget
 */

const graphEdgeProperties = {
  "animateHighlightedPath":{
      "stroke": "#3F62FE",
      // "stroke": "#ff8a27",
      "stroke-width": 3
  },
  "path":{
    "stroke-width": 2,
    "default":{
      "stroke": "#333"
    },
    "highlighted":{
      "stroke": "#3F62FE",
      // "stroke": "#ff8a27"
    },
    "traversed":{
      "stroke": "#3F62FE",
      // "stroke": "#ff8a27"
    },
	"green":{
      "stroke": "#C2D8F9"
    },
	"pink":{
      "stroke": "#ed5a7d"
    },
	"blue":{
      "stroke": "#2ebbd1"
    },
	"red":{
      "stroke": "#d9513c"
    },
	"grey":{
      "stroke": "#cccccc"
    }
  },
  "weight":{
    "font-size": 12,
    "default":{
      "startOffset": "75%",
      "dy": -5,
      "fill": "#333",
      "font-family": "'PT Sans', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    },
    "highlighted":{
      "startOffset": "75%",
      "dy": -5,
      "fill": "#3F62FE",
      // "fill": "#ff8a27",
      "font-family": "'PT Sans', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    },
    "traversed":{
      "startOffset": "75%",
      "dy": -5,
      "fill": "#3F62FE",
      // "fill": "#ff8a27",
      "font-family": "'PT Sans', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    },
	"green":{
      "startOffset": "75%",
      "dy": -5,
      "fill": "#C2D8F9",
      "font-family": "'PT Sans', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    },
	"pink":{
      "startOffset": "75%",
      "dy": -5,
      "fill": "#ed5a7d",
      "font-family": "'PT Sans', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    },
	"blue":{
      "startOffset": "75%",
      "dy": -5,
      "fill": "#2ebbd1",
      "font-family": "'PT Sans', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    },
	"red":{
      "startOffset": "75%",
      "dy": -5,
      "fill": "#d9513c",
      "font-family": "'PT Sans', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    },
	"grey":{
      "startOffset": "75%",
      "dy": -5,
      "fill": "#cccccc",
      "font-family": "'PT Sans', sans-serif",
      "font-weight": "bold",
      "text-anchor": "middle"
    }
  }
}

/*
 * marker.js
 * Currently this file doesn't exist; markers are placed in GraphEdgeWidget.js
 */

const ARROW_MARKER_WIDTH = 3;
const ARROW_MARKER_HEIGHT = 3;
const ARROW_REFX = 9;
const ARROW_FILL = "#333";