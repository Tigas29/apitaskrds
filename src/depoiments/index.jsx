import axios from "axios";
import { useState, useEffect } from "react";

// const api = axios.create({
//   baseURL: "https://crm.rdstation.com/api/v1/",
// });
const TOKEN = "63adc786e164e0000b296295";
function Index() {
  axios.defaults.headers.common["Authorization"] = `basic ${TOKEN}`;

  axios
    .get(
      "https://crm.rdstation.com/api/v1/deals?token=63adc786e164e0000b296295&Parametros"
    )
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

  // const [posts, setPosts] = useState([]);
  // const token = "63adc786e164e0000b296295";
  // const getPosts = async () => {
  //   try {
  //     const response = await api.get(
  //       "/deals?token=63adc786e164e0000b296295&Parametros"
  //     );
  //     sessionStorage.setItem("token", response.data.access_token);
  //     console.log(response.data);
  //   } catch (error) {}
  // };

  // useEffect(() => {
  //   getPosts();
  // }, []);
  return (
    <>
      <p></p>
    </>
  );
}

export default Index;

// {
// 		"token": "63adc786e164e0000b296295",
// 			"name": "Tiago Santos",
// 			"markup": "future",
// 			"organization": {
// 				"name": "Tiago Santos",
// 				"user": {
// 					"name": "Kelen Michele",
// 					"email": "kelly-michele15@hotmail.com"
// 				},
// 				"organization_segments": []
// 			},
// 			"contacts": [
// 				{
// 					"name": "Tiago Santos",
// 					"emails": [],
// 					"phones": [
// 						{
// 							"phone": "11995350039",
// 							"type": "work"
// 						}
// 					]
// 				}
// 			],
// 			"deal_custom_fields": [],
// 			"deal_products": []
// 		}
