function Firstgroup(groupName){
    $.ajax({
        type: "POST",
        url:"SLGFindGroup.php",
        data: {
            functionName: "GroupOneSessionStart",
            groupName: groupName

        },
        success: function(response){
            console.log("Working");
            console.log(response);
            window.location.href = 'shortLinksIndex.php';
        },
        error: function(){
            console.log("It biffed");
        }
    })
}
function Secondgroup(groupName){
    $.ajax({
        type: "POST",
        url:"SLGFindGroup.php",
        data: {
            functionName: "GroupTwoSessionStart",
            groupName: groupName

        },
        success: function(response){
            console.log("Working");
            console.log(response);
            window.location.href = 'shortLinksIndex.php';
        },
        error: function(){
            console.log("It biffed");
        }
    })
}
function Thirdgroup(groupName){
    $.ajax({
        type: "POST",
        url:"SLGFindGroup.php",
        data: {
            functionName: "GroupThreeSessionStart",
            groupName: groupName

        },
        success: function(response){
            console.log("Working");
            console.log(response);
            window.location.href = 'shortLinksIndex.php';
        },
        error: function(){
            console.log("It biffed");
        }
    })
}