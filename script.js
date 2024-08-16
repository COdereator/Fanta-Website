var tl=gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end:"60% 50%",
    marker:true,
    scrub:true, 
}})
tl.to("#fanta",{
    top:"118%",
    left:"13%",
},'orange')
tl.to("#slice",{
    top:"153%",
    rotate:"360deg",
    left:"24%",
},'orange')
tl.to("#orange",{
    width:"23%",
    top:"155%",
    left:"73%",
},'orange')
tl.to("#leaf2",{ 
    top:"110%",
    rotate:"255deg",
    left:"80%",
},'orange')
tl.to("#leaf3",{ 
    top:"110%",
    rotate:"145deg",
    left:"0%",
},'orange')
var t2=gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 95%",
    end:"50% 50%",
    marker:true,
    scrub:true, 
}})
t2.from("#coca",{
    top:"50%",
    right:"100%",
    rotate:"-90deg",
},"black")
t2.from("#lemon",{
    right:"300%",
    rotate:"-360deg",
},"black")
t2.from("#lemon1",{
    right:"-300%",
    rotate:"360deg",
},"black")
t2.to("#fanta",{
    top:"208%",
    left:"41%",
},"black")
t2.to("#slice",{
    width:"22%",
    top:"198%",
    left:"39%",
    rotate:"270deg",
},"black")
t2.from("#pepsi",{
    top:"50%",
    left:"100%",
    rotate:"120deg",
},"black")