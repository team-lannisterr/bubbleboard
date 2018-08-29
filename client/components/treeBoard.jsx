import React from 'react';
import Tree from 'react-tree-graph';
import './treeBoard.css'

const TreeBoard = props => {
    let data = {
        name: 'Parent',
        children: [{
            name: 'Child One'
        }, {
            name: 'Child Two'
        }]
    };

    let data2 = {
        test: 1
    };
    // console.log('here', props.object)
    // console.log(data)
    return (
            <Tree data={props.object} height={400} width={400} animated={true} 
            textProps={{class:'nodeText'}}/>
    )
}

export default TreeBoard;