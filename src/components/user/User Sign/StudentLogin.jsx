
import Login from "./Login"
export default function StudentLogin(){
    return(
        <Login heading={"Student Login"} emailHolder={"student email"} passwordHolder={"student password"} navlink={'/AttendanceApp/StudentDetails'} navlinkVal={'For Admin Click'} axiosLink={'studentLogin'}linkAfterAxios={'/student'} pre={'Student'}/>  
    )
}