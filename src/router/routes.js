import Home from '@/views/Home';
import Blog from '@/views/Blog';
import Project from '@/views/Project';
import About from '@/views/About';
import Message from '@/views/Message';

const routes = [
    {
        name: "Home",
        path: "/",
        component: Home
    },
    {
        name: "Blog",
        path: "/Blog",
        component: Blog
    },
    {
        name: "Project",
        path: "/Project",
        component: Project
    },
    {
        name: "About",
        path: "/About",
        component: About
    }, 
    {
        name: "Message",
        path: "/Message",
        component: Message
    },
]

export default routes;