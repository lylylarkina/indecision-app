class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            showDetails: false
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return{
                showDetails: !prevState.showDetails
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{ this.state.showDetails ? 'Hide details' : ' Show details'}</button>
                { this.state.showDetails && <p>This is the details!</p>  }
            </div>
        );    
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
