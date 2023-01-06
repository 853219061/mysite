import request from './request';

async function getBanner() {
    return await request.get('/api/banner')
}

getBanner().then((r) => {
    console.log(r, 'r');
})