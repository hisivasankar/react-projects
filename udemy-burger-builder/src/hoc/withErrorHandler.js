import React, { Component } from 'react';
import Modal from "../components/Modal/Modal";
import Aux from "./Auxiliary";

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        };

        errorConfirmed = () => {
            this.setState({
                error: null
            });
        }

        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(request => {
                this.setState({
                    error: null
                });
                return request;
            });

            this.responseInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({
                    error: error
                });
            });
        }

        componentWillUnmount = () => {
            console.log("Unmount!");
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        render() {
            return (
                <Aux>
                    <Modal show={this.state.error}
                        clicked={this.errorConfirmed}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            )
        }
    }
}
export default withErrorHandler;