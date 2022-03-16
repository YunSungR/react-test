import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
const AxiosTest = () => {
    //state
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);
    //서버에 요청해서 데이터 받아옴
    // state 값저장
    const loadData=async()=>{
        setLoading(true);
        const response = await axios.get("http://jsonplaceholder.typicode.com/todos/1");
        console.log(response.data);
        setData(response.data);
        setLoading(false);
    }
    useEffect(()=>{
        loadData();
    },[]
    );
    const jsonobj=JSON.parse(JSON.stringify(data));
    let result=[];
    for(var key in jsonobj){
        result.push(
            <tr><td>{key}</td><td>{jsonobj[key]}</td></tr>
        )
    }
    // sd
    // data를 JSON Object로 변한해서 key,value 추출
    return (
        <div>
            <h3>서버로 받아오는 값</h3>   
            <table border="1">
                {result}
            </table>
     </div>
    );
};

export default AxiosTest;