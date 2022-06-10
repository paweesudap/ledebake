import React , { useEffect} from 'react';
export default function NotificationPage (){
  useEffect(() => {
    const token = localStorage.getItem('token')
    fetch('http://localhost:4444/authen', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token 
        },
    })
    .then(response => response.json())
    .then(data => {
        if(data.status === 'ok'){
            
        }else{
            alert('authen failed')
            localStorage.removeItem('token');
            window.location='/Login'
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
  }, [])
  return (
    <div className="container">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    <div id="fon">No Older Notification</div>
    </div>
)
}

