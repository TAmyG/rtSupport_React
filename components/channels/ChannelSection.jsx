import React, {Component} from 'react';
import ChannelForm from './ChannelForm.jsx';
import ChannelList from './ChannelList.jsx';

class ChannelSection extends Component{
    render(){
        return(
            <div className = 'support panel panel-primary'>
                <div className = 'panel-heading'>
                    <strong>Channels</strong>
                </div>
                <div className = 'panel-body channels'>
                    <ChannelList {...this.props}/>
                    <ChannelForm {...this.props}/>
                </div>
            </div>
        )
    }
}

ChannelSection.propTypes = {
    channels: React.PropTypes.array.isRequired,
    activeChannel: React.PropTypes.object.isRequired,
    setChannel: React.PropTypes.func.isRequired,
    addChannel: React.PropTypes.func.isRequired    
}

export default ChannelSection;