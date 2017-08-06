export default {
    path: '/sexy',
    children: [
        {
            path: '/more',
            load: () => import(/* webpackChunkName: 'login' */ './../login')
        },
        {
            path: '/',
            load: () => import(/* webpackChunkName: 'sexy' */ './../sexy')
        }
    ]
};
