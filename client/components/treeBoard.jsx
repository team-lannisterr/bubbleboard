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

    return (
            <Tree data={data} height={400} width={400} animated={true} 
            textProps={{class:'nodeText'}}/>
    )
}

export default TreeBoard;