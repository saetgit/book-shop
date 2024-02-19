// middlewares/auth.js

export default function ({ redirect, store }) {
  // Check if the user is authenticated
  if (!store.state.authenticated) {
    // Redirect to the login page if not authenticated
    return redirect('/auth/login');
  }
}