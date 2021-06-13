import React from "react";

export default class Center extends React.Component {
    render() {
        return (
            <div style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
                {this.props.children}
            </div>
        );
    }
}