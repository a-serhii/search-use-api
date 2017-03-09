var our_url;

$(document).ready ( function(){
  $(".search__button").on('click', function(){
    $('#rezhere').empty();
    our_url = 'http://api.duckduckgo.com/?q=' + $("#q").val()+ '&format=json&pretty=1';
    $.ajax({
      url: our_url + '&callback=Callback&context=?',
      dataType: 'jsonp'
    });
  });
});

$(document).keypress(function(e) {
  if(e.which == 13) {
    $('#rezhere').empty();
    our_url = 'http://api.duckduckgo.com/?q=' + $("#q").val()+ '&format=json&pretty=1';
    $.ajax({
      url: our_url + '&callback=Callback&context=?',
      dataType: 'jsonp'
    });
  }
});

function Callback(data){ 
  var txtHeading = '<h2>' + data.Heading+ '</h2>'; 
  var txtAbstract = '<p>' + data.Abstract+ '</p>';
  var txtRelatedTopics;
  for (var i = 0; i < data.RelatedTopics.length; i++) {
    txtRelatedTopics += '<p>' + data.RelatedTopics[i].Result + '</p>'; 
  };
  $('#rezhere').append(txtHeading + txtAbstract + txtRelatedTopics);
};


