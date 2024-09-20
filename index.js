import fetch from 'node-fetch'
import fs from 'fs'
fs.mkdir('./output',err => err && console.log(err))
//fetching epmployees data
fetch("https://dummy.restapiexample.com/api/v1/employees")
    .then(data => data.json())
    .then(data => {
        console.log('data = ',typeof data)
        const path = `./output/${Date.now()}_employees.json`
        if(typeof data === 'object'){
            fs.writeFile(path, JSON.stringify(data), e => {
                if (e) console.log(e)
            })
        } else {
            console.log('Data Invalid')
        }
    })
    .catch(e => console.log(e))

//fetching an specific employee data
fetch("https://dummy.restapiexample.com/api/v1/employees/1")
    .then(data => data.json())
    .then(data => {
        const path = `./output/${Date.now()}_employees_1.json`
        if (typeof data === 'object') {
            fs.writeFile(path, JSON.stringify(data), e => {
                if (e) console.log(e)
            })
        } else {
            console.log('Data Invalid')
        }
    })
    .catch(e => console.log(e))

//creating a new record
fetch("https://dummy.restapiexample.com/api/v1/create", {
        method: 'post',
        body: JSON.stringify({ "name": "test", "salary": "123", "age": "23" }),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(data => data.json())
    .then(data => {
        const path = `./output/${Date.now()}_create.json`
        if (typeof data === 'object') {
            fs.writeFile(path, JSON.stringify(data), e => {
                if (e) console.log(e)
            })
        } else {
            console.log('Data Invalid')
        }
    })
    .catch(e => console.log(e))

//updating an record
fetch("https://dummy.restapiexample.com/api/v1/update/21", {
    method: 'put',
    body: JSON.stringify({ "name": "test", "salary": "123", "age": "23" }),
    headers: { 'Content-Type': 'application/json' }
    })
    .then(data => data.json())
    .then(data => {
        const path = `./output/${Date.now()}_update_21.json`
        if (typeof data === 'object') {
            fs.writeFile(path, JSON.stringify(data), e => {
                if (e) console.log(e)
            })
        } else {
            console.log('Data Invalid')
        }
    })
    .catch(e => console.log(e))

// deleting an record
fetch("https://dummy.restapiexample.com/api/v1/delete/2", {
    method: 'delete',
    })
    .then(data => data.json())
    .then(data => {
        const path = `./output/${Date.now()}_delete_2.json`
        if (typeof data === 'object') {
            fs.writeFile(path, JSON.stringify(data), e => {
                if (e) console.log(e)
            })
        } else {
            console.log('Data Invalid')
        }
    })
    .catch(e => console.log(e))
