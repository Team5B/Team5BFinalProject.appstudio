
// Code look at later 
btnCreateUser.onclick=function(){
  

  query = "INSERT INTO user (net_id, password, first_name,last_name) VALUES ( 'net_id', 'password', 'first_name', 'last_name' )"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cjg05531&pass=" + pw + "&database=cjg05531&query=" + query)

  
 
  if (req.status == 200) { //transit worked.
    results = JSON.parse(req.responseText)
}
  } else {
    // transit error
    console.log(`Error: ${req.status}`);
  }
  
  lblAdded.value = `Your have sucessfully been added, please log in!`
  /*
  let newUserAdd = ""
  for (i = 0; i <= results.length - 1; i++)
  newUserAdd  = newUserAdd  + results[i] + "\n"

  txtRemaining.value = customersAdd

}

*/