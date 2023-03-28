import React from 'react'
import { useEffect,useState } from 'react'
const fakeurl="https://raw.githubusercontent.com/mayankgz/fake-api-1/main/FAKE_API.JSON";
const HOME2= ()=> {
    const [userData, setUserData] = useState({});
    useEffect(() => {
        getGitHubUserWithFetch();
      }, []);
      const getGitHubUserWithFetch = async () => {
        const response = await fetch(fakeurl);
        const jsonData = await response.json();
        setUserData(jsonData);
      };
      console.log(userData[0]);
      const ex=userData[0];
      console.log(ex);
    return (
    <div>

    </div>
  )
}
export default HOME2;
