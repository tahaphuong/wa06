// const USERNAME = "abc"
// const PASSWORD = "123456"
// const DATA = [
//   {
//     username: "user1",
//     password: "123123"
//   },
//   {
//     username: "user2",
//     password: "123123"
//   }
// ]
// localStorage.setItem("wa06_data", JSON.stringify(DATA))

function getId(id) {
  return document.getElementById(id)
}

getId("submit-button").addEventListener("click", submitLogin)

function submitLogin() {
  let username = getId("username-input").value
  let password = getId("password-input").value

  // let message = ""

  // if(username.trim() != USERNAME) {
  //   message = "Tài khoản không tồn tại! 😦"
  // } else if (password != PASSWORD) {
  //   message = "Mật khẩu không hợp lệ! 😦"
  // } else {
  //   alert("Bạn đã đăng nhập thành công")
  // }
  // getId("error-mess").innerText = message

  let response = findAccount(username, password)

  if (response.success) {
    getId("error-mess").innerText = ""
    alert(response.message)
  } else {
    getId("error-mess").innerText = response.message
  }

}

function findAccount(username, password) {

  let data = localStorage.getItem("wa06_data")
  let database = JSON.parse(data)

  for (let item of database) {

    if (item.username == username) {

      if (item.password == password) {
        return {success: true, message: "Đăng nhập thành công"}
      } else {
        return {success: false, message: "Mật khẩu không hợp lệ! 😦"}
      }
      
    }

  }
  return {success: false, message: "Tài khoản không tồn tại! 😦"}
}