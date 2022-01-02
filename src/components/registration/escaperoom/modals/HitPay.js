// import { useEffect } from "react";
// import axios from "axios";
// const HitPay = (props) => {
//     const {data, setData , finalShow , setFinalShow , game, setGame , change , setChange , loading , setLoading} = props;

//     useEffect(() => {
//         const script = document.createElement("script");
    
//         script.src = "https://sandbox.hit-pay.com/hitpay.js";
//         script.async = true;
    
//         document.body.appendChild(script);
    
//         return () => {
//           document.body.removeChild(script);
//         };
//       }, [change]);

//       useEffect(() => {
//         setLoading(true);
//         axios.get("https://desolate-cliffs-96244.herokuapp.com/book",{params:{name:"Case File"}}).then((res) => {
//           setData(res.data);
//           console.log(res.data);  
//           setLoading(false);
//         });
//       }, []);
//       useEffect(() => {
//         setLoading(true);
//         axios.get("https://desolate-cliffs-96244.herokuapp.com/book",{params:{name:"Case File"}}).then((res) => {
//           setData(res.data);
//           console.log(res.data);  
//           setLoading(false);
//         });
//       }, []);
//     return ( 
//         0
//      );
// }
 
// export default HitPay;