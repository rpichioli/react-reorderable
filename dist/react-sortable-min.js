var ReactSortable=React.createClass({displayName:"ReactSortable",getInitialState:function(){return{order:[]}},render:function(){var e=this.props.children.map(function(e){return React.createElement(ReactDrag,{handle:this.props.handle},e)},this);return React.createElement("div",null,e)}});