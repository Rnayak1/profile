data = {
    "profile": `<h1> I am Profile </h1>`,
};

const dat = () => {
    console.log(data)
}

const gitData = async(userName) => {
        const gitData = await axios.get('https://api.bloggify.net/gh-calendar/?username=rnayak1')
        console.log(typeof(gitData.data));
        document.getElementById('git').innerHTML += gitData.data;
        document.getElementsByClassName('contrib-footer')[0].style.display = "none"
    }
    //gitData('rnayak1');

const changeTheme = () => {
    if (document.body.classList.contains('c-dark-theme'))
        document.body.classList.remove('c-dark-theme')
    else
        document.body.classList.add('c-dark-theme')
}