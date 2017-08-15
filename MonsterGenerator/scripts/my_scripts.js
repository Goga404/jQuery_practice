$(document).ready(function () {
    
    // Lightning part
	goLightning();
    window.onblur = stopLightning;
    window.onfocus = goLightning;
    var int1, int2, int3;
    
    function goLightning() {
        int1 = setInterval( function() {
            lightning_one();
        }, 4000);
        int2 = setInterval( function() {
            lightning_two();
        }, 5000);
        int3 = setInterval( function() {
            lightning_three();
        }, 7000);
    }
    
    function stopLightning() {
        window.clearInterval(int1);
        window.clearInterval(int2);
        window.clearInterval(int3);
    }
    
    function lightning_one() {
        $("#container #lightning1").fadeIn(250).fadeOut(250);
    };
    
    function lightning_two() {
        $("#container #lightning2").fadeIn(250).fadeOut(250);
    };
    function lightning_three() {
        $("#container $lightning3").fadeIn(250).fadeOut(250);
    };
    
    // Face move part
    var clix = [0, 0, 0, 0]; // head, eyes, nose, mouth
    $("#head").click( function() {
        moveMe(0, this);
    });
    $("#eyes").click( function() {
        moveMe(1, this);
    });
    $("#nose").click( function() {
        moveMe(2, this);
    });
    $("#mouth").click( function() {
        moveMe(3, this);
    });
    
    function getPosition(obj) {
        var l = parseInt($(obj).css("left"));
        var i = -l / 367;
        return i;
    }
    
    function moveMe(i, obj) {
        var n = getPosition(obj);
        if (n < 9) {
            $(obj).animate({left:"-=367px"}, 500);
            n++;
        } else {
            n = 0;
            $(obj).animate({left:"0px"}, 500);
        }
    }
    
    // buttons func part
    function rand(n) {
        return Math.floor(Math.random() * (n+1));
    }
    
    function moveRand(i, obj) {
        if (i < 9) {
            $(obj).css("left", 0);
            while (i != 0) {
                $(obj).animate({left:"-=367px"}, 100);
                i--;
            }   
        } else {
            $(obj).animate({left:"0px"}, 500);
        }
    }
    
    function randomFace() {
        moveRand(rand(9), $("#head"));
        moveRand(rand(9), $("#eyes"));
        moveRand(rand(9), $("#nose"));
        moveRand(rand(9), $("#mouth"));
    }
    
    $(".btn_random").click( function() {
        randomFace();
    });
    
    function restart(obj) {
        $(obj).animate({left:"0px"}, 500);
    }
    
    $(".btn_restart").click( function() {
        restart($("#head"));
        restart($("#eyes"));
        restart($("#nose"));
        restart($("#mouth"));
    });

});//end doc.onready function
