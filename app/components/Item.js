class Item extends React.Component {    
        
    componentDidMount() {
    }    

    render() {      
        const {item, index} = this.props;        
        var component = (
                <div>{item.name}</div>
        );
        return component;        
    }
}


