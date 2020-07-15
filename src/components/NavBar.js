import React, {Component} from "react"

class NavBar extends Component{
    constructor(props){
        super(props)
        this.state={
            movie: null
        }

        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({
            [e.target]: e.target.value
        })
        this.props.fetchData(this.state)
    }
   render(){
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark  mr-3" style={{fontFamily: "tahoma"}}>
                <div className="navbar-brand text-danger" >Movies<span className="text-warning">DB</span> <span className="text-white">Search</span></div>
                <div >
                
                    <input  type="text" name="search" placeholder="Search" onChange={this.handleChange} />
                
                </div>

            </nav>

           
        </div>
    )

}

   }

       




export default NavBar
