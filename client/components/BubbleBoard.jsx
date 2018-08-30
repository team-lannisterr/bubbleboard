import React, { Component } from "react";
import { ForceGraph2D } from "react-force-graph";

const BubbleBoard = props => {
  let bbStyle = {
    width: "1600px",
    height: "800px"
  };
  
  for (let i = 0; i < props.numberOfBoards; i += 1) {
    
    
    const forceGraphArray = [];
    let nodes = [];
    let links = [];


 
  
  
    const BubbleOb = (parent, offsetX, offsetY, style, data, ID, children = [], key) => {
      let bubble = {};
      bubble.key = key;
      bubble.parent = parent;
      bubble.offsets = {x: offsetX, y: offsetY}
  
      if (bubble.parent) {
        bubble.pos = {x: bubble.parent.pos.x + bubble.offsets.x,
                    y: bubble.parent.pos.y + bubble.offsets.y};
      }
      
      bubble.style = style;
      bubble.data = data; //shouldnt be anything unless its a primitive value
      
      bubble.children = [];
  
      return bubble;
    }
  // let nodes = [];
  // let links = [];

  //props.bubbles is an array of bubbleob objects, which you can use to generate bubbleob elements
//console.log(props.numberOfBoards)
  const bubbleify = ob => {
    let bubble = BubbleOb();

    let keys = Object.keys(ob);

    for (let key of keys) {
      if (typeof ob[key] === "object") {
        let newBubble = bubbleify(ob[key]);

        newBubble.parent = ob;
        newBubble.key = key;
        bubble.children.push(newBubble);
      } else {
        let newPrimBubble = BubbleOb();
        newPrimBubble.data = ob[key];
        newPrimBubble.parent = ob;
        newPrimBubble.key = key;
        bubble.children.push(newPrimBubble);
      }
    }

    return bubble;
  };

  const nodeify = bubble => {
    let thisNode = {
      id: nodes.length,
      nodeLabel: bubble.key,
      color: "#dddddd"
    };
    if (bubble.data) {
      thisNode.nodeLabel += " : " + bubble.data;
    }
    if (thisNode.nodeLabel === undefined) {
      thisNode.nodeLabel = props.rootName || 'Root';
    }
    nodes.push(thisNode);
    for (let i = 0; i < bubble.children.length; i++) {
      let childNode = nodeify(bubble.children[i]);
      let link = {
        source: thisNode.id,
        target: childNode.id
      };
      links.push(link);
    }
    return thisNode;
  };

  
  let widthDivider = 1;
  let heightDivider = 1;
  
  if (props.numberOfBoards === 1 || props.numberOfBoards.length ) {
    widthDivider = 1
    heightDivider = 1
  } else if (props.numberOfBoards === 2) {
    console.log('twoBoards')
    widthDivider = 1
    heightDivider = 2
  } else if (props.numberOfBoards === 3) {
    widthDivider = 2
    heightDivider = 2
  } else  {
    widthDivider = 2
    heightDivider = 2
  }
  console.log("numberofboards " + props.numberOfBoards)
  
  console.log("widthDivider " + widthDivider)
  



    let theObject = props.object;
    

    if (!props.inputJSONArray[i]) {
      theObject = { No: 'Bubble'};
    } else {
      theObject = props.inputJSONArray[i]
    }

    nodeify(bubbleify(theObject));

    let bubbleData = {
      nodes,
      links
    };
    
    forceGraphArray.push( <ForceGraph2D
      graphData={bubbleData}
      // backgroundColor="#003434"
      width={1200 / widthDivider}
      height={800 / heightDivider}
      nodeRelSize={10}
      linkWidth={8}
      backgroundColor={'#999'}
     
       //linkColor="#450"
      // nodeColor={{color: "#C56698"}}
      //runs function for every node 
      nodeCanvasObject={(node, ctx, globalScale) => {
        //console.log(props.numberOfBoards)
        const label = node.nodeLabel;
        const fontSize = 12 / Math.sqrt(globalScale);
        ctx.font = `${fontSize}px Sans-Serif`;
        const textWidth = ctx.measureText(label).width;
        const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 1); // some padding
        ctx.fillStyle = "rgba(30,144,255 ,1 )";
        ctx.fillRect(
          node.x - bckgDimensions[0] / 2,
          node.y - bckgDimensions[1] / 2,
          ...bckgDimensions
        );
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = node.color;
        ctx.fillText(label, node.x, node.y);
      }}
    />)

  }

  let el = (
    <ForceGraph2D
    graphData={bubbleData}
    // backgroundColor="#003434"
    width={1000}
    height={600}
    nodeRelSize={10}
    linkWidth={8}
    backgroundColor={'#000'}
    // linkColor="#F1CD7D"
    // nodeColor={{color: "#C56698"}}
    //runs function for every node 
    nodeCanvasObject={(node, ctx, globalScale) => {
      const label = node.nodeLabel;
      const fontSize = 12 / Math.sqrt(globalScale);
      ctx.font = `${fontSize}px Sans-Serif`;
      const textWidth = ctx.measureText(label).width;
      const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 1); // some padding
      ctx.fillStyle = "rgba(30,144,255 ,1 )";
      ctx.fillRect(
        node.x - bckgDimensions[0] / 2,
        node.y - bckgDimensions[1] / 2,
        ...bckgDimensions
      );
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = node.color;
      ctx.fillText(label, node.x, node.y);
    }}
  />
  );
  return el;
};

export default BubbleBoard;
