const data = {
    user: {
      name: 'Josh',
      email: 'josh@imjoshellis.com',
      activity: {
        status: 'inactive',
        lastLoggedIn: 'yesterday',
        classmate: {
          fnameClassmate: 'ss',
          lnameClassmate: 'rajmohan'
        }
      },
      info: {
        fname: 'sel',
        lname: 'raj'
      }
    }
  }
  
  const { name, activity: { status, lastLoggedIn, classmate: {fnameClassmate, lnameClassmate} }} = data.user
  console.log(`${name} logged in ${lastLoggedIn} and is currently ${status} ${lnameClassmate}`)
  // => 'Josh logged in yesterday and is currently inactive'