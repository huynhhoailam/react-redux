import React, {Component} from 'react';

class ErrorPage extends Component {
    render(){
        return(
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    <span class="sr-only">Close</span>
                </button>
                <strong>Something went wrong...</strong>
            </div>
        );
    }
}

export default ErrorPage;