let elUl = document.querySelector('.users')
let elChat = document.querySelector('.chats')
let elForm = document.querySelector('.form')
let elIcon = document.querySelector('.icons')
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(data => {
        console.log(data);
        mapper(data)
    })
function mapper(abc) {
    abc.forEach((e,i) => {
        let elBtn = document.createElement('button')
        let newLI = document.createElement('li')
        newLI.innerHTML = e.username
        newLI.setAttribute('class', 'newli')
        let newName = document.createElement('li')
        newName.innerHTML = e.name
        newName.setAttribute('class', 'name')
        elBtn.appendChild(newLI)
        elBtn.appendChild(newName)
        elUl.appendChild(elBtn)
        elBtn.setAttribute('class', 'btn')

        elBtn.setAttribute('id', i += 1)
    })
    let elButton = document.querySelectorAll(".btn")
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => {
            mapper(posts)
            console.log(posts);
        })
    function mapper(data) {
        for (let i = 1; i <= 5; i++) {
            let newBtn = document.createElement('li')
            newBtn.innerHTML = `<button type="submit" id="${i}" class="my__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-circle icon" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
              </svg>
            </button>`
            elForm.appendChild(newBtn)
        }
        elButton.forEach((a) => {
            a.addEventListener('click', (e) => {
                elChat.innerHTML = ''
                data.forEach(t => {
                    if (a.id == t.userId) {
                        let newH3 = document.createElement('li')
                        newH3.innerHTML = t.title
                        newH3.setAttribute('class', 'chat')
                        newH3.classList.add('tg__blue')
                        elChat.appendChild(newH3)
                        let newH4 = document.createElement('li')
                        let num1 = t.userId + 1
                        if (num1) {
                            newH4.innerHTML = t.title
                            newH4.setAttribute('class', 'chat')
                            newH4.style.marginLeft = '20px'
                            elChat.appendChild(newH4)
                        }
                    }
                })

            })
        })
        let myIcon = document.querySelectorAll('.my__icon')
        let Btn = document.querySelectorAll('.btn')
        myIcon.forEach((h) => {
            elChat.innerHTML = ''
            h.addEventListener('click', () => {
                elChat.innerHTML = ''

                Btn.forEach(b => {
                    if (h.id == 1) {
                        b.style.display = 'none'
                        Btn[0].style.display = 'block'
                        Btn[1].style.display = 'block'
                    } else if (h.id == 2) {
                        b.style.display = 'none'
                        Btn[2].style.display = 'block'
                        Btn[3].style.display = 'block'
                    } else if (h.id == 3) {
                        b.style.display = 'none'
                        Btn[4].style.display = 'block'
                        Btn[5].style.display = 'block'
                    }
                    else if (h.id == 4) {
                        b.style.display = 'none'
                        Btn[6].style.display = 'block'
                        Btn[7].style.display = 'block'
                    } else if (h.id == 5) {
                        b.style.display = 'none'
                        Btn[8].style.display = 'block'
                        Btn[9].style.display = 'block'
                    } else {
                    }
                })
            })

        })
    }
}
