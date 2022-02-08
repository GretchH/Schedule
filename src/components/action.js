import React, { Component } from 'react';
import Icon from './icon';

class Action extends Component {
    render() {
        return (
            //<div className={`${this.props.className} action`}>
            <button onClick={() => this.props.onClick()} className={`${this.props.className} action`}>
                {Icon('fas fa-plus-circle')}
                {/* fas fa-times-circle*/}
            </button>

            //</div>
        )
    }
}

export default Action;