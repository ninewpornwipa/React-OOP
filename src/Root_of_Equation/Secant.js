import { useState } from "react"
import { Button, Container, Form, Table } from "react-bootstrap";
import { evaluate } from 'mathjs'
import 'chart.js/auto'
import { Line } from "react-chartjs-2";

const BisectionN = () => {
    const print = () =>{
        console.log(data)
        setValueIter(data.map((x)=>x.iteration));
        setValueX0(data.map((x)=>x.x0));
        setValueX1(data.map((x)=>x.x1));
        // setValueXr(data.map((x)=>x.Xr));
        return(
            <Container>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th width="10%">Iteration</th>
                            <th width="30%">X0</th>
                            <th width="30%">X1</th>
                            {/* <th width="30%">XR</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((element, index)=>{
                            return  (
                            <tr key={index}>
                                <td>{element.iteration}</td>
                                <td>{element.x0}</td>
                                <td>{element.x1}</td>
                                {/* <td>{element.Xr}</td> */}
                            </tr>)
                        })}
                    </tbody>
                </Table>
                <Line
                data={state}
                options={{
                title:{
                    display:true,
                    text:'Secant Method',
                    fontSize:20
                    },
                legend:{
                display:true,
                position:'right'
                }
                }}
                />
            </Container>
           
        );
    }

    const calDelta = (x0,fx0,x1,fx1)=>{
        var ans = x1 - (((fx1)*(x0-x1))/(fx0-fx1))
        return ans
    }

    const error =(xold, xnew)=> Math.abs((xnew-xold)/xnew)*100;
   
    const Calnewton = (x0, x1) => {
        var fx0,fx1,xold,ea,scope;
        var iter = 0;
        var MAX = 50;
        const e = 0.00001;
        var obj={};
        do
        {   
            scope = {
                x:x0,
            }
            fx0 = evaluate(Equation,scope)
            scope = {
                x:x1
            }
            fx1 = evaluate(Equation,scope)

            xold = x1
            x1 = calDelta(x0,fx0,x1,fx1)
            ea = error(xold,x1)
            x0 = xold

            iter++;
            obj = {
                iteration:iter,
                x0:x0,
                x1:x1
            }
            data.push(obj)
            
        }while(ea>e && iter<MAX)
        setX(x1)
    }

    const data =[];
    const [valueIter, setValueIter] = useState([]);
    const [valueX0, setValueX0] = useState([]);
    const [valueX1, setValueX1] = useState([]);
    const state = {
        labels: valueIter,
        datasets: [
          {
            label: 'X0',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'white',
            borderColor: 'red',
            borderWidth: 2,
            data: valueX0
          },
          {
            label: 'X1',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'white',
            borderColor: 'green',
            borderWidth: 2,
            data: valueX1
          },
        ]
    }
   
   
    //const [Data,setData] = useState([])
    const [html, setHtml] = useState(null);
    const [Equation,setEquation] = useState("(x^4)-13")
    const [X,setX] = useState(0)
    const [X0,setX0] = useState(0)
    const [X1,setX1] = useState(0)

    const inputEquation = (event) =>{
        console.log(event.target.value)
        setEquation(event.target.value)
    }

    const inputX0 = (event) =>{
        console.log(event.target.value)
        setX0(event.target.value)
    }

    const inputX1 = (event) =>{
        console.log(event.target.value)
        setX1(event.target.value)
    }

    const calculateRoot = () =>{
        const xlnum = parseFloat(X0)
        const xrnum = parseFloat(X1)
        //console.log(xlnum);
        //console.log(xrnum);
        Calnewton(xlnum,xrnum);
        //setData((Data)=>[...Data,data])
        //console.log(data);
        //console.log(Data);
       
        setHtml(print());
       
        //setState();
        console.log(valueIter)
        console.log(valueX1)
    }

    return (
            <Container>
                <Form >
                    <Form.Group className="mb-3">
                    <Form.Label>Input f(x)</Form.Label>
                        <input type="text" id="equation" value={Equation} onChange={inputEquation} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                        <Form.Label>Input X0</Form.Label>
                        <input type="number" id="XL" onChange={inputX0} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                        <Form.Label>Input X1</Form.Label>
                        <input type="number" id="XR" onChange={inputX1} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                    </Form.Group>
                    <Button variant="dark" onClick={calculateRoot}>
                        Calculate
                    </Button>
                </Form>
                <br></br>
                <h5>Answer = {X.toPrecision(7)}</h5>
                <Container>
                {html}
                </Container>
               
            </Container>
           
    )
}


export default BisectionN