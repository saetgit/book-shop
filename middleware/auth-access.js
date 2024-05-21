export default async function ({ $auth, redirect, store }) {
    try {
        let user = await $auth.user;
        if (user && user.admin) {

        } else {
            console.log(`You don't have access to this route, You must be an admin!`);
            redirect('/');
        }
    } catch (error) {
        console.log(error);
    }
}