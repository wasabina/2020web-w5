const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

let us_storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let jp_storyText = '外は#tempratureで心地良い気温だったので、太郎は手ぶらで特に目的もなく散歩に出かけました。:insertx:駅前を通った時、:inserty:に会いました。:inserty:は太郎を見て驚いて言いました。「太郎、傘はどうしたんだい？びしょ濡れじゃないか。」一日中:insertz:の降る日のことでした。';
let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let jp_insertX = ['新小平', '千駄ヶ谷', '立川', '新宿', '国分寺'];
let insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
let jp_insertY = ['友達', '先生', '近所のおじさん', '魚屋の主人'];
let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];
let jp_insertZ = ['雨', '雪', '霰', '雹'];

randomize.addEventListener('click', result);

function result() {
    let newStory = us_storyText;

    if (document.getElementById("us").checked) {
        let xItem = randomValueFromArray(insertX);
        let yItem = randomValueFromArray(insertY);
        let zItem = randomValueFromArray(insertZ);

        newStory = newStory.replace(':insertx:', xItem);
        newStory = newStory.replace(':insertx:', xItem);
        newStory = newStory.replace(':inserty:', yItem);
        newStory = newStory.replace(':insertz:', zItem);

        if (customName.value !== '') {
            const name = customName.value;
            newStory = newStory.replace('Bob', name);
        }

    } else {
        newStory = jp_storyText;
        let xItem = randomValueFromArray(jp_insertX);
        let yItem = randomValueFromArray(jp_insertY);
        let zItem = randomValueFromArray(jp_insertZ);

        newStory = newStory.replace(':insertx:', xItem);
        newStory = newStory.replace(':inserty:', yItem);
        newStory = newStory.replace(':inserty:', yItem);
        newStory = newStory.replace(':insertz:', zItem);

        if (customName.value !== '') {
            const name = customName.value;
            newStory = newStory.replace('太郎', name);
            newStory = newStory.replace('太郎', name);
            newStory = newStory.replace('太郎', name);
        }

        const weight = Math.round(Math.random() * (70 - 50) + 50) + 'kg';
        const temperature = Math.round(Math.random() * (25 - 15) + 15) + '℃';
        newStory = newStory.replace('#temprature', temperature);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}

function formSwitch() {
    lang = document.getElementsByName('jpus')
    if (lang[0].checked) {//us
        document.getElementById("customnameLabel").textContent = 'Enter custom name:';
        document.getElementById("randomizeButton").textContent = 'Generate random story';
    } else if (lang[1].checked) {//jp
        document.getElementById("customnameLabel").textContent = '主人公の名前：';
        document.getElementById("randomizeButton").textContent = '馬鹿話を作成';
    }
}
window.addEventListener('load', formSwitch());
