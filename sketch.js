const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var jointLink
var bridge



function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);


  Matter.Composite.add(bridge.Body, jointPoint);
  jointLink = new Link(bridge, jointPoint);

}

function draw() {
  background(51);
  Engine.update(engine);

}
