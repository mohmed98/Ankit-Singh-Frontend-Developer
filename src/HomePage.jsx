import React, { useEffect, useState } from 'react'
import { Button, Input, Pagination, Modal  } from 'antd';
import { Card } from 'antd';



const HomePage = () => {
    // const [search, setSearch] = useState([]);
    const [result, setResult] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const resultData = async() => {
       try {
        const res = await fetch("https://api.spacexdata.com/v3/capsules");
        const data = await res.json();
        setResult(data);   
       } catch (error) {
        console.log('error:', error.message);  
       }
    }

    const filterData = (type) => {
        const updatedList = result.filter((x)=>{
            return x.type === type;
        })
        setResult(updatedList);
    }

    const filterData2 = (date) => {
        const updatedList = result.filter((x)=>{
            return x.original_launch === date;
        })
        setResult(updatedList);
    }

    const filterData3 = (status) => {
        const updatedList = result.filter((x)=>{
            return x.status === status;
        })
        setResult(updatedList);
    }

    // console.log('result:', result)

    useEffect(() => {
        resultData()
    }, [])
    


  return (
    <>
    <div className="searchDiv">
        {/* <div className="searchBar">
        <Input placeholder="search here" onChange={(e)=>setSearch(e.target.value)}/>
        <Button type="primary" onClick={()=>{searchFun()}} >Search</Button>
        </div> */}
    <div className="btns">
        <span className="filterText"><h2>Filter By: &nbsp; </h2></span>
    <Button type="primary" onClick={() => {filterData("Dragon 1.1")}}>Type </Button>    
    <Button type="primary" onClick={() => {filterData2("2012-10-08T00:35:00.000Z")}}> Original Launch </Button>
    <Button type="primary" onClick={() => {filterData3("retired")}}>Status </Button>
    </div>
    </div>
    <div className="resultDiv">
        {
            result.map((item)=>{
                return (
                    <>
                    <div className="site-card-border-less-wrapper" key={item.capsule_serial}>
                    <Card 
                    className="card"
                      title={item.type
                      }
                      bordered={true}
                      style={{
                        width: 250,
                        marginLeft:35,
                        marginTop:20
                      }}
                    >
                        <div className="span1">
                        <span><h4>Capsule_id: &nbsp; </h4></span> <span> <p>{item.capsule_id.toUpperCase()}</p></span></div> 
                        
                        <div className="span1">
                        <span><h4>Capsule_serial: &nbsp; </h4></span> <span>
                            <p>{item.capsule_serial}</p> </span> </div> 

                     <div className="span1"> 
                     <span><h4>Landings: &nbsp; </h4></span> <span>
                     <p>{item.landings}</p> </span></div> 

                      <div className="span1">
                      <span><h4>Status: &nbsp; </h4></span> <span>
                        <p>{item.status.toUpperCase()}</p></span></div> 
                        
                      
                    </Card>
                  </div>
                    </>
                    
                )
            })
        }

    </div>
    <Pagination count={10} color="primary" />
    </>

  )
}

export default HomePage