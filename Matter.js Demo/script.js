// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine,
    options:{
    
        width:window.innerWidth,
        height: window.innerHeight,
        wireframes: false,

    }
});

// create two boxes and a ground
var rectangleA = Bodies.rectangle(600, 600, 50, 100);
var rectangleB = Bodies.rectangle(600, 300, 50, 100);
var rectangleC = Bodies.rectangle(600, 100, 50, 100);
var rectangleD = Bodies.rectangle(600, 50, 50, 100);
var rectangleE = Bodies.rectangle(600, 0, 50, 100);
var rectangleF = Bodies.rectangle(100, 540, 80, 80, { isStatic: true });
var rectangleG = Bodies.rectangle(140, 500, 500, 50);
var rectangleH = Bodies.rectangle(450, 540, 10, 10, { isStatic: true });
var circleA = Bodies.circle(140, 50, 80, 80);
var ground = Bodies.rectangle(400, 610, 2000, 60, { isStatic: true });

// add all of the bodies to the world
Composite.add(engine.world, [rectangleA, rectangleB, rectangleC, rectangleD, rectangleE, rectangleF, rectangleG, rectangleH, circleA, ground]);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);