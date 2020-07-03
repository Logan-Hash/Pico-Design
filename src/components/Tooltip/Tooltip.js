import React from 'react';

const style = {
  tooltipText : {
    top: '50%',
    marginTop: 'calc(-50% - 0.25rem)',
    right: '100%',
    background: 'rgba(0,0,0,0.7)'
  }
}

class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }
  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }
  render () {
    return (
      <div className="relative inline-block" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>{this.props.children}
      { this.state.isHovering &&
          <div style={style.tooltipText} className="hidden xl:inline-block w-20 text-white text-center rounded p-1 text-xs font-normal absolute mr-1">
            <span>{this.props.toolTipText}</span>
          </div>
      }  
      </div>
    );
  }
}

export default Tooltip;
