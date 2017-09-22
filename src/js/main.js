window.addEventListener('deviceorientation',function(e){
	var alpha = Math.round(e.alpha); //compass direction
	var beta = Math.round(e.beta); //tilt front back
	var gamma = Math.round(e.gamma); //tilt left right
	document.getElementById("test").innerHTML = "- tilt left/right: " + gamma + "<br />- tilt front/back: " + beta + "<br />- compass direction: " + alpha;
},false);

/*
var pos = ['x','y','z'],
	ang = ['alpha','beta','gamma'];

;(function(){
	var list = d3.select('ul');
	gyro.startTracking(function(o) {
	  //o = {x: 12,y: 45,z: 3,alpha: .2,beta: .6,gamma: .45};
	  list.selectAll('li')
		.data(function(){
		  return d3.merge([pos,ang])
			.map( function(d){
			  return {
				key:d,
				value: o[d]
			  }
			})
		})
		.call( function(s){
		  s.enter()
		   .append('li')
		})
		.each( function(d){
		  d3.select(this).html( function(){
			return '<b>'+d.key+'</b> - ' + d.value
		  })
		})

	  })        
  })();

*/


pannellum.viewer('panorama', {   
	"default": {
		"firstScene": "home",
		"author": "Valtech DK",
		"sceneFadeDuration": 1000,
		"autoLoad": true
	},
	
	
	"scenes": {
		"home": {
			"title": "Entrance",
			"type": "equirectangular",
			"panorama": "/images/entrance.jpg",
			"yaw": 0,
			"pitch": -10,
			"hotSpots": [
				{
					"pitch": -10,
					"yaw": 65,
					"type": "scene",
					"text": "Col1-Row1",
					"sceneId": "col1-row1"
				}
			]
		},
		"col1-row1": {
			"title": "Col1-Row1",
			"type": "equirectangular",
			"panorama": "/images/col1-row1.jpg",
			"yaw": 45,
			"pitch": -10,
			"hotSpots": [
				{
					"pitch": -10,
					"yaw": -125,
					"type": "scene",
					"text": "Entrance",
					"sceneId": "home"
				},
				{
					"pitch": -10,
					"yaw": 85,
					"type": "scene",
					"text": "Col2-Row1",
					"sceneId": "col2-row1"
				}
			]
		},
		"col2-row1": {
			"title": "Col2-Row1",
			"type": "equirectangular",
			"panorama": "/images/col2-row1.jpg",
			"yaw": 0,
			"pitch": -10,
			"hotSpots": [
				{
					"pitch": -10,
					"yaw": -90,
					"type": "scene",
					"text": "Col1-Row1",
					"sceneId": "col1-row1"
				},
				{
					"pitch": -10,
					"yaw": 0,
					"type": "scene",
					"text": "Col2-Row2",
					"sceneId": "col2-row2"
				}
			]
		},
		"col2-row2": {
			"title": "Col2-Row2",
			"type": "equirectangular",
			"panorama": "/images/col2-row2.jpg",
			"yaw": 0,
			"pitch": -10,
			"hotSpots": [
				{
					"pitch": -10,
					"yaw": -180,
					"type": "scene",
					"text": "Col2-Row1",
					"sceneId": "col2-row1"
				},
				{
					"pitch": -10,
					"yaw": 8,
					"type": "scene",
					"text": "Col2-Row3",
					"sceneId": "col2-row3"
				},
				{
					"pitch": -10,
					"yaw": 95,
					"type": "scene",
					"text": "Col3-Row2",
					"sceneId": "col3-row2"
				}
			]
		},
		"col2-row3": {
			"title": "Col2-Row3",
			"type": "equirectangular",
			"panorama": "/images/col2-row3.jpg",
			"yaw": 0,
			"pitch": -10,
			"hotSpots": [
				{
					"pitch": -10,
					"yaw": -180,
					"type": "scene",
					"text": "Col2-Row2",
					"sceneId": "col2-row2"
				}
			]
		},
		"col3-row2": {
			"title": "Col3-Row2",
			"type": "equirectangular",
			"panorama": "/images/col3-row2.jpg",
			"yaw": 0,
			"pitch": -10,
			"hotSpots": [
				{
					"pitch": -10,
					"yaw": -185,
					"type": "scene",
					"text": "Col2-Row2",
					"sceneId": "col2-row2"
				}
			]
		},
	}
});