


import axios from "axios";
import { IExpenseCreateItem } from "../models/expense";

const getAllExpenseItems = async () => {

  const response = await axios.get("http://localhost:4000/Expenses")

  return response.data;
}

const createNewExpenseItem = async (newExpenseObj : IExpenseCreateItem) => {

  const response = await axios.post(
    "http://localhost:4000/Expenses", newExpenseObj, {
      headers : {
        'Content-Type' : 'application/json'
      }
    })

  return response.data;  
}

export {getAllExpenseItems, createNewExpenseItem}
