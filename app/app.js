//axios.defaults.headers.common = {
//    'X-Requested-With': 'XMLHttpRequest',
//    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
//};
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Link = ReactRouter.Link;
var browserHistory = ReactRouter.browserHistory;


toastr.options.closeButton = true;
toastr.options.progressBar = true;
toastr.options.timeOut = 2000;

ReactDOM.render(
        <Router history={browserHistory}>
            <div>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/test">About</Link>
                  </li>                  
                </ul>

                <hr />
                <Route path="/" component={Main} />      
                <Route path="test" render={() => <div>Hello</div>} />      
            </div>
        </Router>,
        document.getElementById('content')
        );
