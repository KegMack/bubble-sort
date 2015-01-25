var n = 30;

function randomSizedBar() {
  var w = Math.floor(Math.random()*500);
  var $bar = $("<div>"+w+"</div>");
  $bar.addClass("bar");
  $bar.css("width", w);
  $bar.value=w;
  return ($bar);
};

function swapElementsOfClass(classType, index1, index2) {
  if(index2 < index1) {
    var temp = index1;
    index1 = index2;
    index2 = temp;
  }
  $($(classType)[index1]).before($(classType)[index2]);
  $($(classType)[index2]).after($(classType)[index1+1]);
  //if(index1) {
  //  setInterval(swapElementsOfClass, 500, classType, index1, index2);
 // }
 //setTimeout(swapElementsOfClass, 500);
};

function bubbleSort(nodeLocation) {
  var elementArray = $(nodeLocation);
  var n = elementArray.length;
  var wasSwapped = true;
  while(wasSwapped) {
    wasSwapped = false;
    for(var i=n-1; i>0; i--) {
      if(Number($(elementArray[i]).text()) < Number($(elementArray[i-1]).text())) {
        //setTimeout(function() {
        swapElementsOfClass(elementArray, i, i-1);//},500);
        elementArray = $(nodeLocation);
        wasSwapped = true;
      };
    };
  };
};

function initializeDiagram(nodeLocation) {
  for(var i=0; i<n; i++) {
    $(nodeLocation).append(randomSizedBar());
  }
}

$(function() {
  initializeDiagram('#sorting-animation');
  $('#start-button').on('click', function() {
      bubbleSort('#sorting-animation div');
  });
  $('#randomize-button').on('click', function() {
    $('#sorting-animation').empty();
    initializeDiagram('#sorting-animation');
  });
});
