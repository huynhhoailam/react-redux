import React, { Component } from 'react';

class LoginPage extends Component {
    render() {
        return (
            <div className="container">
                <form className="form-group">
                    <legend className="col-form-legend col-sm-1-12">LOGIN</legend>
                    <div className="col-sm-12">
                        <div className="offset-sm-2 col-sm-8">
                            <input type="text" className="form-control" name="inputUsername" placeholder="Username" />
                            <input type="text" className="form-control" name="inputPassword" placeholder="Password" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="offset-sm-2 col-sm-8">
                            <button type="submit" class="btn btn-primary">LOGIN</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginPage;