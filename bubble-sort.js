var n = 30,
    wasSwapped = true,
    $elementArray;


function initializeDiagram(nodeLocation) {
  $('#sorting-animation').empty();
  for(var i=0; i<n; i++) {
    $(nodeLocation).append(randomSizedBar());
  }
  $elementArray = $('#sorting-animation div');
}

function randomSizedBar() {
  var w = Math.floor(Math.random()*500);
  var $bar = $("<div>"+w+"</div>");
  $bar.addClass("bar");
  $bar.css("width", w);
  $bar.value=w;
  return ($bar);
};

function swapElements(index1, index2) {
  if(index2 < index1) {
    var temp = index1;
    index1 = index2;
    index2 = temp;
  }
  $($elementArray[index1]).before($elementArray[index2]);
  $($elementArray[index2]).after($elementArray[index1+1]);
  $elementArray = $('#sorting-animation div');

};

function compareNextAndSwap(index)  {
  if(Number($($elementArray[index]).text()) < Number($($elementArray[index-1]).text())) {
      swapElements(index, index-1);
      wasSwapped = true;
  }
  if(index > 0) {
    setTimeout(compareNextAndSwap, 100, index-1);
  }
  else {
    bubbleSort(n);
  }
}

function bubbleSort(index) {
  if(wasSwapped) {
    wasSwapped = false;
    compareNextAndSwap(index);
  };
};

$(function() {
  initializeDiagram('#sorting-animation');
  $('#start-button').on('click', function() {
    bubbleSort(n-1);
  });
  $('#randomize-button').on('click', function() {
    initializeDiagram('#sorting-animation');
  });
  $('#numberOfElements').change(function() {
    n = $('#numberOfElements').val();
    initializeDiagram('#sorting-animation');
  })
});
