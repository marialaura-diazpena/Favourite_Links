var linkArray = [];

function addLink() {
    var inputLink = document.getElementById('link').value;

    var protocol = "https://";
    var protocolSearch = inputLink.search(protocol);

    if ( protocolSearch >= 0 ){
        var inputLink = inputLink.substring(protocol.length, inputLink.length);
    }

    var newLink = "<a target=\"_blank\" href=\"https://"+inputLink+"\">"+inputLink+"</a>";


    linkArray.push(newLink);

    displayLinks();

}

function displayLinks(){

    var linkDisplay = "<ul>";
    for( var i=0; i<linkArray.length; i++) {
        linkDisplay +="<li>";
        linkDisplay += linkArray[i]; 
        linkDisplay += "</li>";

    }

    linkDisplay += "</ul>";

    document.getElementById('link-display').innerHTML = linkDisplay;
}
