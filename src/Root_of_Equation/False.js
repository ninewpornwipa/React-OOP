import { useState } from "react"
import { Button, Container, Form, Table } from "react-bootstrap";
import { derivative, evaluate } from 'mathjs'
import 'chart.js/auto'
import { Line } from "react-chartjs-2";

const False = () => {
    const print = () =>{
        console.log(data)
        setValueIter(data.map((x)=>x.iteration));
        setValueXl(data.map((x)=>x.Xl));
        setValueX(data.map((x)=>x.Xi));
        setValueXr(data.map((x)=>x.Xr));
        return(
            <Container>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th width="10%">Iteration</th>
                            <th width="30%">XL</th>
                            <th width="30%">X</th>
                            <th width="30%">XR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((element, index)=>{
                            return  (
                            <tr key={index}>
                                <td>{element.iteration}</td>
                                <td>{element.Xl}</td>
                                <td>{element.Xi}</td>
                                <td>{element.Xr}</td>
                            </tr>)
                        })}
                    </tbody>
                </Table>
                <Line
                data={state}
                options={{
                title:{
                    display:true,
                    text:'Flase-Position Method',
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

    const error =(xold, xnew)=> Math.abs((xnew-xold)/xnew)*100;
   
    const calxUse = (xL,fxL,xR,fxR) => ((xL*fxR) - (xR*fxL))/(fxR-fxL)

    

    const Calfalse = (xl, xr) => {
        var xi,fXr,ea,scope,fXl,fxi;
        var iter = 0;
        var MAX = 50;
        const e = 0.00001;
        var obj={};
        
        do
        {
            scope = {
                x:xr,
            }
            fXr = evaluate(Equation, scope)

            scope = {
                x:xl,
            }
            fXl = evaluate(Equation, scope)
            xi = calxUse(xl,fXl,xr,fXr)
            scope = {
                x:xi
            }
            fxi = evaluate(Equation,scope)
            iter++;
            if (fxi*fXr > 0)
            {
                ea = error(xr, xi);
                obj = {
                    iteration:iter,
                    Xl:xl,
                    Xi:xi,
                    Xr:xr
                }
                data.push(obj)
                xr = xi;
            }
            else if (fxi*fXr < 0)
            {
                ea = error(xl, xi);
                obj = {
                    iteration:iter,
                    Xl:xl,
                    Xi:xi,
                    Xr:xr
                }
                data.push(obj)
                xl = xi;
            }
        }while(ea>e && iter<MAX)
        setX(xi)
    }

    const data =[];
    const [valueIter, setValueIter] = useState([]);
    const [valueXl, setValueXl] = useState([]);
    const [valueX, setValueX] = useState([]);
    const [valueXr, setValueXr] = useState([]);
    const state = {
        labels: valueIter,
        datasets: [
          {
            label: 'Xl',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'white',
            borderColor: 'red',
            borderWidth: 2,
            data: valueXl
          },
          {
            label: 'X',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'white',
            borderColor: 'green',
            borderWidth: 2,
            data: valueX
          },
          {
            label: 'Xr',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'white',
            borderColor: 'blue',
            borderWidth: 2,
            data: valueXr
          }
        ]
    }
   
   
    //const [Data,setData] = useState([])
    const [html, setHtml] = useState(null);
    const [Equation,setEquation] = useState("(x^4)-13")
    const [X,setX] = useState(0)
    const [XL,setXL] = useState(0)
    const [XR,setXR] = useState(0)

    const inputEquation = (event) =>{
        console.log(event.target.value)
        setEquation(event.target.value)
    }

    const inputXL = (event) =>{
        console.log(event.target.value)
        setXL(event.target.value)
    }

    const inputXR = (event) =>{
        console.log(event.target.value)
        setXR(event.target.value)
    }

    const calculateRoot = () =>{
        const xlnum = parseFloat(XL)
        const xrnum = parseFloat(XR)
        //console.log(xlnum);
        //console.log(xrnum);
        Calfalse(xlnum,xrnum);
        //setData((Data)=>[...Data,data])
        //console.log(data);
        //console.log(Data);
       
        setHtml(print());
       
        //setState();
        console.log(valueIter)
        console.log(valueXl)
    }

    return (
            <Container>
                <Form >
                    <Form.Group className="mb-3">
                    <Form.Label>Input f(x)</Form.Label>
                        <input type="text" id="equation" value={Equation} onChange={inputEquation} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                        <Form.Label>Input XL</Form.Label>
                        <input type="number" id="XL" onChange={inputXL} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                        <Form.Label>Input XR</Form.Label>
                        <input type="number" id="XR" onChange={inputXR} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
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


export default False