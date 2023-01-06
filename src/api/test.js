import axios from 'axios';

async function getNews() {
    const resp = await axios.get('/api/v4/moments/recommend_follow_people?rec_type=PC_HOME_FEED')
    console.log(resp);

}

getNews();