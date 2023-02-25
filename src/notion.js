// import * as dotenv from 'dotenv'
// dotenv.config()
import express from 'express'
import {Client} from "@notionhq/client"
// const {Client} = require('@notionhq/client')
const notion = new Client({auth: process.env.NOTION_API_KEY})

export async function getDatabase() {
    const response = await notion.databases.retrieve(
        {database_id: process.env.NOTION_DATABASE_ID,})
    console.log(response)
    console.log("hello")
}