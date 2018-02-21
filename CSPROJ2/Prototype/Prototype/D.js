//Getting The Link
var url = window.location.href
var split1 = url.split('//')[1];   // Get the string except the protocol.
var split2 = split1.split('/')[0];    // Get the domain url.
// Get top domain url.
var domain = split2;
if (split2.substring(0, 4) == 'www.')
    domain = split2.slice(4)


//Comparing The Link 
var str =['google.com.ph', 'ready','gmanetwork.com']; //Fake News Links
var searchFor = domain;
console.log(domain);
// This is alternative way of typing if (-1*str.indexOf('a') <= 0)
if (~str.indexOf(searchFor)) {
  // searchFor is in the string
  alert("true")
} else {
  // searchFor is not in the string
  alert("false")
}