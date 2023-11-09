import {React,Component} from "react"
import Form from "react-bootstrap/Form"
class Home extends Component{
    constructor(){
        super()
        console.log("constructor called")
    }
    componentDidMount(){
        console.log("componentDidMount called")
    }
    render(){
        return(
            <div>
                <h3 color="black">TEST HOME</h3>
            </div>
        )
    }
}
export default Home