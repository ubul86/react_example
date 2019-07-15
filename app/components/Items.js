class Items extends React.Component {    
    
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
    }    

    render() {        
        const {items} = this.props;        
        var component=(
                <div>
                    {Object.keys(items).map(key => <Item key={key} index={key} item={items[key]} />)} 
                </div>
        );
        return component;        
    }
}


