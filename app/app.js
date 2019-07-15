//axios.defaults.headers.common = {
//    'X-Requested-With': 'XMLHttpRequest',
//    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
//};
toastr.options.closeButton = true;
toastr.options.progressBar = true;
toastr.options.timeOut = 2000;

ReactDOM.render(
        <Main />,
        document.getElementById('content')
        );
