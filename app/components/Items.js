class Items extends React.Component {    
    
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
    }    

    render() {        
        console.log(1);
        const {items} = this.props;        
        var component=(
                <div>
                    {Object.keys(items).map(key => <Item key={key} index={key} item={items[key]} />)} 
                </div>
        );
        return component;        
    }
}


