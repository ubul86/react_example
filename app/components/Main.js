class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [
                {
                    "id": "5d2c2004154f95af83609998",
                    "isActive": true,
                    "picture": "http://placehold.it/32x32",
                    "name": "Rosemary Cardenas"
                },
                {
                    "id": "5d2c20047e247ec6f95ab709",
                    "isActive": true,
                    "picture": "http://placehold.it/32x32",
                    "name": "Dawson Richards"
                },
                {
                    "id": "5d2c20043696fa521f062b4c",
                    "isActive": false,
                    "picture": "http://placehold.it/32x32",
                    "name": "Kennedy Moss"
                },
                {
                    "id": "5d2c2004406d12000cff27e6",
                    "isActive": false,
                    "picture": "http://placehold.it/32x32",
                    "name": "Kate Horton"
                },
                {
                    "id": "5d2c2004989f58fb6b65e1a0",
                    "isActive": false,
                    "picture": "http://placehold.it/32x32",
                    "name": "Puckett English"
                }
            ],
            itemId: null
        };


    }

    changeAppMode(newMode, itemId) {
        this.setState({currentMode: newMode});
        if (itemId !== null) {
            this.setState({itemId: itemId});
        }
    }

    componentDidMount() {

    }

    render() {
        const {items, itemId} = this.state;
        toastr.success('Page load is successfull');

        var modeComponent = (<Items items={items}></Items>);
        
        return (modeComponent);
    }
}
