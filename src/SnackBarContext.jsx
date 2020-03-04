import React from "react";

const DEFAULT_STATE = {
    open: false,  // boolean to control show/hide
    displayText: '', // text to be displayed in SnackBar
    timeOut: 2000, // time SnackBar should be visible
  };
  const SnackBarContext = React.createContext(DEFAULT_STATE);


  export class SnackBarProvider extends React.Component {
    constructor(props) {
        super(props);
        // DEFAULT_STATE defined earlier
        this.state = Object.assign({}, DEFAULT_STATE);
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
      }
      handleOpen(displayText) { // Show the SnackBar with 'displayText'
      console.log("----------", displayText)
        this.setState({
          open: true,
          displayText,
       });
       setTimeout(  // To hide SnackBar after 2s
         () => this.setState({ open: false }),
         this.state.timeOut, 
       );
      }
    handleClose() { // Show the SnackBar with 'displayText'
        this.setState({
          open: false,
          displayText: '',
       });
     }
    render() {
      return (
        <SnackBarContext.Provider
           value={{...this.state,
           handleOpen: this.handleOpen,
           handleClose: this.handleClose,
          }}
        >
          {this.props.children}
        </SnackBarContext.Provider>
      );
     }
    }

    export const withSnackBarConsumer = (WrappedComponent) => {
        const WrapSnackBarConsumer = props => (
           <SnackBarContext.Consumer>
             {({ 
               open, displayText, handleOpen, handleClose,
             }) => { 
               const snackBarProps = { 
                  open, displayText, handleOpen, handleClose,
               };
               return <WrappedComponent {...snackBarProps} {...props} />;
             }}
           </SnackBarContext.Consumer>
          );
        return WrapSnackBarConsumer;
      };