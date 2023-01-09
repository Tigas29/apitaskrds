import axios from "axios";
import { useState, useEffect } from "react";

function Index() {
  var config = {
    method: "get",
    url: "https://crm.rdstation.com/api/v1/deals?token=62c34f1b64426500206f8cdd",
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
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
