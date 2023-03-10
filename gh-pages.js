import { publish } from 'gh-pages';

publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/SimonLongstaff/linkedListDemo.git', // Update to point to your repository
        user: {
            name: 'Simon Longstaff', // update to use your name
            email: 'slongstaff@crane-electronics.com' // Update to use your email
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);
