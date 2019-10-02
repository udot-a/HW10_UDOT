// ************************* REQUIRED ******************************


// ******************* ADDITIONAL #2 *******************************************

function User(name, email, photoURL) {

    name ? this.name = name : this.name = 'Ivan McGregor'
    email ? this.email = email : this.email = 'sobaka@sobaka.dog'
    photoURL ? this.photoURL = photoURL : this.photoURL = User.getAvatar()
}

User.prototype.messageBox = (function () {
    var output = additonalTwo.appendChild(document.createElement('div'))
    output.img = output.appendChild(document.createElement('img'))
    output.img.style.width="50px"
    output.userName = output.appendChild(document.createElement('p'))
    output.textMessage = output.appendChild(document.createElement('textarea'))
    output.textMessage.oninput = (event) => {
        output.img.src = User.admin.photoURL
        output.userName.innerText = User.admin.name;
    }
    return output
})()
User.avatars = [
    "https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg",
    "https://klike.net/uploads/posts/2019-03/1551511862_28.jpg",
    "https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg",
    "http://icons.iconarchive.com/icons/hopstarter/face-avatars/256/Male-Face-L3-icon.png",
    "https://findicons.com/files/icons/1072/face_avatars/300/i05.png",
    "http://www.iconarchive.com/download/i51043/hopstarter/halloween-avatars/Gomez.ico",
    "http://icons.iconarchive.com/icons/hopstarter/halloween-avatars/256/Zombie-2-icon.png",
    "https://vignette.wikia.nocookie.net/yogscast/images/8/8a/Avatar_Turps_2015.jpg"
]
User.admin = {
    photoURL: "https://i.pinimg.com/originals/3d/47/4f/3d474f82ff71595e8081f9a120892ae8.gif",
    name: "admin"
}
User.getAvatar = function () {
    return this.avatars.shift()
}

User.prototype.write = function (message) {
    this.messageBox.textMessage.value = message;
    this.messageBox.img.src = this.photoURL;
    this.messageBox.userName.innerText = this.name;
}

var users = [
    new User("Иван"),
    new User('Alex', "alex@gmail.com"),
    new User('Bob', "bob777@gmail.com"),
    new User('Dima', "dima888@gmail.com"),
    new User('Fima', "fima999@gmail.com")
]

var k = 1
users.forEach(
    function (user) {
        setTimeout(
            function () {
                user.write(`Hello, I'm ${user.name}`)
            }, 3000 * k++
        )
    }
)
