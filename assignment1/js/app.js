!function(){"use strict";function t(n,o){n.str="",n.status="",n.clr="",n.display=function(){var t=function(t){for(var n=t.trim().split(","),o=n.length,r=0,c=0;c<o;c++)""!=n[c]&&" "!=n[c]&&r++;return r>=1&&r<=3?"Enjoy!":0==r?"empty!":"Too much!"}(n.str);n.status=t,"Enjoy!"==n.status?n.clr="green":"Too much!"==n.status?n.clr="red":n.clr=""},console.log(o.annotate(t))}angular.module("lunchCheck",[]).controller("lunchCheckController",t),t.$inject=["$scope","$injector"]}();
