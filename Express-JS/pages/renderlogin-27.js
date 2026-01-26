export default function renderlogin() {
    return `<form action="/submit" method="post"> 
        <input type="text" placeholder="enter name" />
        <br> <br>
        <input type ="password" placeholder="enter password" />
        <br> <br>
        <button>Login</button>

        <a href='/'> Go to Home Page </a>
        </form>`
}