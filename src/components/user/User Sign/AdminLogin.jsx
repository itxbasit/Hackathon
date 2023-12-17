import Login from "./Login"

export default function AdminLogin(){
  return(
    <Login heading={"Admin Login"} axiosLink={'AdminLogin'} emailHolder={"admin email"} passwordHolder={"admin password"} navlink={'/AttendanceApp/StudentLogin'} navlinkVal= {"For Students Click"} pre={'Admin'}/>
  )
}