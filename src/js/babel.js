async function work(){
    return await Promise.resolve('its work')
}

work().then(console.log)